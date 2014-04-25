#pragma strict
@script RequireComponent(SpriteRenderer)
var chestOpen : Sprite;
var chestClosed : Sprite;
var healthRegen : int;

private var open : boolean = false;

function Start () {
	GetComponent(SpriteRenderer).sprite = chestClosed;
}

function OnTriggerEnter2D( other: Collider2D )
{
	if ( other.tag == "Player" && !open )
	{
		GetComponent(SpriteRenderer).sprite = chestOpen;
		other.GetComponent(health).ApplyHealing(healthRegen);
		open = true;
	}
}