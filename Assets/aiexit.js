#pragma strict

var extraSprite : GameObject;
var targetTag : String;
var offset : float;
private var update = false;
private var obj2 : GameObject;

function OnDeath(obj: GameObject)
{
	var input = obj.GetComponent(AIInputController);
	input.targetTag = targetTag;
	input.maxDistance = 10000;
	obj2 = Instantiate( extraSprite );
	obj2.transform.parent = transform;
	obj2.transform.position = transform.position + Vector3( 0, offset, 0 );
	update = true;
}

function Update()
{
	if ( update )
	{
		if ( GetComponent(AIInputController).distanceToTarget < 30 )
		{
			Destroy( gameObject );
		}
	}
}