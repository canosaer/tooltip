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
            console.log(element.getBoundingClientRect())
            let tooltipBox = document.createElement(`div`)
            element.style.position = `relative`
            tooltipBox.style.background = `black`
            tooltipBox.style.color = `white`
            tooltipBox.style.position = `absolute`
            tooltipBox.style.width = `200px`
            tooltipBox.style.height = `110px`
            tooltipBox.style.lineHeight = `1.4`
            tooltipBox.style.display = `flex`
            tooltipBox.style.alignItems = `center`
            tooltipBox.style.justifyContent = `center`
            tooltipBox.style.textAlign = `center`
            tooltipBox.style.padding = `15px`
            tooltipBox.style.opacity = `0`
            tooltipBox.style.borderRadius = `10%`
            tooltipBox.style.transition = `opacity 0.5s ease-out`
            tooltipBox.style.top = `-120px`
            if(element.getBoundingClientRect().left < 60){
                tooltipBox.style.left = `0px`
            }
            else if(element.getBoundingClientRect().right < 60){
                tooltipBox.style.right = `0px`
            }
            else{
                tooltipBox.style.left = `-60px`
            }
            
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
            arrowBox.style.top = `-17px`
            arrowBox.style.left = `${element.getBoundingClientRect().width/3}px`
            // arrowBox.classList.add(`slide-in`)
            element.addEventListener(`mouseover`, function(){
                element.appendChild(tooltipBox)
                element.appendChild(arrowBox)
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