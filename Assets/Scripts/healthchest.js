#pragma strict

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
		var hComp = other.GetComponent(health);
		hComp.health += healthRegen;
		open = true;
	}
}