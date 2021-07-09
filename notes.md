## what do I need?

- DOMContentLoaded or script defer
- fetch the data from the API
- make sure I can grab elements one at a time
- get dog names and display them in #dog-bar
    - function that returns the JSON object
    - function.forEach(element () => {
        let dogName = function(element.name)
    })
- create a function that will display individual dog names in a <span></span> tag
- create a function that will 
- add a click listener to each span element
- create a function that handles click events and displays innerHTML = '' as a default
    - after the empty page is displayed, send the ID of the clicked tag to a new function that will display doginfo in the #dog-info div 
        1. an `img` tag with the pup's image url
        2. an `h2` with the pup's name
        2.  a `button` that says `"Good Dog!"` or `"Bad Dog!"` based on whether `isGoodDog` is true or false.
- attatch a event listener to the good/bad dog button that will toggle the text displayed inside the button

 