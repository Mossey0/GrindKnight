class Monster {
	constructor(name, health, attack, goldReward, packSize) {
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.goldReward = goldReward;
		this.packSize = packSize;
	}
	getHealth = (extraAmount) => {
		return this.health * (this.packSize * extraAmount);
	};
	getPower = (extraAmount) => {
		return this.attack * (this.packSize * extraAmount);
	};
	getGold = (extraAmount) => {
		return this.goldReward * (this.packSize * extraAmount);
	};
}

const monsters = {
	slime: new Monster("Slime", 10, 5, 1, 10),
	rat: new Monster("Rat", 15, 8, 2, 8),
	goblin: new Monster("Goblin", 20, 12, 3, 6),
	bat: new Monster("Bat", 25, 10, 2, 12),
	skeleton: new Monster("Skeleton", 30, 15, 4, 5),
	zombie: new Monster("Zombie", 40, 18, 5, 4),
	wolf: new Monster("Wolf", 50, 22, 6, 3),
	orc: new Monster("Orc", 60, 25, 7, 3),
	wraith: new Monster("Wraith", 70, 28, 8, 2),
	harpy: new Monster("Harpy", 80, 32, 9, 2),
	troll: new Monster("Troll", 90, 35, 10, 2),
	ogre: new Monster("Ogre", 100, 40, 12, 1),
	ghoul: new Monster("Ghoul", 120, 45, 14, 1),
	minotaur: new Monster("Minotaur", 140, 50, 16, 1),
	cyclops: new Monster("Cyclops", 160, 55, 18, 1),
	manticore: new Monster("Manticore", 180, 60, 20, 1),
	chimera: new Monster("Chimera", 200, 65, 22, 1),
	wyvern: new Monster("Wyvern", 220, 70, 25, 1),
	basilisk: new Monster("Basilisk", 240, 75, 28, 1),
	griffin: new Monster("Griffin", 260, 80, 30, 1),
	hydra: new Monster("Hydra", 280, 85, 32, 1),
	phoenix: new Monster("Phoenix", 300, 90, 35, 1),
	golem: new Monster("Golem", 320, 95, 38, 1),
	behemoth: new Monster("Behemoth", 340, 100, 40, 1),
	leviathan: new Monster("Leviathan", 360, 110, 45, 1),
	dragon: new Monster("Dragon", 380, 120, 50, 1),
	archdemon: new Monster("Archdemon", 400, 130, 55, 1),
	lich: new Monster("Lich", 420, 140, 60, 1),
	vampireLord: new Monster("Vampire Lord", 440, 150, 65, 1),
	darkKnight: new Monster("Dark Knight", 460, 160, 70, 1),
	elderDragon: new Monster("Elder Dragon", 480, 170, 75, 1),
	ancientWyvern: new Monster("Ancient Wyvern", 500, 180, 80, 1),
	titan: new Monster("Titan", 520, 190, 85, 1),
	celestialBeing: new Monster("Celestial Being", 540, 200, 90, 1),
	fallenAngel: new Monster("Fallen Angel", 560, 210, 95, 1),
	demonLord: new Monster("Demon Lord", 580, 220, 100, 1),
	deathKnight: new Monster("Death Knight", 600, 230, 105, 1),
	voidBeast: new Monster("Void Beast", 620, 240, 110, 1),
	abyssalHorror: new Monster("Abyssal Horror", 640, 250, 115, 1),
	chaosDragon: new Monster("Chaos Dragon", 660, 260, 120, 1),
	hellfireElemental: new Monster("Hellfire Elemental", 680, 270, 125, 1),
	celestialDragon: new Monster("Celestial Dragon", 700, 280, 130, 1),
	netherLich: new Monster("Nether Lich", 720, 290, 135, 1),
	archangel: new Monster("Archangel", 740, 300, 140, 1),
	primordialTitan: new Monster("Primordial Titan", 760, 310, 145, 1),
	cosmicSerpent: new Monster("Cosmic Serpent", 780, 320, 150, 1),
	timeWraith: new Monster("Time Wraith", 800, 330, 155, 1),
	voidDragon: new Monster("Void Dragon", 820, 340, 160, 1),
	celestialPhoenix: new Monster("Celestial Phoenix", 840, 350, 165, 1),
	supremeDeity: new Monster("Supreme Deity", 860, 360, 170, 1),
};

export default monsters;
