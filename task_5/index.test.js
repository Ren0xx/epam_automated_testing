const request = require('supertest');

const api = request('https://restful-booker.herokuapp.com');


let token;
let bookingId;
const createData = {
    "firstname": "Jim",
    "lastname": "Brown",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "Breakfast"
};

const updateData = {
    "firstname": "Adam",
    "lastname": "Red",
    "totalprice": 100,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2020-01-01",
        "checkout": "2021-01-01"
    },
    "additionalneeds": "Breakfast"
};

beforeAll(async () => {
    const res = await api
        .post('/auth')
        .send({ username: 'admin', password: 'password123' });

    token = res.body.token;
});

describe('booking', () => {
    it('should create a new booking', async () => {
        const res = await api
            .post('/booking')
            .set('Accept', 'application/json')
            .set('Cookie', `token=${token}`)
            .send(createData);

        expect(res.statusCode).toBe(200);
        expect(res.get('Content-Type')).toMatch(/application\/json/);
        expect(res.body).toHaveProperty('bookingid');

        bookingId = res.body.bookingid;
    });
    it('should get created booking by id', async () => {
        const res = await api
            .get(`/booking/${bookingId}`)
            .set('Cookie', `token=${token}`)
            .set('Accept', 'application/json');


        expect(res.statusCode).toBe(200);
        expect(res.get('Content-Type')).toMatch(/application\/json/);

        const b = res.body;
        expect(b.firstname).toBe(createData.firstname);
        expect(b.lastname).toBe(createData.lastname);
        expect(b.totalprice).toBe(createData.totalprice);
        expect(b.depositpaid).toBe(createData.depositpaid);
        expect(b.bookingdates.checkin).toBe(createData.bookingdates.checkin);
        expect(b.bookingdates.checkout).toBe(createData.bookingdates.checkout);
        expect(b.additionalneeds).toBe(createData.additionalneeds);

    });
    it('should update created booking', async () => {
        const res = await api
            .put(`/booking/${bookingId}`)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cookie', `token=${token}`)
            .send(updateData);

        expect(res.statusCode).toBe(200);
        expect(res.get('Content-Type')).toMatch(/application\/json/);

        const b = res.body;
        expect(b.firstname).toBe(updateData.firstname);
        expect(b.lastname).toBe(updateData.lastname);
        expect(b.totalprice).toBe(updateData.totalprice);
        expect(b.depositpaid).toBe(updateData.depositpaid);
        expect(b.bookingdates.checkin).toBe(updateData.bookingdates.checkin);
        expect(b.bookingdates.checkout).toBe(updateData.bookingdates.checkout);
        expect(b.additionalneeds).toBe(updateData.additionalneeds);
    });
    it("should remove created booking", async () => {
        const res = await api
            .delete(`/booking/${bookingId}`)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Cookie', `token=${token}`);

        expect(res.statusCode).toBe(201);
        expect(res.get('Content-Type')).toMatch("text/plain; charset=utf-8");
    });
});
