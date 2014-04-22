#pragma strict

var chestOpen : Sprite;
var chestClosed : Sprite;
var insideWeapon : GameObject;

private var open : boolean = false;

function Start () {
	GetComponent(SpriteRenderer).sprite = chestClosed;
}


function OnTriggerEnter2D( other: Collider2D )
{
	if ( other.tag == "Player" && !open )
	{
		GetComponent(SpriteRenderer).sprite = chestOpen;
		var man = other.GetComponent(WeaponManager);
		man.SetWeapon(insideWeapon);
		open = true;
	}
}