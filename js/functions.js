/**
 * Return a random value between 0 and a chosen number.
 * @param {number} max - chosen number
 * @returns {number} - random value
 */
function getRandomValue(max) {
    return Math.floor(Math.random() * (max + 1));
}


/**
 * Gets a random value from an array
 * @param {array} array - Array of datas 
 * @returns {*} - a random value
 */
function getRandomArrayValue(array) {
    return array[getRandomValue(array.length - 1)];
}

/**
 * Get random attack score from character stats
 * @param {object} attacker - An object representing a character
 * @returns {number} - Random attack score
 */
function getAttackScore(attacker) {
    return getRandomValue(attacker.weapon) + attacker.xp;
}

/**
 * Get random defense score from character stats
 * @param {object} defender - An object representing a character
 * @returns {number} - Random defense score
 */
function getDefenseScore(defender) {
    return getRandomValue(defender.shield) + defender.xp;
}

/**
 * Get 2 different and random challengers for a fight.
 * @param {array} charactersList The array you want the character's to be from.
 * @returns {array} First index of the array will draw the attacker and the second one will draw the defender.
 */
function getChallengers(charactersList) {
    let challengers = [];
    while (challengers.length < 10) {
        const c = getRandomArrayValue(charactersList);
        if (!challengers.includes(c)) {
            challengers.push(c);
        }
    }
    return challengers;
}

// console.log(getChallengers(allHeroes));

/**
 * fight between two characters and define the winner and the loser.
 * @param {array} challengers the first element in the array is the attacker and the second is the defender. they are objects. 
 * @returns {string} A text to explain the fight.
 */
function fight(challengers) {
    const attacker = challengers[0];
    const defender = challengers[1];

    let txt = '';

    const attackPoints = getAttackScore(attacker);
    if (attackPoints > getDefenseScore(defender)) {
        defender.life -= attackPoints;

        txt += `${attacker.name} attaque ${defender.name} et a gagné le combat en lui infligeant ${attackPoints} points de dégats.`;

        if (!isAlive(defender)) {
            txt += ` ${defender.name} est mort 💀`
        }
    }
    else {
        txt += `${defender.name} a contré l'attaque de ${attacker.name}.`;
    }

    return txt;
}

/**
 * Test if a character is alive and return true if he is
 * @param {object} character -The character's object
 * @returns {boolean} -True if alive, false if dead
 */
function isAlive(character) {
    return character.life > 0;
}


/**
 * Delete a character from is array if he is out of hp
 * @param {array} charactersArray -The characters array
 * @returns {array} -The new array without characters out of hp
 */
function burnTheDead(charactersArray) {
    return charactersArray.filter(isAlive);
}

/**
 * Fight until only 1 remains
 * @param {array} characterArray -The array with all our characters
 * @return {object} -The winner's object
 */
function startBattleRoyal(characterArray) {
    while (characterArray.length > 1) {
        const challengers = getChallengers(characterArray);
        console.log(fight(challengers));
        characterArray = burnTheDead(characterArray);
    }
    return characterArray[0];
}

function startBattleRoyalRec(characterArray) {
    if (characterArray.length === 1) return characterArray[0];

    console.log(fight(getChallengers(characterArray)));
    return startBattleRoyalRec(burnTheDead(characterArray));
}

function startBattleRoyalInterval(characterArray) {

    const timer = setInterval(() => {
        const challengers = getChallengers(characterArray);
        console.log(fight(challengers));
        characterArray = burnTheDead(characterArray);

        if (characterArray.length === 1) {
            clearInterval(timer);
            console.table(characterArray[0]);
        }
    }, 1000);
}


/**
 * Select and push a character in current challenger's array.
 * @param {element} allBtn Every button from the Hero template.
 * @param {element} element1 Selected characters ul.
 * @param {element} element2 Chose your character ul.
 */
async function getHero(allBtn, element1, element2) {
console.log(allBtn);
    for (const btn of allBtn) {
        console.log(btn);
        const cardHero = btn.closest(".js-hero")
        btn.addEventListener("click", function (event) {
            if (btn.dataset.selected === "selected") {
                element1.appendChild(cardHero)
            } else {
                console.log(cardHero);
                btn.dataset.selected = "selected";
                const idData = cardHero.dataset.id
                console.log(idData);

                element2.appendChild(cardHero)

                btn.textContent = "Retirer le Héros";
            }
        })
    }

}

// startBattleRoyalInterval(characters);
// console.table(startBattleRoyalInterval(characters));

export default {
    getRandomValue,
    getRandomArrayValue,
    getAttackScore,
    getDefenseScore,
    getChallengers,
    fight,
    isAlive,
    burnTheDead,
    startBattleRoyalInterval,
    getHero
}