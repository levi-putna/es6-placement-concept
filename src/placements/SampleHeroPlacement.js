import { AbstractPlacement } from './AbstractPlacement'

/**
 *
 */
export class SampleHeroPlacement extends AbstractPlacement {

    /**
     * this is a good place to initialize any data
     */
    init() {
        this.name = null;
    }

    style() {
        return `
            <style>
                div {
                   width:100%;
                   height: 250px;
                   background-color: grey;
                   border: 1px solid;
                }
            </style>
        `;
    }

    render() {
        return `
            <div >
                <p>
                    I am a simple placement...
                </p>
            </div>
        `;
    }
}