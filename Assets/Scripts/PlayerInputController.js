#pragma strict
@script RequireComponent(Animator)

public var maxSpeed = 5;
private var animator : Animator;

function Start()
{
	animator = GetComponent(Animator);
}

function Update() {
	var h = Input.GetAxis("Horizontal");
	var v = Input.GetAxis( "Vertical" );
	
	// use input to set the animation
	if (h < 0){
		animator.SetInteger( "Direction", 1 );
	}
	else if (h > 0) {
		animator.SetInteger( "Direction", 2 );
	}
	else if (v > 0) {
		animator.SetInteger( "Direction", 3 );
	}
	else if (v < 0) {
		animator.SetInteger( "Direction", 0 );	
	}
	
	// weapon aim controls
	if ( Input.GetButton( "Fire1" ) )
	{
		BroadcastMessage("RotateWeapon", 1, SendMessageOptions.DontRequireReceiver );
	}
	else if ( Input.GetButton( "Fire2" ) )
	{
		BroadcastMessage("RotateWeapon", -1, SendMessageOptions.DontRequireReceiver );
	}
	
	// fire weapon ( for ranged weapons )
	if ( Input.GetButton( "Fire3" ) )
	{
		BroadcastMessage("FireWeapon", SendMessageOptions.DontRequireReceiver );
	}
	
	
	// send wanted velocity to the collision system
	var vel = new Vector2( h, v );
	vel *= maxSpeed;
	rigidbody2D.velocity = vel;
}