import { AbstractPlacement } from './AbstractPlacement'

/**
 *
 */
export class SampleBannerPlacement extends AbstractPlacement {

    /**
     * this is a good place to initialize any data
     */
    init(){
        this.name = null;
    }
    /**
     * This method fires after the dom renders, it is a great place to set up any event bindings.
     * @param element
     */
    elementWillMount(element) {

        //input binding, this is one way of doing it. If you dont want to constantly update the value. You could just
        //grab in on the btn click. I'm doing this as an example.
        this.input = element.querySelector('input[name="hello-name"]');
        this.input.addEventListener('change', (event) => {
            this.name = event.target.value;
        });

        //Button binding
        this.btn = element.querySelector('#btn-say-hello');
        this.btn.addEventListener('click', (event) => {
            this.input.classList.remove("shake");
            if(this.name){
                alert('Hello ' + this.name);
            }else{
                alert('Who should I say hello to?');
                this.error();
            }
        });
    }

    error(){
        this.input.classList.add("shake");
    }

    style() {
        return `
            <style>
                p {
                    background-color: #880000;
                }
                
                .sample-banner-placement {
                    border: 1px solid #cccccc;
                    margin: 10px;
                }
                
                @keyframes shake {
                  10%, 90% {
                    transform: translate3d(-1px, 0, 0);
                  }
                  
                  20%, 80% {
                    transform: translate3d(2px, 0, 0);
                  }
                
                  30%, 50%, 70% {
                    transform: translate3d(-4px, 0, 0);
                  }
                
                  40%, 60% {
                    transform: translate3d(4px, 0, 0);
                  }
                }
                
                .shake {
                   animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
                   transform: translate3d(0, 0, 0);
                }
            </style>
        `;
    }

    render() {
        return `
            <div class="sample-banner-placement">
                <p>
                    Welcome to my amazing sample placement. As you can see this placement is loaded into the shadow dom,
                    you can interact with the placement via from within the placement class. And inject the css.
                </p>
                Who will we say hello to: <input type="text" name="hello-name"><button id="btn-say-hello">Say Hello</button>
            </div>
        `;
    }
}