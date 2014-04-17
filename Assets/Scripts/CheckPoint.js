#pragma strict

var spawnPoint : Transform;

function OnTriggerEnter2D(other : Collider2D) {
	if(other.tag == "Player") {
		spawnPoint.position = transform.position;
		Destroy(gameObject);
	}
}