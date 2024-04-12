
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

const characters = [
    {
        name: 'Godzilla',
        life: 50,
        xp: 5,
        weapon: 9,
        shield: 4,
        alive: true
    },
    {
        name: 'Kong',
        life: 50,
        xp: 7,
        weapon: 8,
        shield: 7,
        alive: true
    },
    {
        name: 'Hulk',
        life: 50,
        xp: 4,
        weapon: 3,
        shield: 2,
        alive: true
    },
    {
        name: 'Aquaman',
        life: 50,
        xp: 4,
        weapon: 3,
        shield: 1,
        alive: true
    }
];

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
 * get 2 random challengers for a fight.
 * @param {array} charactersList The array you want the character's to be from.
 * @returns {array} First index of the array will draw the attacker and the second one will draw the defender.
 */
function getChallengers(charactersList) {
    let challengers = [];
    while (challengers.length < 2) {
        challengers.push(getRandomArrayValue(charactersList));
        if (challengers[0] === challengers[1]) {
            challengers.pop()
        }
    }
    return challengers;
}


let challengers = getChallengers(characters);
console.table(characters);

console.log(
    challengers[0],
    getAttackScore(challengers[0])
);

console.log(
    challengers[1],
    getDefenseScore(challengers[1])
);