#pragma strict

var inactiveplayer : GameObject;
var inactivecamera : GameObject;
var spawnPoint : Transform;

function Awake() {
	var player = GameObject.FindWithTag("Player");
	
	if ( player == null )
	{
		// if there is no active player, then this level was started out of order, so activate this level's camera and player objects
		inactiveplayer.SetActive( true );
		inactivecamera.SetActive( true );
	}
	else
	{
		// reset the player's spawn point
		player.transform.position = spawnPoint.position;
		player.GetComponent(respawn).spawnPoint = spawnPoint;
	}
}