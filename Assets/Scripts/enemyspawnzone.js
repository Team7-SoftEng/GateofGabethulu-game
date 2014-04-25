#pragma strict

public var enemies : GameObject[];
public var numEnemies : int = 4;
public var maxRespawns : int = 8;
public var endTrigger : GameObject;
public var spawnPoints : Transform[];

private var numRespawns : int = 0;
private var spawnIndex : int = 0;

function Start () {
	for ( var i = 0; i < numEnemies; i++ )
	{
		var enemy : GameObject = Instantiate(enemies[i%enemies.Length]);
		enemy.SetActive( true );
		enemy.transform.position = spawnPoints[ spawnIndex % spawnPoints.Length ].position;
		enemy.transform.parent = transform;
		spawnIndex = spawnIndex + 1;
	}
}

function Update()
{
	if( numEnemies == 0 && endTrigger )
	{
		endTrigger.SendMessage("OnEnemiesDefeated");
	}
}

function OnDeath(obj:GameObject)
{
	var hComp = obj.GetComponent(health);
	if ( numRespawns == maxRespawns )
	{
		Destroy( obj );
		numEnemies--;
	}
	else
	{
		obj.transform.position = spawnPoints[ spawnIndex % spawnPoints.Length ].position;
		hComp.health = hComp.maxHealth;
		numRespawns++;
		spawnIndex++;
	}
}
