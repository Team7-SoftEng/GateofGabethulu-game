#pragma strict

var X: float;

function Start () {
	// Gathering normal object scale x
	X = transform.localScale.x;
}

function Update () {
	if(Input.GetKey("a")) { // person playing pushing the left orientation
		// set texture to normal position
		transform.localScale.x = X;
		}
		else if(Input.GetKey("d")) { //person moves to right
			//Flip the texture 
			transform.localScale.x = -X;
			}
}