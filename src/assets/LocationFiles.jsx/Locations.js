class Location {
	constructor(name, tier, subtier, size, packMulti) {
		this.name = name;
		this.tier = tier;
		this.subtier = subtier;
		this.size = size;
		this.packMultiplier = packMulti;
	}
}

let locations = [
	// Tier 1, SubTier D
	new Location("Peaceful Meadow", 1, "D", 1, 1),
	new Location("Quiet Stream", 1, "D", 1, 2),
	new Location("Calm Forest", 1, "D", 2, 3),
	new Location("Gentle Hills", 1, "D", 2, 4),
	new Location("Tranquil Lake", 1, "D", 3, 5),

	// Tier 1, SubTier E
	new Location("Whispering Woods", 1, "E", 1, 1),
	new Location("Silent Cave", 1, "E", 1, 2),
	new Location("Shady Grove", 1, "E", 2, 3),
	new Location("Serene Valley", 1, "E", 2, 4),
	new Location("Mild Riverbank", 1, "E", 3, 5),

	// Tier 1, SubTier C
	new Location("Sunny Glade", 1, "C", 1, 1),
	new Location("Breezy Field", 1, "C", 1, 2),
	new Location("Verdant Park", 1, "C", 2, 3),
	new Location("Rolling Plains", 1, "C", 2, 4),
	new Location("Crystal Pond", 1, "C", 3, 5),

	// Tier 1, SubTier B
	new Location("Floral Garden", 1, "B", 1, 1),
	new Location("Moonlit Clearing", 1, "B", 1, 2),
	new Location("Twilight Meadow", 1, "B", 2, 3),
	new Location("Starlit Path", 1, "B", 2, 4),
	new Location("Radiant Forest", 1, "B", 3, 5),

	// Tier 1, SubTier A
	new Location("Blooming Orchard", 1, "A", 1, 1),
	new Location("Sunny Cove", 1, "A", 1, 2),
	new Location("Hummingbird Hill", 1, "A", 2, 3),
	new Location("Dewdrop Dale", 1, "A", 2, 4),
	new Location("Golden Prairie", 1, "A", 3, 5),

	// Tier 1, SubTier S
	new Location("Sacred Glade", 1, "S", 1, 1),
	new Location("Mystic Grove", 1, "S", 1, 2),
	new Location("Enchanted Valley", 1, "S", 2, 3),
	new Location("Celestial Hills", 1, "S", 2, 4),
	new Location("Luminous Lake", 1, "S", 3, 5),

	// Tier 2, SubTier D
	new Location("Gloomy Swamp", 2, "D", 2, 6),
	new Location("Foggy Marsh", 2, "D", 2, 7),
	new Location("Darkened Forest", 2, "D", 3, 8),
	new Location("Shadowy Woods", 2, "D", 3, 9),
	new Location("Dusky Hollow", 2, "D", 4, 10),

	// Tier 2, SubTier E
	new Location("Misty Bog", 2, "E", 2, 6),
	new Location("Creeping Mire", 2, "E", 2, 7),
	new Location("Murky Lake", 2, "E", 3, 8),
	new Location("Haunted Grove", 2, "E", 3, 9),
	new Location("Weeping Willow", 2, "E", 4, 10),

	// Tier 2, SubTier C
	new Location("Stormy Bluff", 2, "C", 2, 6),
	new Location("Windswept Ridge", 2, "C", 2, 7),
	new Location("Blustery Plains", 2, "C", 3, 8),
	new Location("Tempest Bay", 2, "C", 3, 9),
	new Location("Thunder Peak", 2, "C", 4, 10),

	// Tier 2, SubTier B
	new Location("Frosty Tundra", 2, "B", 2, 6),
	new Location("Chilly Fjord", 2, "B", 2, 7),
	new Location("Icy Expanse", 2, "B", 3, 8),
	new Location("Snowy Highlands", 2, "B", 3, 9),
	new Location("Glacial Valley", 2, "B", 4, 10),

	// Tier 2, SubTier A
	new Location("Frozen Lake", 2, "A", 2, 6),
	new Location("Arctic Wastes", 2, "A", 2, 7),
	new Location("Frigid Mountains", 2, "A", 3, 8),
	new Location("Winter Forest", 2, "A", 3, 9),
	new Location("Polar Icecap", 2, "A", 4, 10),

	// Tier 2, SubTier S
	new Location("Mystic Tundra", 2, "S", 2, 6),
	new Location("Celestial Frost", 2, "S", 2, 7),
	new Location("Enchanted Glacier", 2, "S", 3, 8),
	new Location("Sacred Snowfield", 2, "S", 3, 9),
	new Location("Luminous Iceberg", 2, "S", 4, 10),

	// Tier 3, SubTier D
	new Location("Cursed Cemetery", 3, "D", 3, 11),
	new Location("Forsaken Ruins", 3, "D", 3, 12),
	new Location("Abandoned Mine", 3, "D", 4, 13),
	new Location("Lost Catacombs", 3, "D", 4, 14),
	new Location("Haunted Manor", 3, "D", 5, 15),

	// Tier 3, SubTier E
	new Location("Ghastly Crypt", 3, "E", 3, 11),
	new Location("Spectral Forest", 3, "E", 3, 12),
	new Location("Phantom Canyon", 3, "E", 4, 13),
	new Location("Wailing Caverns", 3, "E", 4, 14),
	new Location("Eerie Island", 3, "E", 5, 15),

	// Tier 3, SubTier C
	new Location("Infernal Crater", 3, "C", 3, 11),
	new Location("Volcanic Ridge", 3, "C", 3, 12),
	new Location("Lava Field", 3, "C", 4, 13),
	new Location("Molten Cavern", 3, "C", 4, 14),
	new Location("Burning Plains", 3, "C", 5, 15),

	// Tier 3, SubTier B
	new Location("Crimson Forest", 3, "B", 3, 11),
	new Location("Bloodstone Mine", 3, "B", 3, 12),
	new Location("Hellfire Wastes", 3, "B", 4, 13),
	new Location("Blazing Canyon", 3, "B", 4, 14),
	new Location("Scorched Desert", 3, "B", 5, 15),

	// Tier 3, SubTier A
	new Location("Fiery Pit", 3, "A", 3, 11),
	new Location("Magma Chamber", 3, "A", 3, 12),
	new Location("Searing Valley", 3, "A", 4, 13),
	new Location("Burning Forest", 3, "A", 4, 14),
	new Location("Charred Wasteland", 3, "A", 5, 15),

	// Tier 3, SubTier S
	new Location("Mystic Volcano", 3, "S", 3, 11),
	new Location("Celestial Flame", 3, "S", 3, 12),
	new Location("Enchanted Inferno", 3, "S", 4, 13),
	new Location("Sacred Furnace", 3, "S", 4, 14),
	new Location("Luminous Pyre", 3, "S", 5, 15),

	// Tier 4, SubTier D
	new Location("Wailing Bog", 4, "D", 4, 16),
	new Location("Cursed Forest", 4, "D", 4, 17),
	new Location("Dread Marsh", 4, "D", 5, 18),
	new Location("Haunted Swamp", 4, "D", 5, 19),
	new Location("Desolate Mire", 4, "D", 5, 20),

	// Tier 4, SubTier E
	new Location("Ghostly Woods", 4, "E", 4, 16),
	new Location("Spectral Marsh", 4, "E", 4, 17),
	new Location("Phantom Swamp", 4, "E", 5, 18),
	new Location("Wraith Valley", 4, "E", 5, 19),
	new Location("Spooky Forest", 4, "E", 5, 20),

	// Tier 4, SubTier C
	new Location("Raging Mountains", 4, "C", 4, 16),
	new Location("Thunderous Ridge", 4, "C", 4, 17),
	new Location("Stormy Peaks", 4, "C", 5, 18),
	new Location("Lightning Crag", 4, "C", 5, 19),
	new Location("Tempest Valley", 4, "C", 5, 20),

	// Tier 4, SubTier B
	new Location("Frozen Wasteland", 4, "B", 4, 16),
	new Location("Icy Peaks", 4, "B", 4, 17),
	new Location("Arctic Expanse", 4, "B", 5, 18),
	new Location("Snowbound Mountains", 4, "B", 5, 19),
	new Location("Frostbite Caverns", 4, "B", 5, 20),

	// Tier 4, SubTier A
	new Location("Glacial Fields", 4, "A", 4, 16),
	new Location("Polar Highlands", 4, "A", 4, 17),
	new Location("Snowy Plateau", 4, "A", 5, 18),
	new Location("Chilling Valley", 4, "A", 5, 19),
	new Location("Frozen Tundra", 4, "A", 5, 20),

	// Tier 4, SubTier S
	new Location("Mystic Glaciers", 4, "S", 4, 16),
	new Location("Celestial Icefields", 4, "S", 4, 17),
	new Location("Enchanted Snowlands", 4, "S", 5, 18),
	new Location("Sacred Frost", 4, "S", 5, 19),
	new Location("Luminous Icereach", 4, "S", 5, 20),

	// Tier 5, SubTier D
	new Location("Forsaken Abyss", 5, "D", 5, 20),
	new Location("Cursed Wastelands", 5, "D", 5, 20),
	new Location("Haunted Desert", 5, "D", 5, 20),
	new Location("Dread Canyon", 5, "D", 5, 20),
	new Location("Desolate Expanse", 5, "D", 5, 20),

	// Tier 5, SubTier E
	new Location("Ghostly Desert", 5, "E", 5, 20),
	new Location("Phantom Wastes", 5, "E", 5, 20),
	new Location("Spectral Abyss", 5, "E", 5, 20),
	new Location("Wraith Plateau", 5, "E", 5, 20),
	new Location("Spooky Canyon", 5, "E", 5, 20),

	// Tier 5, SubTier C
	new Location("Volcanic Wasteland", 5, "C", 5, 20),
	new Location("Infernal Abyss", 5, "C", 5, 20),
	new Location("Lava Highlands", 5, "C", 5, 20),
	new Location("Blazing Plateau", 5, "C", 5, 20),
	new Location("Molten Expanse", 5, "C", 5, 20),

	// Tier 5, SubTier B
	new Location("Bloodstone Wastes", 5, "B", 5, 20),
	new Location("Hellfire Abyss", 5, "B", 5, 20),
	new Location("Crimson Plateau", 5, "B", 5, 20),
	new Location("Burning Highlands", 5, "B", 5, 20),
	new Location("Scorched Expanse", 5, "B", 5, 20),

	// Tier 5, SubTier A
	new Location("Searing Wasteland", 5, "A", 5, 20),
	new Location("Magma Abyss", 5, "A", 5, 20),
	new Location("Fiery Expanse", 5, "A", 5, 20),
	new Location("Charred Plateau", 5, "A", 5, 20),
	new Location("Burning Abyss", 5, "A", 5, 20),

	// Tier 5, SubTier S
	new Location("Mystic Abyss", 5, "S", 5, 20),
	new Location("Celestial Wastelands", 5, "S", 5, 20),
	new Location("Enchanted Plateau", 5, "S", 5, 20),
	new Location("Sacred Expanse", 5, "S", 5, 20),
	new Location("Luminous Highlands", 5, "S", 5, 20),
];

export default locations;
