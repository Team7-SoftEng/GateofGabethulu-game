#pragma strict

private var motor : CharacterMotor;

function Start () {

	motor = GetComponent( CharacterMotor );
}

function Update () {
	var allObjects = GameObject.FindGameObjectsWithTag("Player");
	var dist = 100000;
	var pTransform : Transform;
	for ( var child : GameObject in allObjects )
	{
		var ldist = Vector3.Distance( child.transform.position, transform.position );
		
		if ( ldist < dist )
		{
			dist = ldist;
			pTransform = child.transform;
		}
	}
	
	if ( dist < 10 )
	{
		motor.inputMoveDirection = Vector3.Normalize(  pTransform.position - transform.position );
	}
	else
	{
		motor.inputMoveDirection = Vector3( 0, 0, 0 );
	}
}
@script RequireComponent (CharacterMotor)