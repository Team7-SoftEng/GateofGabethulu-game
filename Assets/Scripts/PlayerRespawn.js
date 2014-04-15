﻿#pragma strict

var Player : GameObject;
var spawnPoint : Transform;

function OnTriggerEnter(other: Collider) {
	if(other.tag == "Player"){
		other.transform.position = spawnPoint.position;
		var sf = Camera.main.GetComponent(SmoothFollow2);
		sf.target = other.transform;
	} else {
		Destroy(other.gameObject);
	}
}

