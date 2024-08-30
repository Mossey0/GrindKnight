class Recruit {
	constructor(name, health, attack, cost, count, rank) {
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.cost = cost;
		this.count = count;
		this.rank = rank;
	}
}

const recruits = {
	F: {
		villager: new Recruit("Villager", 3, 1, 1, "F"),
		peasant: new Recruit("Peasant", 4, 2, 2, "F"),
		apprentice: new Recruit("Apprentice", 5, 3, 3, "F"),
		militaryTrainee: new Recruit("Military Trainee", 7, 5, 5, "F"),
	},

	D: {
		footman: new Recruit("Footman", 20, 15, 10, "D"),
		militia: new Recruit("Militia", 22, 17, 12, "D"),
		archer: new Recruit("Archer", 18, 20, 15, "D"),
		pikeman: new Recruit("Pikeman", 25, 18, 18, "D"),
		crossbowman: new Recruit("Crossbowman", 20, 22, 20, "D"),
		guardsman: new Recruit("Guardsman", 30, 20, 25, "D"),
	},

	C: {
		knight: new Recruit("Knight", 60, 50, 40, "C"),
		lancer: new Recruit("Lancer", 55, 55, 45, "C"),
		paladin: new Recruit("Paladin", 70, 45, 50, "C"),
		berserker: new Recruit("Berserker", 50, 65, 55, "C"),
		captain: new Recruit("Captain", 65, 55, 60, "C"),
		templar: new Recruit("Templar", 75, 50, 65, "C"),
		mage: new Recruit("Mage", 45, 70, 70, "C"),
	},

	B: {
		ranger: new Recruit("Ranger", 120, 130, 100, "B"),
		gladiator: new Recruit("Gladiator", 150, 140, 110, "B"),
		summoner: new Recruit("Summoner", 110, 160, 120, "B"),
		warlock: new Recruit("Warlock", 100, 170, 130, "B"),
		barbarian: new Recruit("Barbarian", 180, 150, 140, "B"),
		assassin: new Recruit("Assassin", 90, 190, 150, "B"),
		eliteGuardsman: new Recruit("Elite Guardsman", 200, 130, 160, "B"),
		battleMage: new Recruit("Battlemage", 130, 180, 170, "B"),
		pyromancer: new Recruit("Pyromancer", 120, 200, 180, "B"),
	},

	A: {
		rogue: new Recruit("Rogue", 300, 350, 250, "A"),
		druid: new Recruit("Druid", 350, 320, 280, "A"),
		shaman: new Recruit("Shaman", 320, 370, 310, "A"),
		sorcerer: new Recruit("Sorcerer", 280, 420, 340, "A"),
		loneMonk: new Recruit("Monk", 400, 300, 370, "A"),
		necromancer: new Recruit("Necromancer", 270, 450, 400, "A"),
	},

	S: {
		wizard: new Recruit("Wizard", 700, 850, 600, "S"),
		divineWarrior: new Recruit("Divine Warrior", 900, 750, 650, "S"),
		stormCaller: new Recruit("Storm Caller", 650, 950, 700, "S"),
		crusader: new Recruit("Crusader", 950, 780, 750, "S"),
		shadowBlade: new Recruit("Shadow Blade", 600, 1000, 800, "S"),
		drakeKnight: new Recruit("Drake Knight", 1000, 820, 850, "S"),
	},

	SS: {
		dragonSlayer: new Recruit("Dragon Slayer", 1800, 1500, 1200, "SS"),
		starCaller: new Recruit("Star Caller", 1500, 1800, 1400, "SS"),
		voidWalker: new Recruit("Void Walker", 1600, 1700, 1600, "SS"),
	},

	SSS: {
		legendaryHero: new Recruit("Legendary Hero", 2500, 2300, 2200, "SSS"),
		celestialHero: new Recruit("Celestial Hero", 3400, 3000, 3600, "SSS"),
	},

	X: {
		avatarOfWar: new Recruit("Avatar of Warfare", 5000, 3500, 4500, "X"),
		shadowMonarch: new Recruit("Shadow Monarch", 5500, 3300, 4800, "X"),
	},
};

export default recruits;
