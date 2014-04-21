#pragma strict

public var amount = 5;
public var damagetag : String;

function OnTriggerEnter2D(other: Collider2D) {
	if ( other.tag == damagetag ) {
		other.GetComponent( health ).health -= amount;
	}
}

