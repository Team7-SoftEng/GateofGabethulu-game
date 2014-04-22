#pragma strict

var moveSpeed : float;
var lifeTime : float;

@HideInInspector
var dir : Vector3;
private var creationTime = 0;

function Update ()
{
	if ( creationTime == 0 )
	{
		creationTime = Time.timeSinceLevelLoad;
		dir = Vector3.Normalize(dir);
	}
	
	if ( creationTime + lifeTime < Time.timeSinceLevelLoad )
	{
		Destroy( this.gameObject );
	}
	else
	{
		transform.position += dir * moveSpeed * Time.deltaTime;
	}
}