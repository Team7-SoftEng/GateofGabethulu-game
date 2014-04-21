#pragma strict
@HideInInspector
public var weapons : GameObject[];
@HideInInspector
public var cweaponIndex = 0;

function Start()
{
	weapons = new GameObject[5];
	for( var i = 0; i < weapons.Length; i++ )
	{
		weapons[ i ] = null;
	}
}

function DisableWeapons()
{
	for ( var  i = 0; i < weapons.Length; i++ )
	{
		if ( weapons[ i ] != null )
		{
			weapons[ i ].SetActive( false );
		}
	}
}

function Update()
{
	// check for inventory switches
	for ( var i : int = 1; i <= 5; i++ )
	{
		if ( Input.GetKey( i.ToString() ) )
		{
			if ( weapons[ i - 1 ] != null )
			{
				DisableWeapons();
				weapons[ i - 1 ].SetActive( true );
				cweaponIndex = i - 1;
				break;
			}
		}
	}
}
function SetWeapon( inweapon : GameObject )
{
	var weapon : GameObject = Instantiate(inweapon);
	weapon.transform.parent = transform;
	weapon.transform.localPosition = weapon.transform.position;
	weapon.SetActive(true);
	var i : int;
	
	// find a free slot
	for ( i = 0; i < weapons.Length; i++ )
	{
		if ( weapons[ i ] == null )
		{
			weapons[ i ] = weapon;
			cweaponIndex = i;
			break;
		}
	}
	
	// coult not find a free slot, so replace the existing weapon
	if ( i == weapons.Length )
	{
		if ( weapons[cweaponIndex] != null )
		{
			Destroy(weapons[cweaponIndex]);
			weapons[cweaponIndex] = null;
		}
		weapons[cweaponIndex] = weapon;
	}
}