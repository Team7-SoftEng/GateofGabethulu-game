#pragma strict

public var rotSpeed : float = 1;

function RotateWeapon( dir : float ) {
	// rotate around the center of the parent object
	transform.RotateAround(transform.parent.transform.position, Vector3.forward, 360 * Time.deltaTime * rotSpeed * dir );
}