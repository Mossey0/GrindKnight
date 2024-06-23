class Recruit {
	constructor(name, health, attack, cost) {
		this.name = name;
		this.health = health;
		this.attack = attack;
		this.cost = cost;
	}
	getCost = (number) => {
		return this.cost * number;
	};
	getHealth = (number) => {
		return this.health * number;
	};
	getAttack = (number) => {
		return this.attack * number;
	};
}

const recruits = {
	scout: new Recruit("Scout", 8, 4, 10),
	squire: new Recruit("Squire", 12, 6, 15),
	footman: new Recruit("Footman", 16, 10, 20),
	archer: new Recruit("Archer", 20, 8, 25),
	pikeman: new Recruit("Pikeman", 24, 12, 30),
	crossbowman: new Recruit("Crossbowman", 28, 14, 35),
	soldier: new Recruit("Soldier", 32, 18, 40),
	knight: new Recruit("Knight", 36, 20, 45),
	lancer: new Recruit("Lancer", 40, 22, 50),
	berserker: new Recruit("Berserker", 44, 26, 55),
	captain: new Recruit("Captain", 48, 28, 60),
	templar: new Recruit("Templar", 52, 32, 65),
	gladiator: new Recruit("Gladiator", 60, 36, 70),
	ranger: new Recruit("Ranger", 70, 40, 75),
	paladin: new Recruit("Paladin", 80, 45, 80),
	warlock: new Recruit("Warlock", 90, 50, 85),
	barbarian: new Recruit("Barbarian", 100, 55, 90),
	assassin: new Recruit("Assassin", 110, 60, 95),
	sorcerer: new Recruit("Sorcerer", 120, 65, 100),
	monk: new Recruit("Monk", 130, 70, 105),
	bard: new Recruit("Bard", 140, 75, 110),
	necromancer: new Recruit("Necromancer", 150, 80, 115),
	rogue: new Recruit("Rogue", 160, 85, 120),
	druid: new Recruit("Druid", 170, 90, 125),
	shaman: new Recruit("Shaman", 180, 95, 130),
	cleric: new Recruit("Cleric", 190, 100, 135),
	enchanter: new Recruit("Enchanter", 200, 105, 140),
	illusionist: new Recruit("Illusionist", 210, 110, 145),
	wizard: new Recruit("Wizard", 220, 115, 150),
	battleMage: new Recruit("Battle Mage", 230, 120, 155),
	crusader: new Recruit("Crusader", 240, 125, 160),
	alchemist: new Recruit("Alchemist", 250, 130, 165),
	summoner: new Recruit("Summoner", 260, 135, 170),
	pyromancer: new Recruit("Pyromancer", 270, 140, 175),
	geomancer: new Recruit("Geomancer", 280, 145, 180),
	stormcaller: new Recruit("Stormcaller", 290, 150, 185),
	shadowblade: new Recruit("Shadowblade", 300, 155, 190),
	runemaster: new Recruit("Runemaster", 310, 160, 195),
	elementalist: new Recruit("Elementalist", 320, 165, 200),
	drakeKnight: new Recruit("Drake Knight", 330, 170, 205),
	sunPriest: new Recruit("Sun Priest", 340, 175, 210),
	moonMage: new Recruit("Moon Mage", 350, 180, 215),
	starCaller: new Recruit("Star Caller", 360, 185, 220),
	voidWalker: new Recruit("Void Walker", 370, 190, 225),
	bloodHunter: new Recruit("Blood Hunter", 380, 195, 230),
	dragonSlayer: new Recruit("Dragon Slayer", 390, 200, 235),
	phoenixKnight: new Recruit("Phoenix Knight", 400, 205, 240),
	titanGuard: new Recruit("Titan Guard", 410, 210, 245),
	celestialHero: new Recruit("Celestial Hero", 420, 215, 250),
};

export default recruits;
