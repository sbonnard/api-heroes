// /**
//  * Return a random value between 0 and a chosen number.
//  * @param {number} max - chosen number
//  * @returns {number} - random value
//  */
// function getRandomValue(max) {
//     return Math.floor(Math.random() * (max + 1));
// }

// /**
//  * Gets a random value from an array
//  * @param {array} array - Array of datas 
//  * @returns {*} - a random value
//  */
// function getRandomArrayValue(array) {
//     return array[getRandomValue(array.length - 1)];
// }

// class Character {
//     constructor(name, properties) {
//         this.name = name;
//         this.life = 50;
//         this.xp = properties.xp || 3;
//         this.weapon = properties.weapon || 3;
//         this.shield = properties.shield || 3;
//     }

//     introduceMySelf() {
//         console.log(`My name is ${this.name}.`);
//     }

//     /**
//      * Get a random attack score
//      * @returns {number} - Random attack score
//      */
//     getAttackScore() {
//         return getRandomValue(this.weapon) + this.xp;
//     }

//     /**
//      * Get a random defense score
//      * @returns {number} - Random attack score
//      */
//     getDefenseScore() {
//         return getRandomValue(this.shield) + this.xp;
//     }

//     /**
//      * Test if a character is alive and return true if he is
//      * @returns {boolean} -True if alive, false if dead
//      */
//     isAlive() {
//         return this.life > 0;
//     }
// }

// class BattleField {
//     constructor(characterList) {
//         this.characters = characterList;
//     }

//     /**
//      * Get 2 differents and random challengers for a fight.
//      * @returns {array} First index of the array will draw the attacker and the second one will draw the defender.
//      */
//     getChallengers() {
//         let challengers = [];
//         while (challengers.length < 2) {
//             const c = getRandomArrayValue(this.characters);
//             if (!challengers.includes(c)) {
//                 challengers.push(c);
//             }
//         }
//         return challengers;
//     }

//     /**
//      * Fight between two characters and define the winner and the loser.
//      * @returns {string} A text to explain the fight.
//      */
//     fight() {
//         const [attacker, defender] = this.getChallengers();

//         let txt = '';

//         const attackPoints = attacker.getAttackScore();
//         if (attackPoints > defender.getDefenseScore()) {
//             defender.life -= attackPoints;

//             txt += `${attacker.name} attaque ${defender.name} et a gagné le combat en lui infligeant ${attackPoints} points de dégats.`;

//             if (!defender.isAlive()) {
//                 txt += ` ${defender.name} est mort 💀`
//             }
//         }
//         else {
//             txt += `${defender.name} a contré l'attaque de ${attacker.name}.`;
//         }

//         this.burnTheDead();

//         return txt;
//     }

//     /**
//      * Delete a character from is array if he is out of hp
//      */
//     burnTheDead() {
//         this.characters = this.characters.filter(c => c.isAlive());
//     }

//     /**
//      * Number of characters
//      * @returns {number} Number of characters
//      */
//     getNbChar() {
//         return this.characters.length;
//     }

//     /**
//      * Fight until only 1 remains
//      * @return {object} -The winner's instance
//      */
//     start() {
//         while (this.getNbChar() > 1) {
//             console.log(this.fight());
//         }
//         return this.characters[0];
//     }
// }

// const battleRoyal = new BattleField([
//     new Character('Chun-li', { xp: 9, weapon: 9, shield: 4 }),
//     new Character('Ryu', { xp: 7, weapon: 8, shield: 7 }),
//     new Character('Ken', { xp: 7, weapon: 7, shield: 7 }),
//     new Character('Zangief', { xp: 5, weapon: 5, shield: 4 })
// ]);

// console.table(
//     battleRoyal.start()
// );
