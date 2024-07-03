class Building {
	constructor(name, income, rank) {
		this.name = name;
		this.income = income;
		this.rank = rank;
	}
}

const buildings = {
	// Craftsman's Quarters
	wheatFields: new Building("Wheat Fields", 0, ""),
	blacksmithsForge: new Building("Blacksmith's Forge", 0, ""),
	carpentersWorkshop: new Building("Carpenter's Workshop", 0, ""),
	jewelersShop: new Building("Jeweler's Shop", 0, ""),
	enchantersTower: new Building("Enchanter's Tower", 0, ""),
	alchemistsLaboratory: new Building("Alchemist's Laboratory", 0, ""),
	scribesScriptorium: new Building("Scribe's Scriptorium", 0, ""),
	potionFactory: new Building("Potion Factory", 0, ""),
	necromancersCrypt: new Building("Necromancer's Crypt", 0, ""),
	elementalSanctuary: new Building("Elemental Sanctuary", 0, ""),
	transmuterFoundry: new Building("Transmuter Foundry", 0, ""),
	moonlightVineyard: new Building("Moonlight Vineyard", 0, ""),
	pixieDustFarm: new Building("Pixie Dust Farm", 0, ""),
	magicalMushroomGrove: new Building("Magical Mushroom Grove", 0, ""),
	celestialHerbGarden: new Building("Celestial Herb Garden", 0, ""),
	frostFlowerPlantation: new Building("Frost Flower Plantation", 0, ""),
	mysticMarketplace: new Building("Mystic Marketplace", 0, ""),
	dwarfTradePost: new Building("Dwarf Trade Post", 0, ""),
	ArtisanMarket: new Building("Artisan Market", 0, ""),
	wizardsArcaneLibrary: new Building("Wizard's Arcane Library", 0, ""),
	paladinsTrainingGrounds: new Building("Paladin's Training Grounds", 0, ""),
	beastMenagerie: new Building("Beast Menagerie", 0, ""),
	healersSanctuary: new Building("Healer's Sanctuary", 0, ""),

	// Magical Establishments
	summonersCircle: new Building("Summoner's Circle", 0, ""),
	divinersCrystalDome: new Building("Diviner's Crystal Dome", 0, ""),

	// Agricultural Ventures

	// Merchant Establishments

	// Entertainment Venues
	bardsMelodyHall: new Building("Bard's Melody Hall", 0, ""),
	illusoryTheater: new Building("Illusory Theater", 0, ""),
	centaurRacingTrack: new Building("Centaur Racing Track", 0, ""),
	fairyRingCasino: new Building("Fairy Ring Casino", 0, ""),
	krakensTentacleArena: new Building("Kraken's Tentacle Arena", 0, ""),
	mysticMazeGardens: new Building("Mystic Maze Gardens", 0, ""),
	shapeshifterMasqueradeBall: new Building(
		"Shapeshifter Masquerade Ball",
		0,
		""
	),
	etherealIceSkatingRink: new Building("Ethereal Ice Skating Rink", 0, ""),

	// Knowledge and Services

	// Mystical Resources
	manaCrystalMine: new Building("Mana Crystal Mine", 0, ""),
	phoenixAshQuarry: new Building("Phoenix Ash Quarry", 0, ""),
	unicornHairWeavingMill: new Building("Unicorn Hair Weaving Mill", 0, ""),
	dragonScaleTannery: new Building("Dragon Scale Tannery", 0, ""),
	griffonFeatherCollectors: new Building("Griffon Feather Collectors", 0, ""),
	mermaidScaleFishery: new Building("Mermaid Scale Fishery", 0, ""),
	trollBoneCarvingWorkshop: new Building("Troll Bone Carving Workshop", 0, ""),
	fairyDustRefinery: new Building("Fairy Dust Refinery", 0, ""),
	basiliskEyeGemCutters: new Building("Basilisk Eye Gem Cutters", 0, ""),
	manticoreSpineArrowMakers: new Building(
		"Manticore Spine Arrow Makers",
		0,
		""
	),

	// Arcane Technology
	golemAssemblyFactory: new Building("Golem Assembly Factory", 0, ""),
	airshipDockingTower: new Building("Airship Docking Tower", 0, ""),
	teleportationCircleHub: new Building("Teleportation Circle Hub", 0, ""),
	elementalBindingForge: new Building("Elemental Binding Forge", 0, ""),
	arcaneClockworkManufactory: new Building(
		"Arcane Clockwork Manufactory",
		0,
		""
	),
	dimensionCarpentry: new Building("Dimension Door Carpentry", 0, ""),
	scryingOrbPolishers: new Building("Scrying Orb Polishers", 0, ""),
	familiarSummoningPens: new Building("Familiar Summoning Pens", 0, ""),

	// Culinary Delights
	ambrosiaBrewery: new Building("Ambrosia Brewery", 0, ""),
	giantsKettleSoupKitchen: new Building("Giant's Kettle Soup Kitchen", 0, ""),
	hydraHeadHotPot: new Building("Hydra Head Hot Pot", 0, ""),
	krakenInkPastaHouse: new Building("Kraken Ink Pasta House", 0, ""),
	chimeraChiliDiner: new Building("Chimera Chili Diner", 0, ""),
	sphinxsRiddleCafe: new Building("Sphinx's Riddle Café", 0, ""),

	// Miscellaneous Ventures
	bottledStormEmporium: new Building("Bottled Storm Emporium", 0, ""),
	dreamcatcherWeavingCo: new Building("Dreamcatcher Weaving Co.", 0, ""),
	gargoyleSculptureGarden: new Building("Gargoyle Sculpture Garden", 0, ""),
	bansheesVocalTrainingCenter: new Building(
		"Banshee's Vocal Training Center",
		0,
		""
	),
	gnomishInventionPatentOffice: new Building(
		"Gnomish Invention Patent Office",
		0,
		""
	),
	dryadsTreehouseRentals: new Building("Dryad's Treehouse Rentals", 0, ""),
	witchsBroomRacingTrack: new Building("Witch's Broom Racing Track", 0, ""),
	werewolfFurStylingSalon: new Building("Werewolf Fur Styling Salon", 0, ""),
	pixieLedTouristTrapMaze: new Building("Pixie-Led Tourist Trap Maze", 0, ""),
};
