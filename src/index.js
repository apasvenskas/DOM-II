import './less/index.less'

// Your code goes here!
// First rvent load!!!
window.onload = function (evt){
    console.log(`${evt.type} started!`); //load to make sure nothing startes before DOM is loaded. 
    const heading = document.querySelector('h1');
    heading.textContent = 'Ready To Go';
    // additional funtionality added when somthing is copied it will apear next tp h1.
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text;
            })
    })
// adding a click event!! 
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
}) 

// dblclick
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
}) // item disapears upon duoble clicking. 
// keydown
window.addEventListener('keydown', evt => {
    if (evt.key == 6) {
        document.body.innerHTML = '<h1>You been Hacked</h1>'
    }
})
//records mose movment
document.body.addEventListener('mousemove', evt => {
    const { clientX, clientY} = evt
    console.log(`mouse is at ${clientX}, ${clientY}`)
})
const destinations = document.querySelectorAll('.destination')//sleceting the class to be worked on.
for (let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = 'bold'
    })
    destination.addEventListener('mouseleave', () => {
        destination.style.fontWeight = 'initial'
    })
}
}


