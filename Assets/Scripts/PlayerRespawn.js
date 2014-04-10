#pragma strict

var Player : GameObject;
var spawnPoint : Transform;

function OnTriggerEnter(other: Collider) {
	if(other.tag == "Player"){
		Destroy(other.gameObject);
		var P : GameObject = Instantiate(Player, spawnPoint.position, Quaternion.identity);
		var sf = Camera.main.GetComponent(SmoothFollow2);
		sf.target = P.transform;
	} else {
		Destroy(other.gameObject);
	}
}

