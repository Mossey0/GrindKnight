import Decimal from "break_infinity.js";

class Building {
	constructor(name, income, tier, cost) {
		this.name = name;
		this.income = new Decimal(income);
		this.tier = tier;
		this.cost = new Decimal(cost);
		this.count = new Decimal(0);
		this.level = new Decimal(1);
		this.costIncrease = new Decimal(1.5);
		this.upgradeCostIncreased = new Decimal(1.3);
		this.upgradeCost = new Decimal(2);
	}
	calculateIncome() {
		let efficiency = Decimal.max(
			new Decimal(0.5),
			new Decimal(1).minus(this.count.minus(1).times(0.1))
		);
		return this.income.times(this.count).times(efficiency).times(this.level);
	}
	calculateCost(amountPurchased) {
		const increaseInCost = this.costIncrease;
		const amount = new Decimal(amountPurchased);
		const currentCount = this.count;

		return this.cost.times(
			increaseInCost
				.pow(currentCount)
				.times(increaseInCost.pow(amount).minus(1))
				.div(increaseInCost)
				.minus(1)
		);
	}
	calculateUpgradeCost(amountPurchased) {
		const amount = new Decimal(amountPurchased);
		return this.upgradeCost.times(
			this.upgradeCostIncreased
				.pow(this.level.minus(1))
				.times(this.upgradeCostIncreased.pow(amount))
				.div(this.upgradeCostIncreased.minus(1))
		);
	}
}

const buildings = {
	tier1: {
		wheatFields: new Building("Wheat Fields", 10, 1),
		blacksmithsForge: new Building("Blacksmith's Forge", 15, 1),
		carpentersWorkshop: new Building("Carpenter's Workshop", 20, 1),
		jewelersShop: new Building("Jeweler's Shop", 25, 1),
		enchantersTower: new Building("Enchanter's Tower", 30, 1),
	},
	tier2: {
		alchemistsLaboratory: new Building("Alchemist's Laboratory", 35, 2),
		scribesScriptorium: new Building("Scribe's Scriptorium", 40, 2),
		potionFactory: new Building("Potion Factory", 45, 2),
		necromancersCrypt: new Building("Necromancer's Crypt", 50, 2),
		elementalSanctuary: new Building("Elemental Sanctuary", 55, 2),
	},
	tier3: {
		transmuterFoundry: new Building("Transmuter Foundry", 60, 3),
		moonlightVineyard: new Building("Moonlight Vineyard", 65, 3),
		pixieDustFarm: new Building("Pixie Dust Farm", 70, 3),
		magicalMushroomGrove: new Building("Magical Mushroom Grove", 75, 3),
		celestialHerbGarden: new Building("Celestial Herb Garden", 80, 3),
	},
	tier4: {
		frostFlowerPlantation: new Building("Frost Flower Plantation", 85, 4),
		mysticMarketplace: new Building("Mystic Marketplace", 90, 4),
		dwarfTradePost: new Building("Dwarf Trade Post", 95, 4),
		artisanMarket: new Building("Artisan Market", 100, 4),
		wizardsArcaneLibrary: new Building("Wizard's Arcane Library", 105, 4),
	},
	tier5: {
		paladinsTrainingGrounds: new Building("Paladin's Training Grounds", 110, 5),
		beastMenagerie: new Building("Beast Menagerie", 115, 5),
		healersSanctuary: new Building("Healer's Sanctuary", 120, 5),
		summonersCircle: new Building("Summoner's Circle", 125, 5),
		divinersCrystalDome: new Building("Diviner's Crystal Dome", 130, 5),
	},
	tier6: {
		bardsMelodyHall: new Building("Bard's Melody Hall", 135, 6),
		illusoryTheater: new Building("Illusory Theater", 140, 6),
		centaurRacingTrack: new Building("Centaur Racing Track", 145, 6),
		fairyRingCasino: new Building("Fairy Ring Casino", 150, 6),
		krakensTentacleArena: new Building("Kraken's Tentacle Arena", 155, 6),
	},
	tier7: {
		mysticMazeGardens: new Building("Mystic Maze Gardens", 160, 7),
		shapeshifterMasqueradeBall: new Building(
			"Shapeshifter Masquerade Ball",
			165,
			7
		),
		etherealIceSkatingRink: new Building("Ethereal Ice Skating Rink", 170, 7),
		manaCrystalMine: new Building("Mana Crystal Mine", 175, 7),
		phoenixAshQuarry: new Building("Phoenix Ash Quarry", 180, 7),
	},
	tier8: {
		unicornHairWeavingMill: new Building("Unicorn Hair Weaving Mill", 185, 8),
		dragonScaleTannery: new Building("Dragon Scale Tannery", 190, 8),
		griffonFeatherCollectors: new Building(
			"Griffon Feather Collectors",
			195,
			8
		),
		mermaidScaleFishery: new Building("Mermaid Scale Fishery", 200, 8),
		trollBoneCarvingWorkshop: new Building(
			"Troll Bone Carving Workshop",
			205,
			8
		),
	},
	tier9: {
		fairyDustRefinery: new Building("Fairy Dust Refinery", 210, 9),
		basiliskEyeGemCutters: new Building("Basilisk Eye Gem Cutters", 215, 9),
		manticoreSpineArrowMakers: new Building(
			"Manticore Spine Arrow Makers",
			220,
			9
		),
		golemAssemblyFactory: new Building("Golem Assembly Factory", 225, 9),
		airshipDockingTower: new Building("Airship Docking Tower", 230, 9),
	},
	tier10: {
		teleportationCircleHub: new Building("Teleportation Circle Hub", 235, 10),
		elementalBindingForge: new Building("Elemental Binding Forge", 240, 10),
		arcaneClockworkManufactory: new Building(
			"Arcane Clockwork Manufactory",
			245,
			10
		),
		dimensionCarpentry: new Building("Dimension Door Carpentry", 250, 10),
		scryingOrbPolishers: new Building("Scrying Orb Polishers", 255, 10),
	},
	tier11: {
		familiarSummoningPens: new Building("Familiar Summoning Pens", 260, 11),
		ambrosiaBrewery: new Building("Ambrosia Brewery", 265, 11),
		giantsKettleSoupKitchen: new Building(
			"Giant's Kettle Soup Kitchen",
			270,
			11
		),
		hydraHeadHotPot: new Building("Hydra Head Hot Pot", 275, 11),
		krakenInkPastaHouse: new Building("Kraken Ink Pasta House", 280, 11),
	},
	tier12: {
		chimeraChiliDiner: new Building("Chimera Chili Diner", 285, 12),
		sphinxsRiddleCafe: new Building("Sphinx's Riddle Café", 290, 12),
		bottledStormEmporium: new Building("Bottled Storm Emporium", 295, 12),
		dreamCatcherWeavingCo: new Building("Dreamcatcher Weaving Co.", 300, 12),
		gargoyleSculptureGarden: new Building("Gargoyle Sculpture Garden", 305, 12),
	},
	tier13: {
		astralProjectionTheater: new Building("Astral Projection Theater", 310, 13),
		timeLoopTavernAndInn: new Building("Time Loop Tavern and Inn", 315, 13),
		interDimensionalBazaar: new Building("Interdimensional Bazaar", 320, 13),
		quantumEnchantmentLaboratory: new Building(
			"Quantum Enchantment Laboratory",
			325,
			13
		),
		celestialObservatoryAndDivination: new Building(
			"Celestial Observatory and Divination",
			330,
			13
		),
		realityWarpingArtGallery: new Building(
			"Reality-Warping Art Gallery",
			335,
			13
		),
	},
};

export default buildings;
