#pragma strict

var player : GameObject;

function Start () {
	var args : String[] = System.Environment.GetCommandLineArgs();
	
	if ( args.Length > 1 )
	{
		player.GetComponent(label).text = args[1];
		var h : int = parseInt(args[5]);
		player.GetComponent(health).health = h;
		player.GetComponent(health).maxHealth = h;
	}
}

function Update () {

}