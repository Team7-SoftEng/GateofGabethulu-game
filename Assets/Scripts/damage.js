#pragma strict

public var amount = 5;
public var damagetag : String;
public var repeatTime : float = 1;
private var lastDamageTime : float = 0;

function damage(other: Collider2D)
{
	if ( other.tag == damagetag && lastDamageTime + repeatTime < Time.timeSinceLevelLoad ) {
		other.GetComponent( health ).health -= amount;
		lastDamageTime = Time.timeSinceLevelLoad;
	}
}

function OnTriggerEnter2D(other: Collider2D) {
	damage(other);
}

function OnTriggerStay2D(other: Collider2D) {
	damage(other);
}

