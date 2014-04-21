#pragma strict

var enemy : GameObject;
var numEnemies : int;
var maxDeaths : int;

private var enemies : ArrayList;

function Start () {
	var children = GetComponentsInChildren(Transform);
	enemies = new ArrayList();
	for ( var  i = 0; i < numEnemies; i++ )
	{
		var enemy : GameObject = Instantiate(enemy);
		enemy.SetActive( true );
		enemy.GetComponent(health).spawnPoint = children[i%children.length].transform;
		enemies.Add( enemy );
	}
}

function Update () {
	var numDeaths = 0;
	
	for ( var i = 0; i < enemies.Count; i++ )
	{
		numDeaths += ( enemies[ i ] as GameObject ).GetComponent(health).numDeaths;
	}
	
	if ( numDeaths >= maxDeaths )
	{
		for ( i = 0; i < enemies.Count; i++ )
		{
			Destroy(enemies[i] as GameObject);
		}
		enemies = new ArrayList();
	}
}