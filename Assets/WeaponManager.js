#pragma strict

public var cweapon : GameObject = null;

function Start()
{
	if ( cweapon != null )
	{
		SetWeapon( cweapon );
	}
}

function SetWeapon( inweapon : GameObject )
{
	var weapon : GameObject = Instantiate(inweapon);
	weapon.transform.parent = transform;
	weapon.transform.localPosition = weapon.transform.position;
	weapon.SetActive(true);
	if ( cweapon != null )
	{
		Destroy(cweapon);
	}
	cweapon = weapon;
}