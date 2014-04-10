#pragma strict

private var Xpos: float;
private var Zpos: float;
private var max: boolean;

var Motion: boolean;
var maxAmount: int;
var step: float;

function Start () {
	Xpos = transform.position.x;
	Zpos = transform.position.z;

}

function Update () {

	// SET MAX
	if(Motion) { // Horizontal
		if(transform.position.x >= Xpos + maxAmount) {
			max = true;
		} else if(transform.position.x <= Xpos) {
			max = false;
			}
	} else {    // Vertical movement
		if(transform.position.z >= Zpos + maxAmount) {
			max = true;
		} else if(transform.position.z <= Zpos) {
			max = false;
			}
		}

	//MOVING THE DOOR
	if(Motion){     // horizontal motion 
		if(!max) {
			transform.position.x += step;
		} 
		else {
			transform.position.x -= step;
		} 
	} else {
	if(!max) {
			transform.position.z += step;
		} 
		else {
			transform.position.z -= step;
		} 
	}

}




