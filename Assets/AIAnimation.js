#pragma strict

private var animator : Animator;

function Start () {
	animator = gameObject.GetComponent(Animator);
}

function Update ( ) {
	var dir = rigidbody2D.velocity.normalized;
	var dotup : float = Vector2.Angle( Vector3.up, dir );
	var dotright : float = Vector2.Angle( Vector3.right, dir );

	if ( dotup < dotright )
	{
		if ( dotup < 180 - dotright )
		{
			animator.SetInteger( "direction", 1 );
		}
		else
		{
			animator.SetInteger( "direction", 4 );
		}
	}
	else
	{
		if ( dotright < 180 - dotup )
		{
			animator.SetInteger( "direction", 2 );
		}
		else
		{
			animator.SetInteger( "direction", 3 );
		}
	}
}