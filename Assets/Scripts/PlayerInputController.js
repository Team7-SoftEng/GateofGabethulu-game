#pragma strict

public var maxSpeed = 5;

function FixedUpdate() {
	var h = Input.GetAxis("Horizontal");
	var v = Input.GetAxis( "Vertical" );
	
	var vel = new Vector2( h, v );
	vel *= maxSpeed;
	rigidbody2D.velocity = vel;
}