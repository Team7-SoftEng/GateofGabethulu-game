#pragma strict

function OnTriggerEnter2D(other: Collider2D) {
	if(other.tag == "Player"){
		other.GetComponent( health ).health -= 5;
	}
}