#pragma strict

var chestOpen : Sprite;
var chestClosed : Sprite;
var insideWeapon : GameObject;

private var open : boolean = false;
private var empty : boolean = false;

function Start () {
	GetComponent(SpriteRenderer).sprite = chestClosed;
}


function OnTriggerEnter2D( other: Collider2D )
{
	if ( other.tag == "Player" && !open )
	{
		GetComponent(SpriteRenderer).sprite = chestOpen;
		var child = transform.FindChild("chestcontent");
		child.GetComponent(SpriteRenderer).sprite = insideWeapon.GetComponent(SpriteRenderer).sprite;
		open = true;
	}
}

function OnTriggerStay2D( other: Collider2D )
{
	if ( other.tag == "Player" && !empty && open && Input.GetKey( "e" ) )
	{
		Destroy(transform.FindChild("chestcontent").gameObject);
		var man : WeaponManager = other.GetComponent(WeaponManager);
		man.SetWeapon( insideWeapon );
		empty = true;
	}
}