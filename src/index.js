//global variables
const dogBar = document.querySelector('#dog-bar')
const dogInfo = document.querySelector('#dog-info')
const dogURL = 'http://localhost:3000/pups'
//initalize functions
getDogInfo()

//fetch data from server

function getDogInfo () {
    fetch(dogURL)
    .then(res => res.json())
    .then(data => displayDog(data))
}

function getDogId(id) {
    return fetch(dogURL + `/${id}`)
    .then(res => res.json())
    .then(data => displayDogInfo(data))
}

//display functions

function displayDog(dogsArr) {
    dogsArr.forEach(element => {
        let dogItem = document.createElement('span')
        dogItem.textContent = element.name
        dogItem.setAttribute('id', `dog-num-${element['id']}`)
        dogBar.appendChild(dogItem)
        dogNameListener(dogItem, element)
    });
}

// event Listeners
function dogNameListener(dogItem, element) {
    dogItem.addEventListener('click', () => {
        //console.log(`clicked ${element.name}`)
        getDogId(element.id)
    })
}

// function goodBadBtn(btn) {
//     btn.addEventListener('click', console.log(btn.textContent))
// }

//Display dog Info
function displayDogInfo(dogObject) {
    console.log(dogObject)
    dogInfo.innerHTML = ''
    let dogPic = document.createElement('img')
    let dogName = document.createElement('h2')
    let dogBtn = document.createElement('button')

    dogPic.src = dogObject.image
    dogName.textContent = dogObject.name
    dogBtn.textContent = dogObject.isGoodDog ? 'Good Dog!' : 'Bad Dog!'

    dogInfo.appendChild(dogPic)
    dogInfo.appendChild(dogName)
    dogInfo.appendChild(dogBtn)

    dogBtn.addEventListener('click', () => dogBtnToggle(dogBtn))
}

function dogBtnToggle(dogBtn) {
    dogBtn.textContent = dogBtn.textContent.includes('Good') ? 'Bad dog!' : 'Good dog!'
    
}