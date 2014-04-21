#pragma strict

var enemy : GameObject;
var numEnemies : int = 4;
var maxRespawnsPerEnemy : int = 1;

private var enemies : ArrayList;

function Start () {
	var children = GetComponentsInChildren(Transform);
	enemies = new ArrayList();
	for ( var  i = 0; i < numEnemies; i++ )
	{
		var enemy : GameObject = Instantiate(enemy);
		enemy.SetActive( true );
		var hComp = enemy.GetComponent(health);
		hComp.spawnPoint = children[i%children.length].transform;
		
		enemies.Add( enemy );
	}
}

function Update () {
	for ( var i = 0; i < enemies.Count; i++ )
	{
		var hComp = ( enemies[ i ] as GameObject ).GetComponent(health);
		
		if ( hComp.numRespawns > maxRespawnsPerEnemy )
		{
			Destroy( enemies[i] as GameObject );
			enemies.RemoveAt( i );
			i--;
		}
	}
}