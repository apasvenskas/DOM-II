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
}


