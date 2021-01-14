/* Parameters:
 * - selector: the DOM selector that will get turned into a hoverable tooltip trigger
 * - content: the text to be shown in the tooltip on hover
 */


 //IIFE vs Class
// const TooltipIIFE = (function(){

//     var selector
//     var content

//     function init(selector, content) {
//         console.log(`Hi, I am TooltipIIFE.init`, selector, content)
//         this.selector = selector
//         print()
//     }

//     print = () => {
//         console.log(`printing selector`, selector)
//     }

//     function getSelector() {
//         console.log(`this?`, selector)
//         return this.selector
//     }

//     return{
//         init: init,
//         getSelector: getSelector
//     }
// }())

class TooltipClass {
    constructor(selector) {
        console.log(`hi I am a tooltip class instance`, selector)

        this.selector = selector

        this.setup()
    }

    setup() {    
        console.log(`setting up tooltip elements`)
        const tooltipElements = document.querySelectorAll(this.selector)
        tooltipElements.forEach(function(element) {
            const content = element.dataset[`tooltip`]
            console.log(`adding content`, content, `to element`, element.textContent)
        })
    }

    //getters
    getSelector() {
        return this.selector
    }

    getContent() {
        return this.content
    }

    //setters
    setSelector(newSelector) {
        this.selector = newSelector
    }
}