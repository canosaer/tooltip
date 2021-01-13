/*Parameters:
 * -selector: the DOM selector that will get turned into a hoverable tooltip trigger
 * -contenr: the text to be shown in the tooltip on hover
 * 
 */


 //IIFE vs Class
const TooltipIIFE = (function(){

    var selector
    var content

    function init(selector, content) {
        console.log(`Hi, I am TooltipIIFE.init`, selector, content)
        this.selector = selector
        print()
    }

    print = () => {
        console.log(`printing selector`, selector)
    }

    function getSelector() {
        console.log(`this?`, selector)
        return this.selector
    }

    return{
        init: init,
        getSelector: getSelector
    }
}())

class TooltipClass {
    constructor(selector, content) {
        console.log(`hi I am a tooltip class instance`, selector, content)

        this.selector = selector
        this.content = content

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