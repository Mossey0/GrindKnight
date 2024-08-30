class Location {
	constructor(name, size, rank, boss) {
		this.name = name;
		this.size = size;
		this.rank = rank;
		this.boss = boss;
	}
}

let locations = {
	F: {
		hauntedGraveyard: new Location("Haunted Graveyard", 1, "F"),
		grassyMeadows: new Location("Grassy Meadows", 1, "F"),
		cursedVillage: new Location("Cursed Village", 2, "F"),
		darkForest: new Location("Dark Forest", 2, "F"),
		ancientRuins: new Location("Ancient Ruins", 2, "F"),
		abandonedMine: new Location("Abandoned Mine", 3, "F"),
		murkySwamp: new Location("Murky Swamp", 3, "F"),
	},

	D: {
		frozenTundra: new Location("Frozen Tundra", 1, "D"),
		mysteriousCaves: new Location("Mysterious Caves", 1, "D"),
		enchantedGrove: new Location("Enchanted Grove", 1, "D"),
		volcanicWasteland: new Location("Volcanic Wasteland", 2, "D"),
		sunkenCity: new Location("Sunken City", 2, "D"),
		windsweptPlains: new Location("Windswept Plains", 2, "D"),
		forgottenLibrary: new Location("Forgotten Library", 2, "D"),
		crystalCaverns: new Location("Crystal Caverns", 3, "D"),
	},

	C: {
		ancientBattlefield: new Location("Ancient Battlefield", 1, "C"),
		stormyPeaks: new Location("Stormy Peaks", 1, "C"),
		infernalPits: new Location("Infernal Pits", 1, "C"),
		frostGlacier: new Location("Frost Glacier", 1, "C"),
		shadowRealm: new Location("Shadow Realm", 2, "C"),
		celestialIslands: new Location("Celestial Islands", 2, "C"),
		abyssalTrench: new Location("Abyssal Trench", 2, "C"),
		timeWarpedCitadel: new Location("Time-Warped Citadel", 3, "C"),
	},

	B: {
		dragonRoost: new Location("Dragon Roost", 1, "B"),
		vampireCastle: new Location("Vampire Castle", 1, "B"),
		starfallCrater: new Location("Starfall Crater", 2, "B"),
		necropolis: new Location("Necropolis", 2, "B"),
		wildMagicZone: new Location("Wild Magic Zone", 3, "B"),
		livingDungeon: new Location("Living Dungeon", 3, "B"),
	},

	A: {
		dragonLair: new Location("Dragon Lair", 2, "A", ["dragon"]),
		krakensDepths: new Location("Kraken's Depths", 2, "A", ["kraken"]),
		hydraTerritories: new Location("Hydra Territories", 3, "A", ["hydra"]),
		phoenixNest: new Location("Phoenix Nest", 3, "A", ["phoenix"]),
		archlichCrypt: new Location("Archlich Crypt", 4, "A", ["archlich"]),
		colossalTemple: new Location("Colossal Temple", 4, "A", ["colossalGiant"]),
	},

	S: {
		demonicRealm: new Location("Demonic Realm", 5, "S", ["DemonLord"]),
		worldTree: new Location("World Tree", 5, "S", ["worldSerpent"]),
		dreamscapeNexus: new Location("Dreamscape Nexus", 6, "S", ["dreamEater"]),
		voidRift: new Location("Void Rift", 7, "S", ["voidLeviathan"]),
		abyssalThrone: new Location("Abyssal Throne", 7, "S", ["abyssalPrince"]),
	},

	SS: {
		chaosVortex: new Location("Chaos Vortex", 7, "SS", ["avatarOfChaos"]),
		hellsGate: new Location("Hell's Gate", 8, "SS", ["primorialDemon"]),
		timelessPeak: new Location("Timeless Peak", 8, "SS", ["ancientDragon"]),
		realitysEnd: new Location("Reality's End", 10, "SS", ["chaosIncarnate"]),
	},

	SSS: {
		cosmicNexus: new Location("Cosmic Nexus", 15, "SSS", ["CosmicDragon"]),
		eternalFlameDimension: new Location("Eternal Flame Dimension", 20, "SSS", [
			"infinityPheonix",
		]),
		dimensionalMaelstrom: new Location("Dimensional Maelstrom", 20, "SSS", [
			"dimensionalLeviathan",
		]),
		voidHeart: new Location("Void Heart", 24, "SSS", ["livingBlackHole"]),
	},

	X: {
		cosmicForge: new Location("Cosmic Forge", 30, "X", ["cosmicArchitec"]),
		beyondReality: new Location("Beyond Reality", 40, "X", ["outerGod"]),
	},

	XX: {
		realmOfTheArchitect: new Location(
			"Realm of the  Supreme Creator",
			70,
			"XX",
			["supremeCreator"]
		),
	},
};
export default locations;
