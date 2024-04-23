
import  Heroes from "./functions.js"

const ulChallengers = document.getElementById("selected-challengers");
const ul = document.getElementById("heroes-lst");
const template = document.getElementById('hero-template');
let templateContent;

async function waitingForResponse() {
    try {
        
        const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");
        
        const allHeroes = await response.json()
        // console.log(Heroes.getChallengers(allHeroes));
        const arrayChallengers = [];
        const selectedChallengers = [];
        const btnArray = [];
        Heroes.getChallengers(allHeroes).forEach(hero => {
            
            
            //contente of the template 
            templateContent = document.importNode(template.content, true);

            templateContent.querySelector("[data-id]").setAttribute("data-id", hero.id);
            
            templateContent.querySelector("[data-btn-id]").setAttribute("data-btn-id", hero.id) 
 
            templateContent.querySelector('.js-img').src = hero.images.sm;

            templateContent.querySelector('.js-name').textContent = hero.name;
            
            templateContent.querySelector('.js-pv').textContent = hero.powerstats.durability;

            templateContent.querySelector('.js-strength').textContent = hero.powerstats.strength;

            templateContent.querySelector('.js-defense').textContent = hero.powerstats.combat;

            arrayChallengers.push(hero)

            ul.appendChild(templateContent);

            console.log(ul);

            
            // console.log(document.querySelector("[data-id]"));
        });
        
        const allBtn = document.querySelectorAll(".js-btn");
        getHero(allBtn)
    }

    catch (error) {
        console.error("truc", error);
    }

}

async function getHero (allBtn) {
    const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/.json");

    for(const btn of allBtn) {
        console.log(btn);
        btn.addEventListener("click", function(event) {
            const idHero = btn.closest(".js-hero")
            console.log(idHero);
            // console.log(event.target.dataset.btnId);
            // if(event.target.dataset.btnId === ul.dataId) 
        })
    }
    
}
console.log(getHero());
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
