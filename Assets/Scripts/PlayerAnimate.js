#pragma strict


function Start () {
	
}

function Update () {
var AT = gameObject.GetComponent(AnimateTexture);  // Store the AnimateTexture script

	if(Input.GetKey("a")){  // Player moves Left
		AT.rowNumber = 0;   // Running animation
	}
	else if(Input.GetKey("d")) {   // Player moves right
		AT.rowNumber = 0;          // Running animation
	}
	
	else if(Input.GetKey("w")) {   // Player moves right
		AT.rowNumber = 0;          // Running animation
	}
	
	else if(Input.GetKey("s")) {   // Player moves right
		AT.rowNumber = 0;          // Running animation
	}
	
	else {							// Player not moving
		AT.rowNumber = 1;			// Change to idle animation
	}
}