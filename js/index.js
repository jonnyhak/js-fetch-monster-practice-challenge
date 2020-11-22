document.addEventListener("DOMContentloaded", () => {

})

const monsterCollection = document.querySelector('#monster-container')
const addMonsterForm = document.querySelector('.add-monster-form')

//page navigation
monsterCollection.addEventListener('click', (e) => {
    if (e.target.matches('button.forward')) {

    } else if (e.target.matches('button.back')) {

    }

})




addMonsterForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const monsterName = e.target.name.value
    const monsterAge = e.target.age.value
    const monsterDescription = e.target.description.value 
    const monster = {
        name: monsterName,
        age: monsterAge,
        description: monsterDescription
    }
    
    fetch('http://localhost:3000/monsters', {
        method: "POST",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(monster)
    })
    .then((response) => {
        return response.json()
    })
    .then((monsterObject) => {
        renderOneMonster(monsterObject)
    })
    
})

fetch('http://localhost:3000/monsters/?_limit=50&_page=1')
    .then(response => {
        return response.json()
    }).then((monsterArray) => {
        console.log(monsterArray)
        monsterArray.forEach((monsterObject) => {
            renderOneMonster(monsterObject)
        })
    })

function renderOneMonster(monsterObject) {
    const monsterCollection = document.querySelector("#monster-container")
    const div = document.createElement("div")
    div.classList.add("monster")
    div.dataset.id = monsterObject.id
    div.innerHTML = `
        <h2>${monsterObject.name}</h2>
        <p>Age: ${monsterObject.age}<p>
        <p>Description: ${monsterObject.description}</p>
    `
    monsterCollection.append(div)
}

