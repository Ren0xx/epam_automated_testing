class BaseComponent {

    constructor(rootSelector) {
        this.rootSeletor = rootSelector;
    }

    get rootEl() {
        return $(this.rootSeletor);
    }
}

export default BaseComponent;