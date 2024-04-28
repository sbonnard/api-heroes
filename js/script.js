
import Heroes from "./functions.js"

const ulChallengers = document.getElementById("selected-challengers");
const ul = document.getElementById("heroes-lst");
const template = document.getElementById('hero-template');
let templateContent;



/**
 * The function containing API datas. It creates a template and draws 10 random characters from the API.
*/
async function loadChallengers() {
    try {
        
        const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");
        return await response.json();
    }
    
    catch (error) {
        console.error("truc", error);
    }
    
}

/**
 * Create the template of a challenger.
 */
async function createChallenger() {
    try {
        
        const allHeroes = await loadChallengers();
        const arrayChallengers = [];
        Heroes.getChallengers(allHeroes).forEach(hero => {
            
            //content of the template 
            templateContent = document.importNode(template.content, true);
            
            templateContent.querySelector("[data-id]").setAttribute("data-id", hero.id);
            
            templateContent.querySelector("[data-btn-id]").setAttribute("data-btn-id", hero.id)
            
            templateContent.querySelector('.js-img').src = hero.images.sm;
            
            templateContent.querySelector('.js-name').textContent = hero.name;
            
            templateContent.querySelector('.js-pv').textContent = hero.powerstats.durability;
            
            templateContent.querySelector('.js-strength').textContent = hero.powerstats.strength;
            
            templateContent.querySelector('.js-defense').textContent = hero.powerstats.combat;
            
            ul.appendChild(templateContent);
            
            arrayChallengers.push(hero)
            
            console.log(ul);
        });
        
        const allBtn = document.querySelectorAll(".js-btn");
        Heroes.getHero(allBtn, ul, ulChallengers);
    }
    
    catch (error) {
        console.error("truc", error);
    }
    
}

createChallenger();

const removeButtons = document.querySelectorAll('#ulChallengers .js-button');
console.log(removeButtons);