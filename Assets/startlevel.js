#pragma strict

var spawnPoint : Transform;

function Awake() {
	var player = GameObject.FindWithTag("Player");
	player.transform.position = spawnPoint.position;
}