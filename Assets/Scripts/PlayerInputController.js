#pragma strict

public var maxSpeed = 5;

function Start () {
	var obj = GameObject.Find("spawnPoint");
	transform.position = obj.transform.position;
	Camera.main.GetComponent(SmoothFollow2).target = transform;
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