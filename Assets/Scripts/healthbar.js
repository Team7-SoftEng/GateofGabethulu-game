#pragma strict
public var healthfull : GUIStyle;
public var healthempty : GUIStyle;
public var emptyTex : Texture2D;
public var fullTex : Texture2D;
public var size : Vector2 = new Vector2( 250, 50 );
private var hcomp : health;
private var barDisplay : float;
private var sprite : SpriteRenderer;

function Start () {
	barDisplay = 1;
	sprite = GetComponent(SpriteRenderer);
	hcomp = GetComponent(health);
}

function Update () {
	barDisplay = hcomp.health / parseFloat( hcomp.maxHealth );
}

function OnGUI()
{
	//take the center point 
	var worldPoint = transform.position;
	
	//now the middle top point
	worldPoint.y += sprite.bounds.extents.y;
	
	// convert to gui space
	var loc = Camera.main.WorldToScreenPoint( worldPoint );
	loc.y = Screen.height - loc.y;
	
	// align health bar so it doesn't overlap the sprite
	loc.y -= size.y;
	loc.x -= size.x / 2;
	
	var rect = new Rect( loc.x, loc.y, size.x, size.y );
	
	//draw background
	GUI.BeginGroup( rect, emptyTex, healthempty );
	GUI.Box( rect, emptyTex, healthfull );
	
	// draw filled area
	GUI.BeginGroup( new Rect( 0, 0, size.x * barDisplay, size.y ) );
	GUI.Box( new Rect( 0, 0, size.x, size.y ), fullTex, healthfull );
	GUI.EndGroup();
	
	GUI.EndGroup();
}