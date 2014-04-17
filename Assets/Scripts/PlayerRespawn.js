#pragma strict

var spawnPoint : Transform;

function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == "Player"){
		other.transform.position = spawnPoint.position;
		var sf = Camera.main.GetComponent(SmoothFollow2);
		sf.target = other.transform;
	} else {
		Destroy(other.gameObject);
	}
}

