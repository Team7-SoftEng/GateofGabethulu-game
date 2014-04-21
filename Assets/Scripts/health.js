#pragma strict
public var health : int = 100;
public var spawnPoint : Transform;

@HideInInspector
public var maxHealth : int;

function Start()
{
	maxHealth = health;
}

function Update()
{
	if ( health <= 0 )
	{
		transform.position = spawnPoint.position;
		health = maxHealth;
	}
}