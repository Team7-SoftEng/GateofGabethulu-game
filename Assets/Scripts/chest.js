#pragma strict

var chestOpen : Sprite;
var chestClosed : Sprite;
var objectInside : GameObject;

private var open : boolean = false;
private var pickup : GameObject;

function Start () {
	GetComponent(SpriteRenderer).sprite = chestClosed;
	pickup = null;
}

function OnTriggerEnter2D( other: Collider2D )
{
	if ( other.tag == "Player" )
	{
		if ( !open )
		{
			GetComponent(SpriteRenderer).sprite = chestOpen;
			
			// create an instance of the static object
			pickup = Instantiate(objectInside);
			pickup.SetActive( true );
			pickup.transform.parent = transform;
			pickup.transform.position = transform.position;
			
			open = true;
		}
		
		// send this pickup to the object that touched us
		if ( pickup != null )
		{
			other.gameObject.SendMessage("OnPickupAvailable", pickup);
		}
	}
}

function OnTriggerLeave2D( other: Collider2D )
{
	if ( other.tag == "Player" )
	{
		// the player has moved away from the chest, so they can no longer pick up the item
		if ( pickup != null )
		{
			other.gameObject.SendMessage("OnPickupUnavailable");
		}
	}
}


