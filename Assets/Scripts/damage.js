#pragma strict

public var amount = 5;

function OnTriggerEnter2D(other: Collider2D) {
	if ( other.tag == "Player" ) {
		other.GetComponent( health ).health -= amount;
	}
}

