#pragma strict

var maxSpeed = 8;
var maxDistance = 15;

function Update () {
	var allObjects = GameObject.FindGameObjectsWithTag("Player");
	var dist = 100000;
	var pTransform : Transform;
	for ( var child : GameObject in allObjects )
	{
		var ldist = Vector2.Distance( child.transform.position, transform.position );
		
		if ( ldist < dist )
		{
			dist = ldist;
			pTransform = child.transform;
		}
	}
	
	if ( dist < maxDistance )
	{
		var vel : Vector2 = pTransform.position - transform.position;
		vel.Normalize();
		vel *= maxSpeed;
		rigidbody2D.velocity = vel;
	}
	else
	{
		rigidbody2D.velocity = Vector2( 0, 0 );
	}
}