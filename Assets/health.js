#pragma strict
public var health : int = 100;
public var spawnPoint : Transform;
private var maxHealth : int;

function Start()
{
	maxHealth = health;
}

function Update()
{
	if ( health <= 0 )
	{
		transform.position = spawnPoint.position;
		var sf = Camera.main.GetComponent(SmoothFollow2);
		sf.target = transform;
		health = maxHealth;
	}
}