#pragma strict
public var health : int = 100;
public var spawnPoint : Transform;

@HideInInspector
public var maxHealth : int;
@HideInInspector
public var numDeaths : int;

function Start()
{
	maxHealth = health;
	transform.position = spawnPoint.position; // spawn at the correct point
	numDeaths = 0;
}

function Update()
{
	if ( health <= 0 )
	{
		transform.position = spawnPoint.position;
		health = maxHealth;
		numDeaths++;
	}
}