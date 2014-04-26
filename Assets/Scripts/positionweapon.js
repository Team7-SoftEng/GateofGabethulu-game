#pragma strict

public var rotSpeed : float = 1;
public var offset : float = 3.5;

function RotateWeapon( dir : float ) {
	// rotate around the center of the parent object
	transform.RotateAround(transform.parent.transform.position, Vector3.forward, 360 * Time.deltaTime * rotSpeed * dir );;
}

function PositionWeapon( origin : Vector3 )
{
	transform.position = Vector3.up * offset + origin;
}