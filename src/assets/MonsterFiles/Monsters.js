class Monster {
	constructor(name, health, attack, packSize, rank) {
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.packSize = packSize;
		this.rank = rank;
	}
}

const monsters = {
	F: {
		slime: new Monster("Slime", 2, 2, 60, "F"),
		rat: new Monster("Rat", 3, 2, 50, "F"),
		goblin: new Monster("Goblin", 3, 2, 45, "F"),
		gremlin: new Monster("Gremlin", 2, 3, 50, "F"),
		spider: new Monster("Spider", 2, 2, 60, "F"),
		soldierAnt: new Monster("Soldier Ant", 2, 2, 55, "F"),
		feralDog: new Monster("Feral Dog", 3, 3, 40, "F"),
		kobold: new Monster("Kobold", 3, 2, 45, "F"),
		giantBat: new Monster("Giant Bat", 2, 2, 55, "F"),
		giantWasp: new Monster("Giant Wasp", 2, 3, 50, "F"),
		bandit: new Monster("Bandit", 3, 3, 40, "F"),
		skeletonArcher: new Monster("Skeleton Archer", 2, 3, 50, "F"),
		skeletonWarrior: new Monster("Skeleton Warrior", 3, 2, 50, "F"),
		imp: new Monster("Imp", 2, 2, 55, "F"),
		paperGolem: new Monster("Paper Golem", 3, 2, 50, "F"),
	},

	E: {
		wolf: new Monster("Wolf", 25, 25, 15, "E"),
		zombie: new Monster("Zombie", 30, 20, 15, "E"),
		goblin: new Monster("Goblin", 20, 25, 17, "E"),
		feralDog: new Monster("Feral Dog", 22, 23, 16, "E"),
		kobold: new Monster("Kobold", 20, 22, 18, "E"),
		giantBat: new Monster("Giant Bat", 18, 27, 17, "E"),
		giantWasp: new Monster("Giant Wasp", 15, 30, 17, "E"),
		hobgoblin: new Monster("Hobgoblin", 25, 25, 15, "E"),
		bandit: new Monster("Bandit", 25, 25, 15, "E"),
		cultist: new Monster("Cultist", 20, 30, 15, "E"),
		skeletonArcher: new Monster("Skeleton Archer", 20, 30, 15, "E"),
		skeletonWarrior: new Monster("Skeleton Warrior", 30, 20, 15, "E"),
		ghoul: new Monster("Ghoul", 28, 22, 15, "E"),
		imp: new Monster("Imp", 15, 35, 15, "E"),
		giantSpider: new Monster("Giant Spider", 25, 25, 15, "E"),
		animatedArmor: new Monster("Animated Armor", 35, 25, 13, "E"),
		poisonDartFrog: new Monster("Poison Dart Frog", 15, 40, 14, "E"),
	},

	D: {
		wraith: new Monster("Wraith", 200, 250, 5, "D"),
		orc: new Monster("Orc", 225, 175, 5, "D"),
		mummifiedWarrior: new Monster("Mummified Warrior", 250, 200, 5, "D"),
		centaur: new Monster("Centaur", 225, 225, 5, "D"),
		seaSerpent: new Monster("Sea Serpent", 275, 175, 5, "D"),
		demon: new Monster("Demon", 250, 250, 4, "D"),
		hellHound: new Monster("Hell Hound", 225, 275, 4, "D"),
		salamander: new Monster("Salamander", 200, 250, 5, "D"),
		shadowBeast: new Monster("Shadow Beast", 250, 275, 4, "D"),
		yeti: new Monster("Yeti", 300, 250, 4, "D"),
		cyclops: new Monster("Cyclops", 350, 300, 3, "D"),
		wendigo: new Monster("Wendigo", 325, 275, 3, "D"),
		dryad: new Monster("Dryad", 200, 175, 6, "D"),
		giantEagle: new Monster("Giant Eagle", 250, 250, 4, "D"),
		swampTroll: new Monster("Swamp Troll", 375, 275, 3, "D"),
		giantScorpion: new Monster("Giant Scorpion", 350, 300, 3, "D"),
		iceElemental: new Monster("Ice Elemental", 400, 350, 3, "D"),
		ironGolem: new Monster("Iron Golem", 1100, 1150, 1, "D"),
		shinySlime: new Monster("Shiny Slime", 1500, 750, 1, "D"),
		spiderQueen: new Monster("Spider Queen", 1200, 1050, 1, "D"),
		antQueen: new Monster("Ant Queen", 1150, 1100, 1, "D"),
		iceGolem: new Monster("Ice Golem", 1000, 1250, 1, "D"),
		crystalGolem: new Monster("Crystal Golem", 1100, 1150, 1, "D"),
		werewolf: new Monster("Werewolf", 275, 275, 4, "D"),
		sandWorm: new Monster("Sand Worm", 400, 350, 3, "D"),
		mudGolem: new Monster("Mud Golem", 450, 300, 3, "D"),
		witch: new Monster("Witch", 200, 350, 4, "D"),
		harpy: new Monster("Harpy", 225, 275, 4, "D"),
		ogre: new Monster("Ogre", 375, 300, 3, "D"),
		youngDragon: new Monster("Young Dragon", 450, 400, 2, "D"),
		fireElemental: new Monster("Fire Elemental", 300, 375, 3, "D"),
		giantTroll: new Monster("Giant Troll", 425, 400, 2, "D"),
		minotaur: new Monster("Minotaur", 350, 350, 3, "D"),
		gorgon: new Monster("Gorgon", 300, 350, 3, "D"),
	},

	C: {
		vampire: new Monster("Vampire", 1800, 1950, 1, "C"),
		ancientGolem: new Monster("Ancient Golem", 1100, 1150, 2, "C"),
		nightStalker: new Monster("Night Stalker", 1000, 1250, 2, "C"),
		elementalBear: new Monster("Elemental Bear", 1150, 1100, 2, "C"),
		ghostlyCommander: new Monster("Ghostly Commander", 1650, 1800, 1, "C"),
		warGolem: new Monster("War Golem", 1700, 1675, 1, "C"),
		demonPrince: new Monster("Demon Prince", 1700, 2050, 1, "C"),
		wyvern: new Monster("Wyvern", 1750, 1700, 1, "C"),
		thunderbird: new Monster("Thunderbird", 1100, 1150, 2, "C"),
		stormGiant: new Monster("Storm Giant", 2000, 1750, 1, "C"),
		griffon: new Monster("Griffon", 1050, 1200, 2, "C"),
		frostGiant: new Monster("Frost Giant", 1900, 1850, 1, "C"),
		demonSlime: new Monster("Demon Slime", 2200, 1550, 1, "C"),
		umbralAssassin: new Monster("Umbral Assassin", 1000, 1250, 2, "C"),
		voidWalker: new Monster("Void Walker", 1650, 1725, 1, "C"),
		giantSquid: new Monster("Giant Squid", 2100, 1650, 1, "C"),
		skeletonKnight: new Monster("Skeleton Knight", 1050, 1200, 2, "C"),
		mimic: new Monster("Mimic", 1800, 1950, 1, "C"),
		sphinx: new Monster("Sphinx", 1100, 1150, 2, "C"),
		chaosBeast: new Monster("Chaos Beast", 1600, 1775, 1, "C"),
		drakeRider: new Monster("Drake Rider", 1200, 1175, 2, "C"),
		medusa: new Monster("Medusa", 1750, 2000, 1, "C"),
	},

	B: {
		manticore: new Monster("Manticore", 10000, 10250, 1, "B"),
		chimera: new Monster("Chimera", 10500, 9750, 1, "B"),
		deathKnight: new Monster("Death Knight", 11000, 9250, 1, "B"),
		soulReaver: new Monster("Soul Reaver", 9500, 10750, 1, "B"),
		elderVampire: new Monster("Elder Vampire", 1100, 1150, 1, "D"),
		lich: new Monster("Lich", 9000, 11250, 1, "B"),
		youngDragon: new Monster("Young Dragon", 11500, 8750, 1, "B"),
		celestialAngel: new Monster("Celestial Angel", 10250, 10000, 1, "B"),
		fenrir: new Monster("Fenrir", 10750, 9500, 1, "B"),
		oni: new Monster("Oni", 10000, 10250, 1, "B"),
	},

	A: {
		kraken: new Monster("Kraken", 30000, 30750, 1, "A"),
		hydra: new Monster("Hydra", 30750, 30000, 1, "A"),
		dragon: new Monster("Dragon", 31500, 29250, 1, "A"),
		phoenix: new Monster("Phoenix", 29250, 31500, 1, "A"),
		archLich: new Monster("ArchLich", 28500, 32250, 1, "A"),
		colossalGiant: new Monster("Colossal Giant", 33000, 27750, 1, "A"),
		ceberus: new Monster("Ceberus", 30750, 30000, 1, "A"),
	},

	S: {
		DemonLord: new Monster("Demon Lord", 90000, 92250, 1, "S"),
		worldSerpent: new Monster("World Serpent", 94500, 87750, 1, "S"),
		dreamEater: new Monster("Dream Eater", 87750, 94500, 1, "S"),
		voidLeviathan: new Monster("Void Leviathan", 92250, 90000, 1, "S"),
		abyssalPrince: new Monster("Abyssal Prince", 85500, 96750, 1, "S"),
	},

	SS: {
		avatarOfChaos: new Monster("Avatar of Chaos", 270000, 276750, 1, "SS"),
		ancientDragon: new Monster("Ancient Dragon", 283500, 263250, 1, "SS"),
		primorialDemon: new Monster("Primordial Demon", 275625, 271125, 1, "SS"),
		chaosIncarnate: new Monster("Chaos Incarnate", 272250, 274500, 1, "SS"),
	},

	SSS: {
		CosmicDragon: new Monster("Cosmic Dragon", 820000, 820250, 1, "SSS"),
		infinityPheonix: new Monster("Infinity Phoenix", 850000, 790250, 1, "SSS"),
		eternityDragon: new Monster("Eternity Dragon", 830000, 810250, 1, "SSS"),
		livingBlackHole: new Monster("Living Black Hole", 840000, 800250, 1, "SSS"),
		dimensionalLeviathan: new Monster(
			"Dimensional Leviathan",
			810000,
			830250,
			1,
			"SSS"
		),
	},

	X: {
		worldBuilder: new Monster("World Builder", 2460000, 2460750, 1, "X"),
		outerGod: new Monster("Outer God", 2470000, 2450750, 1, "X"),
	},

	XX: {
		supremeCreator: new Monster(
			"Supreme Creator",
			7380000,
			7382250,
			1,
			"Omega"
		),
	},
};

export default monsters;
