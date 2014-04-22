#pragma strict
public var selectedTex : Texture2D;
public var neutralTex: Texture2D;
public var height : int = 50;
public var width : int = 50;

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

function OnGUI()
{
	var locx = 0;
	var locy = 0;
	var rect : Rect = new Rect(locx, locy, width, height * 5);
	GUI.BeginGroup(rect);
	GUI.DrawTexture(rect,neutralTex);
	
	for ( var i = 0; i < 5; i++ )
	{
		if ( weapons[i] != null )
		{
			var itemRect = new Rect(0, height * i, width, height );
	
			if ( i == cweaponIndex )
			{
				GUI.DrawTexture( itemRect, selectedTex );
			}
			
			var spriteren : SpriteRenderer = weapons[i].GetComponent(SpriteRenderer);
			var texRect : Rect = spriteren.sprite.rect;
			var twidth : float = spriteren.sprite.texture.width;
			var theight : float = spriteren.sprite.texture.height;
			
			// find the aspect ratio the image is in so we don't stretch it
			var aspect : Vector2 = Vector2( texRect.width, texRect.height );
			aspect.Normalize();
			
			// find the maximum size we can fit into this rect without stretching the image
			aspect *= Mathf.Min( width, height );
			
			// set the new rect location and size so we don't stretch the image
			var spriteRect : Rect = new Rect( ( width - aspect.x ) / 2, ( height - aspect.y ) / 2 + height * i, aspect.x, aspect.y ); 

			// find the correct texture coordinates scaled within the range 0..1
			texRect.Set(texRect.left / twidth, texRect.top / theight, texRect.width / twidth, texRect.height / theight );
			
			// draw the sprite
			GUI.DrawTextureWithTexCoords( spriteRect, spriteren.sprite.texture, texRect );
		}
	}
	GUI.EndGroup();
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
			DisableWeapons();
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