#pragma strict

var spawnPoint : Transform;

function OnTriggerEnter(other : Collider) {
	if(other.tag == "Player") {
		spawnPoint.position = Vector3(transform.position.x, spawnPoint.position.y, transform.position.z);
		Destroy(gameObject);
	}
}