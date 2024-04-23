import  Heroes from "./functions.js"

const ulChallengers = document.getElementById("selected-challengers");
const ul = document.getElementById("heroes-lst");
const template = document.getElementById('hero-template');
let templateContent;

async function waitingForResponse() {
    try {
        
        const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");
        
        const allHeroes = await response.json()
        console.log(Heroes.getChallengers(allHeroes));
        const arrayChallengers = [];
        const selectedChallengers = [];
        
        Heroes.getChallengers(allHeroes).forEach(hero => {
            
            
            //contente of the template 
            templateContent = document.importNode(template.content, true);

            templateContent.querySelector("[data-id]").setAttribute("data-id", hero.id)  
 
            templateContent.querySelector('.js-img').src = hero.images.sm;

            templateContent.querySelector('.js-name').textContent = hero.name;
            
            templateContent.querySelector('.js-pv').textContent = hero.powerstats.durability;

            templateContent.querySelector('.js-strength').textContent = hero.powerstats.strength;

            templateContent.querySelector('.js-defense').textContent = hero.powerstats.combat;

            arrayChallengers.push(hero)

            ul.appendChild(templateContent);

        });


        document.querySelectorAll(".js-btn");
        console.log(document.querySelectorAll(".js-btn"));
        for ( const selectedHero of selectedChallengers) {
            console.log(selectedHero);

            
        }
        // return getChallengers(allHeroes);
        //button to select characters

    }

    catch (error) {
        console.error("truc", error);
    }

}

console.log(waitingForResponse());

// const allHeroes = fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json")
// .then(response => response.json())
// .then(json => console.log(json));

// console.log(allHeroes);
// console.log(getRandomArrayValue(allHeroes));


// let characters = [
//     {
//         name: 'Chun-li',
//         life: 50,
//         xp: 9,
//         weapon: 9,
//         shield: 4
//     },
//     {
//         name: 'Ryu',
//         life: 50,
//         xp: 7,
//         weapon: 8,
//         shield: 7
//     },
//     {
//         name: 'Ken',
//         life: 50,
//         xp: 7,
//         weapon: 7,
//         shield: 7
//     },
//     {
//         name: 'Zangief',
//         life: 50,
//         xp: 5,
//         weapon: 5,
//         shield: 2
//     }
// ];



