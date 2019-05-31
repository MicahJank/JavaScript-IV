/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(attrs) {
        this.createdAt = attrs.createdAt;
        this.name = attrs.name;
        this.dimensions = attrs.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }
}

class CharacterStats extends GameObject {
    constructor(statAttrs) {
        super(statAttrs);
        this.healthPoints = statAttrs.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats {
    constructor(humanoidAttrs) {
        super(humanoidAttrs);
        this.team = humanoidAttrs.team;
        this.weapons = humanoidAttrs.weapons;
        this.language = humanoidAttrs.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`;
    }
}




const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.




// Hero and Villan Constructors

class Hero extends Humanoid {
    constructor(heroAttrs) {
        super(heroAttrs);
    }

    heroSlash(targetObj) {
        console.log(`${this.name} used Hero Slash!`);
        targetObj.healthPoints -= 5;
        console.log(`${targetObj.name} lost 5 health points! Their current health is at ${targetObj.healthPoints}!`);
    }
}


class Villain extends Humanoid {
    constructor(villainAttrs) {
        super(villainAttrs);
    }

    villainKick(targetObj) {
        console.log(`${this.name} used Villain Kick!`);
        targetObj.healthPoints -= 3;
        console.log(`${targetObj.name} lost 3 health points! Their current health is at ${targetObj.healthPoints}!`);
    }
}


const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 3,
        width: 2,
        height: 3,
    },
    healthPoints: 11,
    name: 'Micah',
    team: 'Heros Guild',
    weapons: [
        'Sword of The Hero',
    ],
    language: 'Common Tongue',
});

const villain = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 5,
    },
    healthPoints: 10,
    name: 'Jerry',
    team: 'The Horde',
    weapons: [
        'Legs',
        'Fists',
    ],
    language: 'Common Tongue',
});

  villain.villainKick(hero);
  hero.heroSlash(villain);
  villain.villainKick(hero);
  hero.heroSlash(villain);