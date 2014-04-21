#pragma strict

public var maxSpeed = 5;
public var weapon : Transform;

private var playerRenderer : SpriteRenderer;
private var weaponRenderer : SpriteRenderer;

function Start () {
	var obj = GameObject.Find("spawnPoint");
	transform.position = obj.transform.position;
	Camera.main.GetComponent(SmoothFollow2).target = transform;
	playerRenderer = GetComponent(SpriteRenderer);
	weaponRenderer = weapon.GetComponent( SpriteRenderer );
}

function Update () {

}

function FixedUpdate() {
	var h = Input.GetAxis("Horizontal");
	var v = Input.GetAxis( "Vertical" );
	
	var vel = new Vector2( h, v );
	vel *= maxSpeed;
	rigidbody2D.velocity = vel;
}