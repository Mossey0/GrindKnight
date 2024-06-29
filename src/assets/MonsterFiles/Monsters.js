class Monster {
	constructor(name, health, attack, packSize, rank) {
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.packSize = packSize;
		this.rank = rank;
	}
	getHealth = () => {
		return this.health * this.packSize;
	};
	getAttack = () => {
		return this.attack * this.packSize;
	};
}

const monsters = {
	F: {
		slime: new Monster("Slime", 5, 2, 10, "F"),
		rat: new Monster("Rat", 3, 1, 20, "F"),
		feralDog: new Monster("Feral Dog", 8, 3, 5, "F"),
		goblin: new Monster("Goblin", 10, 4, 8, "F"),
		gremlin: new Monster("Gremlin", 7, 5, 12, "F"),
		spider: new Monster("Spider", 4, 2, 15, "F"),
		giantRat: new Monster("Giant Rat", 15, 5, 6, "F"),
		largeFireAnt: new Monster("Large Fire Ant", 8, 4, 30, "F"),
		largeSpider: new Monster("Large Spider", 12, 6, 8, "F"),
		kobold: new Monster("Kobold", 14, 7, 10, "F"),
		giantSoldierAnt: new Monster("Giant Soldier Ant", 20, 8, 25, "F"),
		antQueen: new Monster("Ant Queen", 50, 10, 1, "F"),
		bat: new Monster("Bat", 3, 2, 25, "F"),
	},

	D: {
		giantWasp: new Monster("Giant Wasp", 30, 25, 15, "D"),
		hoboGoblin: new Monster("Hobo Goblin", 40, 30, 5, "D"),
		skeletonArcher: new Monster("Skeleton Archer", 35, 35, 10, "D"),
		zombie: new Monster("Zombie", 50, 20, 20, "D"),
		wolf: new Monster("Wolf", 45, 35, 8, "D"),
		harpy: new Monster("Harpy", 40, 40, 6, "D"),
		bandit: new Monster("Bandit", 55, 45, 7, "D"),
		ghoul: new Monster("Ghoul", 60, 50, 5, "D"),
		giantScorpion: new Monster("Giant Scorpion", 70, 60, 3, "D"),
		dryad: new Monster("Dryad", 45, 55, 4, "D"),
		mudGolem: new Monster("Mud Golem", 100, 40, 2, "D"),
		swampTroll: new Monster("Swamp Troll", 120, 70, 2, "D"),
		ironGolem: new Monster("Iron Golem", 150, 80, 1, "D"),
		wraith: new Monster("Wraith", 80, 90, 3, "D"),
		cyclops: new Monster("Cyclops", 200, 100, 1, "D"),
		mummifiedWarrior: new Monster("Mummified Warrior", 90, 85, 4, "D"),
		sandWorm: new Monster("Sand Worm", 180, 95, 2, "D"),
		yeti: new Monster("Yeti", 200, 110, 1, "D"),
		iceElemental: new Monster("Ice Elemental", 130, 120, 2, "D"),
		giantSpider: new Monster("Giant Spider", 110, 100, 3, "D"),
		faerie: new Monster("Faerie", 40, 70, 8, "D"),
		unicorn: new Monster("Unicorn", 160, 130, 1, "D"),
		fireElemental: new Monster("Fire Elemental", 140, 130, 2, "D"),
		lavaGolem: new Monster("Lava Golem", 250, 100, 1, "D"),
		salamander: new Monster("Salamander", 100, 110, 4, "D"),
		merfolk: new Monster("Merfolk", 80, 80, 6, "D"),
		seaSerpent: new Monster("Sea Serpent", 230, 120, 1, "D"),
		centaur: new Monster("Centaur", 140, 125, 3, "D"),
		paperGolem: new Monster("Paper Golem", 180, 70, 2, "D"),
		crystalGolem: new Monster("Crystal Golem", 240, 110, 1, "D"),
		giantBat: new Monster("Giant Bat", 80, 90, 6, "D"),
		shinySlime: new Monster("Shiny Slime", 120, 60, 5, "D"),
	},

	C: {
		ancientGolem: new Monster("Ancient Golem", 500, 200, 1, "C"),
		giantEagle: new Monster("Giant Eagle", 300, 250, 3, "C"),
		hellHound: new Monster("Hell Hound", 350, 300, 5, "C"),
		elementalBear: new Monster("Elemental Bear", 450, 350, 2, "C"),
		griffon: new Monster("Griffon", 400, 400, 2, "C"),
		wyvern: new Monster("Wyvern", 600, 450, 1, "C"),
		skeletonKnight: new Monster("Skeleton Knight", 450, 400, 3, "C"),
		warGolem: new Monster("War Golem", 800, 350, 1, "C"),
		ghostlyCommander: new Monster("Ghostly Commander", 350, 500, 2, "C"),
		thunderbird: new Monster("Thunderbird", 400, 450, 2, "C"),
		stormGiant: new Monster("Storm Giant", 900, 600, 1, "C"),
		infernoSpawn: new Monster("Inferno Spawn", 500, 550, 2, "C"),
		iceGolem: new Monster("Ice Golem", 750, 400, 1, "C"),
		frostGiant: new Monster("Frost Giant", 850, 550, 1, "C"),
		polarBearWarrior: new Monster("Polar Bear Warrior", 600, 500, 2, "C"),
		shadowBeast: new Monster("Shadow Beast", 400, 600, 3, "C"),
		umbralHunter: new Monster("Umbral Hunter", 350, 650, 3, "C"),
		voidWalker: new Monster("Void Walker", 500, 550, 2, "C"),
		pegasus: new Monster("Pegasus", 450, 400, 2, "C"),
		cloudGiant: new Monster("Cloud Giant", 950, 500, 1, "C"),
		giantSquid: new Monster("Giant Squid", 700, 600, 1, "C"),
	},

	B: {
		oni: new Monster("Oni", 700, 500, 1, "C"),
		youngDragon: new Monster("Young Dragon", 1200, 800, 1, "B"),
		manticore: new Monster("Manticore", 1000, 900, 1, "B"),
		chimera: new Monster("Chimera", 1100, 950, 1, "B"),
		starWolf: new Monster("Star Wolf", 900, 1000, 3, "B"),
		vampire: new Monster("Vampire", 1300, 1100, 1, "B"),
		lich: new Monster("Lich", 1500, 1300, 1, "B"),
		drakeRider: new Monster("Drake Rider", 1000, 1200, 2, "B"),
		nightStalker: new Monster("Night Stalker", 1100, 1300, 2, "B"),
		celestialConstruct: new Monster("Celestial Construct", 1600, 1100, 1, "B"),
		deathKnight: new Monster("Death Knight", 1700, 1200, 1, "B"),
		soulReaver: new Monster("Soul Reaver", 1200, 1600, 1, "B"),
		chaosBeast: new Monster("Chaos Beast", 1300, 1400, 2, "B"),
		mimic: new Monster("Mimic", 1500, 1300, 1, "B"),
	},

	A: {
		dragon: new Monster("Dragon", 3000, 2000, 1, "A"),
		kraken: new Monster("Kraken", 3500, 1800, 1, "A"),
		hydra: new Monster("Hydra", 4000, 2200, 1, "A"),
		phoenix: new Monster("Phoenix", 3200, 2500, 1, "A"),
		archlich: new Monster("Archlich", 2800, 3000, 1, "A"),
		colossalGiant: new Monster("Colossal Giant", 5000, 2800, 1, "A"),
	},

	S: {
		DemonLord: new Monster("Demon Lord", 8000, 4000, 1, "S"),
		worldSerpent: new Monster("World Serpent", 10000, 3500, 1, "S"),
		dreamEater: new Monster("Dream Eater", 7500, 4500, 1, "S"),
		voidLeviathan: new Monster("Void Leviathan", 12000, 4000, 1, "S"),
		abyssalPrince: new Monster("Abyssal Prince", 9000, 5000, 1, "S"),
	},

	SS: {
		avatarOfChaos: new Monster("Avatar of Chaos", 20000, 8000, 1, "SS"),
		primorialDemon: new Monster("Primordial Demon", 18000, 9000, 1, "SS"),
		ancientDragon: new Monster("Ancient Dragon", 25000, 7500, 1, "SS"),
		chaosIncarnate: new Monster("Chaos Incarnate", 22000, 8500, 1, "SS"),
	},

	SSS: {
		CosmicDragon: new Monster("Cosmic Dragon", 50000, 15000, 1, "SSS"),
		infinityPheonix: new Monster("Infinity Phoenix", 45000, 18000, 1, "SSS"),
		eternityDragon: new Monster("Eternity Dragon", 55000, 17000, 1, "SSS"),
		livingBlackHole: new Monster("Living Black Hole", 60000, 20000, 1, "SSS"),
		dimensionalLeviathan: new Monster(
			"Dimensional Leviathan",
			70000,
			19000,
			1,
			"SSS"
		),
	},

	X: {
		cosmicArchitec: new Monster("Cosmic Architect", 100000, 30000, 1, "X"),
		outerGod: new Monster("Outer God", 120000, 35000, 1, "X"),
	},

	XX: {
		supremeCreator: new Monster("Supreme Creator", 200000, 50000, 1, "XX"),
	},
};

export default monsters;
