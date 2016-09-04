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

        //make sure the dom has finished loading before doing anything
        window.addEventListener("load", () => {

            //We are only selection the first match of the selector. We can use querySelectorAll if we wanted to do
            // multiple.
            this.selector = selector;
            this.element = document.querySelector(selector);

            //We should be able to simply remove the shadow dom if it's not working across all browsers.
            // If we do this we may have to add a unique id to each placement root to make sure we don't get any
            // conflicts, we will also need to be a little more careful with our JS code.
            if (this.element) {
                this.template = this.element.content;
                this.root = this.element.createShadowRoot();
                this._renderToElement(this.root);
            }
        });

    }

    /**
     * Called just after the constructor, but before the dom has completed loading.
     * Initialize any variables and data here. Also a good place to do any remote loading of data if its still required.
     * Don't do any dom manipulation as it may not have completed loading at this point, use @see elementWillMount()
     */
    init() {

    }

    /**
     * Fires after the dom has loaded and the new placement has been mounted on the dom. This is a great place to do a
     * ny dom manipulation and setup any event binding.
     *
     * @param element the root element that has been mounted. DOM selectors should start for this element. Example: element.querySelector(selector);
     */
    elementWillMount(element) {

    }

    /**
     * results of this method will be combined with the render method results before rendering it to the dom. Returning
     * code should include the <style>, this will allow for better ide browser support.
     *
     * Example:
     * return `<style>
     *     .some-class {
     *          background-color: #880000;
     *      }
     *  </style>`
     * @returns html | {null} Html code to be combined with the result of the render method.
     */
    style() {
        return null;
    }

    /**
     * Return html to be rendered to the dom element of this placement. This function should be aware of the data state
     * make a division on what content to return.
     *
     * Warning, don't call this method directly. @see reRender();
     */
    render() {
        return null;
    }

    /**
     * Re-render the placement, this us useful to call when the data has changed and the dom needs to be update. Note, this
     * will completely re render the dom, you will need to make sure the render function knows how to restore any data
     * changes that have been made.
     */
    reRender(){
        this._renderToElement(this.root);
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