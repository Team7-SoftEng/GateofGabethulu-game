#pragma strict

//var animator : Animator;
function Start () {
	//animator = gameObject.GetComponent( Animator );
}

function Update () {
	var animator = gameObject.GetComponent( Animator );
	if(Input.GetKey("a")){  // Player moves Left
		animator.SetInteger( "Direction", 1 );
	}
	else if(Input.GetKey("d")) {   // Player moves right
		animator.SetInteger( "Direction", 2 );
	}
	else if(!Input.GetKey("w") && !Input.GetKey("s")) {   // Player not moving
		animator.SetInteger( "Direction", 0 );	
	}
}