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
        const bodyElement = document.querySelector(`body`)
        bodyElement.style.position = `relative`
        tooltipElements.forEach(function(element) {
            let tooltipBox = document.createElement(`div`)
            tooltipBox.style.background = `black`
            tooltipBox.style.color = `white`
            tooltipBox.style.position = `absolute`
            tooltipBox.style.width = `150px`
            tooltipBox.style.height = `75px`
            tooltipBox.style.lineHeight = `1.4`
            tooltipBox.style.display = `flex`
            tooltipBox.style.alignItems = `center`
            tooltipBox.style.justifyContent = `center`
            tooltipBox.style.textAlign = `center`
            tooltipBox.style.padding = `15px`
            tooltipBox.style.opacity = `0`
            tooltipBox.style.borderRadius = `10%`
            tooltipBox.style.transition = `opacity 0.5s ease-out`
            tooltipBox.style.top = `${window.scrollY+element.getBoundingClientRect().top-88}px`
            tooltipBox.style.left = `${window.scrollX+element.getBoundingClientRect().left-40}px`
            tooltipBox.textContent = element.dataset[`tooltip`]
            // tooltipBox.classList.add(`slide-in`)
            let arrowBox = document.createElement(`div`)
            arrowBox.style.background = `black`
            arrowBox.style.position = `absolute`
            arrowBox.style.width = `15px`
            arrowBox.style.height = `15px`
            arrowBox.style.transform = `rotate(45deg)`
            arrowBox.style.opacity = `0`
            arrowBox.style.transition = `opacity 0.5s ease-out`
            arrowBox.style.top = `${window.scrollY+element.getBoundingClientRect().top-20}px`
            arrowBox.style.left = `${window.scrollX+element.getBoundingClientRect().left + (element.getBoundingClientRect().width/3)}px`
            // arrowBox.classList.add(`slide-in`)
            element.addEventListener(`mouseover`, function(){
                bodyElement.appendChild(tooltipBox)
                bodyElement.appendChild(arrowBox)
                // gsap.from(`.slide-in`, { duration: 1, ease: `expo`, xPercent: -100 });
                setTimeout(function(){
                    tooltipBox.style.opacity = `1`
                    arrowBox.style.opacity = `1`
                }, 1)
            })
            element.addEventListener(`mouseout`, function(){
                tooltipBox.style.opacity = `0`
                arrowBox.style.opacity = `0`
                setTimeout(function(){
                    tooltipBox.remove()
                    arrowBox.remove()
                }, 500)
                
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