#pragma strict

private var Xpos: float;
private var Ypos: float;
private var max: boolean;

var Motion: boolean;
var maxAmount: int;
var step: float;

function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;

}

function FixedUpdate () {

	// SET MAX
	if(Motion) { // Horizontal
		if(transform.position.x >= Xpos + maxAmount) {
			max = true;
		} else if(transform.position.x <= Xpos) {
			max = false;
			}
	} else {    // Vertical movement
		if(transform.position.y >= Ypos + maxAmount) {
			max = true;
		} else if(transform.position.y <= Ypos) {
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
			transform.position.y += step;
		} 
		else {
			transform.position.y -= step;
		} 
	}

}




