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
		slime: new Monster("Slime", 1, 1, 40, "F"),
		rat: new Monster("Rat", 1, 2, 30, "F"),
		goblin: new Monster("Goblin", 1, 2, 35, "F"),
		gremlin: new Monster("Gremlin", 1, 2, 30, "F"),
		spider: new Monster("Spider", 2, 2, 20, "F"),
		soldierAnt: new Monster("Soldier Ant", 2, 1, 40, "F"),
		feralDog: new Monster("Feral Dog", 3, 4, 10, "F"),
		kobold: new Monster("Kobold", 4, 4, 15, "F"),
		wolf: new Monster("Wolf", 6, 6, 7, "F"),
		zombie: new Monster("Zombie", 4, 1, 30, "F"),
		giantBat: new Monster("Giant Bat", 1, 4, 20, "F"),
		giantWasp: new Monster("Giant Wasp", 2, 4, 20, "F"),
		hoboGoblin: new Monster("Hobo Goblin", 4, 4, 15, "F"),
		bandit: new Monster("Bandit", 4, 3, 20, "F"),
		skeletonArcher: new Monster("Skeleton Archer", 2, 2, 20, "F"),
		skeletonWarrior: new Monster("Skeleton Warrior", 3, 2, 30, "F"),
		werewolf: new Monster("Werewolf", 10, 6, 5, "F"),
		sandWorm: new Monster("Sand Worm", 8, 6, 8, "F"),
		ghoul: new Monster("Ghoul", 10, 7, 7, "F"),
		harpy: new Monster("Harpy", 6, 6, 8, "F"),
		imp: new Monster("Imp", 5, 5, 12, "F"),
		giantSpider: new Monster("Giant Spider", 40, 30, 2, "F"),
		mudGolem: new Monster("Mud Golem", 100, 40, 1, "F"),
		witch: new Monster("Witch", 20, 15, 4, "F"),
	},

	D: {
		paperGolem: new Monster("Paper Golem", 15, 15, 30, "D"),
		orc: new Monster("Orc", 17, 15, 30, "D"),
		centaur: new Monster("Centaur", 20, 16, 25, "D"),
		wraith: new Monster("Wraith", 15, 24, 22, "D"),
		minotaur: new Monster("Minotaur", 24, 17, 15, "D"),
		seaSerpent: new Monster("Sea Serpent", 15, 15, 25, "D"),
		demon: new Monster("Demon", 20, 15, 20, "D"),
		hellHound: new Monster("Hell Hound", 16, 17, 18, "D"),
		salamander: new Monster("Salamander", 16, 20, 20, "D"),
		shadowBeast: new Monster("Shadow Beast", 19, 17, 20, "D"),
		mummifiedWarrior: new Monster("Mummified Warrior", 25, 25, 15, "D"),
		yeti: new Monster("Yeti", 30, 30, 12, "D"),
		cyclops: new Monster("Cyclops", 40, 25, 10, "D"),
		wendigo: new Monster("Wendigo", 35, 30, 10, "D"),
		dryad: new Monster("Dryad", 25, 30, 12, "D"),
		giantEagle: new Monster("Giant Eagle", 30, 30, 10, "D"),
		swampTroll: new Monster("Swamp Troll", 40, 30, 9, "D"),
		giantScorpion: new Monster("Giant Scorpion", 40, 40, 8, "D"),
		iceElemental: new Monster("Ice Elemental", 125, 60, 3, "D"),
		fireElemental: new Monster("Fire Elemental", 100, 85, 3, "D"),
		ironGolem: new Monster("Iron Golem", 500, 50, 1, "D"),
		shinySlime: new Monster("Shiny Slime", 1000, 30, 1, "D"),
		spiderQueen: new Monster("Spider Queen", 700, 60, 1, "D"),
		antQueen: new Monster("Ant Queen", 650, 70, 1, "D"),
		iceGolem: new Monster("Ice Golem", 300, 80, 1, "D"),
		crystalGolem: new Monster("Crystal Golem", 370, 100, 1, "D"),
	},

	C: {
		ancientGolem: new Monster("Ancient Golem", 1000, 90, 3, "C"),
		nightStalker: new Monster("Night Stalker", 1000, 150, 4, "C"),
		elementalBear: new Monster("Elemental Bear", 1200, 120, 3, "C"),
		ghostlyCommander: new Monster("Ghostly Commander", 1500, 200, 1, "C"),
		warGolem: new Monster("War Golem", 1500, 250, 2, "C"),
		wyvern: new Monster("Wyvern", 2000, 500, 1, "C"),
		thunderbird: new Monster("Thunderbird", 1400, 100, 3, "C"),
		stormGiant: new Monster("Storm Giant", 2000, 300, 1, "C"),
		griffon: new Monster("Griffon", 1600, 225, 3, "C"),
		frostGiant: new Monster("Frost Giant", 1900, 350, 1, "C"),
		demonSlime: new Monster("Demon Slime", 3000, 100, 1, "C"),
		umbralAssassin: new Monster("Umbral Assassin", 1000, 300, 3, "C"),
		voidWalker: new Monster("Void Walker", 1625, 400, 2, "C"),
		giantSquid: new Monster("Giant Squid", 3000, 100, 1, "C"),
		skeletonKnight: new Monster("Skeleton Knight", 1400, 350, 3, "C"),
		mimic: new Monster("Mimic", 2000, 175, 1, "C"),
		sphinx: new Monster("Sphinx", 1475, 200, 4, "C"),
		chaosBeast: new Monster("Chaos Beast", 1700, 330, 2, "C"),
		drakeRider: new Monster("Drake Rider", 2250, 175, 2, "C"),
		medusa: new Monster("Medusa", 2700, 400, 1, "C"),
	},

	B: {
		manticore: new Monster("Manticore", 3500, 700, 1, "B"),
		chimera: new Monster("Chimera", 3800, 625, 1, "B"),
		deathKnight: new Monster("Death Knight", 4200, 500, 1, "B"),
		soulReaver: new Monster("Soul Reaver", 3300, 1100, 1, "B"),
		vampire: new Monster("Vampire", 5500, 700, 1, "B"),
		oni: new Monster("Oni", 4400, 1100, 1, "B"),
		lich: new Monster("Lich", 2500, 1500, 1, "B"),
		youngDragon: new Monster("Young Dragon", 6000, 1200, 1, "B"),
		celestialAngel: new Monster("Celestial Angel", 4500, 825, 1, "B"),
		fenrir: new Monster("Fenrir", 5000, 970, 1, "B"),
	},

	A: {
		kraken: new Monster("Kraken", 8000, 1500, 1, "A"),
		hydra: new Monster("Hydra", 7500, 2000, 1, "A"),
		dragon: new Monster("Dragon", 9500, 2500, 1, "A"),
		phoenix: new Monster("Phoenix", 11000, 1650, 1, "A"),
		archLich: new Monster("ArchLich", 5500, 3100, 1, "A"),
		colossalGiant: new Monster("Colossal Giant", 12000, 2200, 1, "A"),
		ceberus: new Monster("Ceberus", 8700, 1900, 1, "A"),
	},

	S: {
		DemonLord: new Monster("Demon Lord", 18000, 4000, 1, "S"),
		worldSerpent: new Monster("World Serpent", 25000, 3500, 1, "S"),
		dreamEater: new Monster("Dream Eater", 12500, 4500, 1, "S"),
		voidLeviathan: new Monster("Void Leviathan", 20000, 2000, 1, "S"),
		abyssalPrince: new Monster("Abyssal Prince", 15000, 5000, 1, "S"),
	},

	SS: {
		avatarOfChaos: new Monster("Avatar of Chaos", 30000, 12000, 1, "SS"),
		ancientDragon: new Monster("Ancient Dragon", 40000, 11000, 1, "SS"),
		primorialDemon: new Monster("Primordial Demon", 35000, 15000, 1, "SS"),
		chaosIncarnate: new Monster("Chaos Incarnate", 32000, 14000, 1, "SS"),
	},

	SSS: {
		CosmicDragon: new Monster("Cosmic Dragon", 60000, 32000, 1, "SSS"),
		infinityPheonix: new Monster("Infinity Phoenix", 95000, 21000, 1, "SSS"),
		eternityDragon: new Monster("Eternity Dragon", 72000, 37000, 1, "SSS"),
		livingBlackHole: new Monster("Living Black Hole", 85000, 25000, 1, "SSS"),
		dimensionalLeviathan: new Monster(
			"Dimensional Leviathan",
			70000,
			19000,
			1,
			"SSS"
		),
	},

	X: {
		worldBuilder: new Monster("World Builder", 200000, 57000, 1, "X"),
		outerGod: new Monster("Outer God", 250000, 45000, 1, "X"),
	},

	XX: {
		supremeCreator: new Monster("Supreme Creator", 2000000, 200000, 1, "XX"),
	},
};

export default monsters;
