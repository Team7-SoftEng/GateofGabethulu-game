#pragma strict

var enemy : GameObject;
var numEnemies : int = 4;
var maxRespawns : int = 8;

public var spawnPoints : Transform[];

@HideInInspector
public var enemies : GameObject[];
private var numRespawns : int = 0;

function Start () {
	enemies = new GameObject[numEnemies];
	for ( var i = 0; i < numEnemies; i++ )
	{
		var enemy : GameObject = Instantiate(enemy);
		enemy.SetActive( true );
		enemy.transform.position = spawnPoints[ Random.Range( 0, spawnPoints.Length - 1 ) ].position;
		enemy.transform.parent = transform;
		enemies[i] = enemy;
	}
}

function OnDeath(obj:GameObject)
{
	var hComp = obj.GetComponent(health);
	if ( numRespawns == maxRespawns )
	{
		Destroy( obj );
	}
	else
	{
		obj.transform.position = spawnPoints[ Random.Range( 0, spawnPoints.Length - 1 ) ].position;
		hComp.health = hComp.maxHealth;
		numRespawns++;
	}
}
