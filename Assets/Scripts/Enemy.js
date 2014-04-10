#pragma strict

private var fall : boolean;
var Player : GameObject;
var spawnPoint : Transform;
var stomp : boolean;


function Update () {

}

function OnTriggerEnter(other : Collider) {
	if(!stomp){
		if(other.tag == "Player"){
			Destroy(other.gameObject);
			var P : GameObject = Instantiate(Player, spawnPoint.position, Quaternion.identity);
			var sf = Camera.main.GetComponent(SmoothFollow2);
			sf.target = P.transform;
		}
	}
}