#pragma strict

var maxSpeed = 8;
var maxDistance = 15;
var targetTag = "Player";

@HideInInspector
var distanceToTarget = 0;

function Update () {
	var allObjects = GameObject.FindGameObjectsWithTag(targetTag);
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
	distanceToTarget = dist;
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