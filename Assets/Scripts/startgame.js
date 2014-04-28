#pragma strict

var player : GameObject;

function Start () {
	var args : String[] = System.Environment.GetCommandLineArgs();
	
	if ( args.Length >= 5 )
	{
		player.GetComponent(label).text = args[1];
		var h : int = parseInt(args[4]);
		player.GetComponent(health).health = h;
		player.GetComponent(health).maxHealth = h;
	}
}

function Update () {

}