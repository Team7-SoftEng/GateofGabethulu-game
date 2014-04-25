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

function SwitchWeapon( index : int )
{
	if ( index >= 0 && index < weapons.Length && index != cweaponIndex )
	{
		if ( weapons[ index ] != null )
		{
			DisableWeapons();
			weapons[ index ].SetActive( true );
			cweaponIndex = index;
		}
	}
}

function OnGUI()
{
	var locx = Screen.width - width;
	var locy = 0;
	var rect : Rect = new Rect(locx, locy, width, height * 5);
	GUI.BeginGroup(rect);
	GUI.DrawTexture(new Rect(0,0, width, height * 5),neutralTex);
	
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
			texRect.Set(texRect.xMin / twidth, texRect.yMin / theight, texRect.width / twidth, texRect.height / theight );
			
			// draw the sprite
			GUI.DrawTextureWithTexCoords( spriteRect, spriteren.sprite.texture, texRect );
		}
	}
	GUI.EndGroup();
}

function AddWeapon( inweapon : GameObject )
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