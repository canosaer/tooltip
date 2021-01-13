/*Parameters:
 * -selector: the DOM selector that will get turned into a hoverable tooltip trigger
 * -contenr: the text to be shown in the tooltip on hover
 * 
 */


 //IIFE vs Class
const TooltipIIFE = (function(){

    function init(selector, content) {
        console.log(`Hi, I am TooltipIIFE.init`, selector, content)
    }

    return{
        init: init
    }
}())

class TooltipClass {
    constructor(selector, content) {
        console.log(`hi I am a tooltip class instance`, selector, content)

        this.selector = selector
        this.content = content
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