// battleSimulation will run on battleSection
const battleSimulation = (playerArmy, monsterComposition) => {
	const updatedPlayerArmy = convertToDecimal(armyCopy(playerArmy));
	const updatedMonsterArmy = convertToDecimal(armyCopy(monsterComposition));

	const playerTotalDamage = calculateTotalDamage(updatedPlayerArmy);
	const monsterTotalDamage = calculateTotalDamage(monsterComposition);

	applyDamage(updatedPlayerArmy, monsterTotalDamage);
	applyDamage(updatedMonsterArmy, playerTotalDamage);
};
// create copy of army
const armyCopy = (army) => {
	const copy = JSON.parse(JSON.stringify(army));
	return copy;
};

// convert to Decimal Values
const convertToDecimal = (armyObj) => {
	return Object.fromEntries(
		Object.entries(armyObj).map(([key, unit]) => [
			key,
			{
				...unit,
				count: new Decimal(unit.count),
				attack: new Decimal(unit.attack),
				health: new Decimal(unit.health),
				currentHealth: new Decimal(unit.currentHealth),
			},
		])
	);
};
//calculate total damage
const calculateTotalDamage = (army) => {
	return Object.values(army).reduce(
		(sum, unit) => sum.plus(unit.count.times(unit.attack)),
		new Decimal(0)
	);
};

// apply damage
const applyDamage = (army, totalDamage) => {
	let remainingDamage = new Decimal(totalDamage);
	const casualties = {};

	while (
		Object.values(army).some((unit) => unit.count.gt(0)) &&
		remainingDamage.gt(0)
	) {
		const aliveUnits = Object.keys(army).filter((key) => army[key].count.gt(0));
		if (aliveUnits.length === 0) break;

		const targetUnitKey =
			aliveUnits[Math.floor(Math.random() * aliveUnits.length)];
		const targetUnit = army[targetUnitKey];

		const damageToUnit = Decimal.min(remainingDamage, targetUnit.currentHealth);
		targetUnit.currentHealth = targetUnit.currentHealth.minus(damageToUnit);
		remainingDamage = remainingDamage.minus(damageToUnit);

		if (targetUnit.currentHealth.lte(0)) {
			casualties[targetUnit.name] = (casualties[targetUnit.name] || 0) + 1;
			targetUnit.count = targetUnit.count.minus(1);

			if (targetUnit.count.gt(0)) {
				targetUnit.currentHealth = new Decimal(targetUnit.health);
			}
		}
	}
};
