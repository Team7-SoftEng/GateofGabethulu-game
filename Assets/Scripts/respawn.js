#pragma strict

var spawnPoint : Transform;

@HideInInspector
var numDeaths : int = 0;

function Start () {
	transform.position = spawnPoint.position;
}

function OnDeath() {
	numDeaths++;
	transform.position = spawnPoint.position;
	var hComp = GetComponent(health);
	hComp.health = hComp.maxHealth;
}