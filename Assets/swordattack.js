#pragma strict

public var rotAround : Transform;
public var speed : float;

function Start () {
	timeLastDown = Time.timeSinceLevelLoad;
}

private var timeLastDown : float;
private var animating : int = 0;
private var beginPosition : Transform;

function Update () {
	
	var down = Input.GetButton( "Fire1" );
	
	if ( down )
	{
		transform.RotateAround(rotAround.position, Vector3.forward, 360 * Time.deltaTime * speed );
	}
}