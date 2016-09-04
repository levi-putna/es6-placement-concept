/**
 * A base implementation of a placement, all placement classes should extend from this type.
 *
 * Classes that
 *
 * The placement has the following lifecycle.
 *  - init()
 *  - render()
 */
export class AbstractPlacement {

    /**
     * Initiate the placement and call the render function if the init function returns true.
     *
     * Note: if the selector is unable to finde any DOM element, this class will exit without calling the init or render function.
     *
     * @param selector a valid ES6 dom selector. Example: #some-id
     */
    constructor(selector) {

        this.init();

        window.addEventListener("load", () => {
            this.selector = selector;
            this.element = document.querySelector(selector);

            if (this.element) {
                this.template = this.element.content;
                this.root = this.element.createShadowRoot();
                this._renderToElement(this.root);
            }
        });

    }

    init() {

    }

    elementWillMount(element) {

    }

    style() {
        return null;
    }

    /**
     * Render the element at any given state.
     *
     * @param root_element the base shadowdom element
     */
    render() {
        return null;
    }

    /*
     * Protected method populates the root element with the
     * @param root_element
     */
    _renderToElement(root_element) {
        if (this.element) {
            let content = this.style() + this.render();
            root_element.innerHTML = content;
        }

        return this.elementWillMount(this.root);
    }
}