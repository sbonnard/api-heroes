
import Heroes from "./functions.js"

const ulChallengers = document.getElementById("selected-challengers");
const ul = document.getElementById("heroes-lst");
const template = document.getElementById('hero-template');
let templateContent;



/**
 * The function containing API datas. It creates a template and draws 10 random characters from the API.
 */
async function waitingForResponse() {
    try {

        const response = await fetch("https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json");

        const allHeroes = await response.json()
        const arrayChallengers = [];
        const selectedChallengers = [];
        const btnArray = [];
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


            // console.log(document.querySelector("[data-id]"));
        });

        const allBtn = document.querySelectorAll(".js-btn");
        getHero(allBtn)
    }

    catch (error) {
        console.error("truc", error);
    }

}

/**
 * Select and push a character in current challenger's array.
 * @param {element} allBtn Every button from the Hero template.
 */
async function getHero(allBtn) {

    for (const btn of allBtn) {
        console.log(btn);
        const cardHero = btn.closest(".js-hero")
        btn.addEventListener("click", function (event) {
            if (btn.dataset.selected === "selected") {
                ul.appendChild(cardHero)
            } else {
                console.log(cardHero);
                btn.dataset.selected = "selected";
                const idData = cardHero.dataset.id
                console.log(idData);

                ulChallengers.appendChild(cardHero)

                btn.textContent = "Retirer le Héros";
            }
        })
    }

}

console.log(getHero());
console.log(waitingForResponse());

const removeButtons = document.querySelectorAll('#ulChallengers .js-button');
console.log(removeButtons);

async function removeHero(removeButtons) {
    removeButtons.forEach(element => {
        element.
            ul.appendChild(cardHero)
    });
}

console.log(removeHero());

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
