class Location {
	constructor(name, size, rank) {
		this.name = name;
		this.rank = rank;
		this.size = size;
	}
}

let locations = {
	F: {
		darkForest: new Location("Dark Forest", 2, "F"),
		abandonedMine: new Location("Abandoned Mine", 2, "F"),
		hauntedGraveyard: new Location("Haunted Graveyard", 1, "F"),
		murkySwamp: new Location("Murky Swamp", 2, "F"),
		cursedVillage: new Location("Cursed Village", 1, "F"),
		ancientRuins: new Location("Ancient Ruins", 1, "F"),
		burningDesert: new Location("Burning Desert", 1, "F"),
	},

	D: {
		frozenTundra: new Location("Frozen Tundra", 1, "D"),
		mysteriousCaves: new Location("Mysterious Caves", 3, "D"),
		enchantedGrove: new Location("Enchanted Grove", 1, "D"),
		volcanicWasteland: new Location("Volcanic Wasteland", 1, "D"),
		sunkenCity: new Location("Sunken City", 1, "D"),
		windsweptPlains: new Location("Windswept Plains", 2, "D"),
		forgottenLibrary: new Location("Forgotten Library", 1, "D"),
		crystalCaverns: new Location("Crystal Caverns", 1, "D"),
	},

	C: {
		ancientBattlefield: new Location("Ancient Battlefield", 1, "C"),
		stormyPeaks: new Location("Stormy Peaks", 1, "C"),
		infernalPits: new Location("Infernal Pits", 1, "C"),
		frostGlacier: new Location("Frost Glacier", 1, "C"),
		shadowRealm: new Location("Shadow Realm", 1, "C"),
		celestialIslands: new Location("Celestial Islands", 1, "C"),
		abyssalTrench: new Location("Abyssal Trench", 1, "C"),
		timeWarpedCitadel: new Location("Time-Warped Citadel", 1, "C"),
	},

	D: {
		dragonRoost: new Location("Dragon Roost", 1, "B"),
		vampireCastle: new Location("Vampire Castle", 1, "B"),
		starfallCrater: new Location("Starfall Crater", 1, "B"),
		necropolis: new Location("Necropolis", 1, "B"),
		wildMagicZone: new Location("Wild Magic Zone", 1, "B"),
		livingDungeon: new Location("Living Dungeon", 1, "B"),
	},

	A: {
		dragonLair: new Location("Dragon Lair", 1, "A", ["dragon"]),
		krakensDepths: new Location("Kraken's Depths", 1, "A", ["kraken"]),
		hydraTerritories: new Location("Hydra Territories", 1, "A", ["hydra"]),
		phoenixNest: new Location("Phoenix Nest", 1, "A", ["phoenix"]),
		archlichCrypt: new Location("Archlich Crypt", 1, "A", ["archlich"]),
		colossalTemple: new Location("Colossal Temple", 1, "A", ["colossalGiant"]),
	},

	S: {
		demonicRealm: new Location("Demonic Realm", 1, "S", ["DemonLord"]),
		worldTree: new Location("World Tree", 1, "S", ["worldSerpent"]),
		dreamscapeNexus: new Location("Dreamscape Nexus", 1, "S", ["dreamEater"]),
		voidRift: new Location("Void Rift", 1, "S", ["voidLeviathan"]),
		abyssalThrone: new Location("Abyssal Throne", 1, "S", ["abyssalPrince"]),
	},

	SS: {
		chaosVortex: new Location("Chaos Vortex", 1, "SS", ["avatarOfChaos"]),
		hellsGate: new Location("Hell's Gate", 1, "SS", ["primorialDemon"]),
		timelessPeak: new Location("Timeless Peak", 1, "SS", ["ancientDragon"]),
		realitysEnd: new Location("Reality's End", 1, "SS", ["chaosIncarnate"]),
	},

	SSS: {
		cosmicNexus: new Location("Cosmic Nexus", 1, "SSS", ["CosmicDragon"]),
		eternalFlameDimension: new Location("Eternal Flame Dimension", 1, "SSS", [
			"infinityPheonix",
		]),
		dimensionalMaelstrom: new Location("Dimensional Maelstrom", 1, "SSS", [
			"dimensionalLeviathan",
		]),
		voidHeart: new Location("Void Heart", 1, "SSS", ["livingBlackHole"]),
	},

	X: {
		cosmicForge: new Location("Cosmic Forge", 1, "X", ["cosmicArchitec"]),
		beyondReality: new Location("Beyond Reality", 1, "X", ["outerGod"]),
	},

	XX: {
		creationCore: new Location("Creation Core", 1, "XX", ["supremeCreator"]),
	},
};
export default locations;
