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
        this.selector = selector
        this.setup()
    }

    setup() {    
        const tooltipElements = document.querySelectorAll(this.selector)
        tooltipElements.forEach(function(element) {
            let tooltipWidth = (element.getBoundingClientRect().width)*1.5
            element.style.position = `relative`
            let tooltipBox = document.createElement(`div`)
            tooltipBox.style.background = `black`
            tooltipBox.style.color = `white`
            tooltipBox.style.position = `absolute`
            tooltipBox.style.width = `${tooltipWidth}px`
            tooltipBox.style.lineHeight = `1.4`
            tooltipBox.style.top = `-50px`
            tooltipBox.style.left = `-50px`
            tooltipBox.textContent = element.dataset[`tooltip`]
            element.addEventListener(`mouseover`, function(){
                element.appendChild(tooltipBox)
            })
            element.addEventListener(`mouseout`, function(){
                tooltipBox.remove()
            })
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