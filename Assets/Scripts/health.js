#pragma strict
public var health : int = 100;
@HideInInspector
public var maxHealth : int;
@HideInInspector

function Start()
{
	maxHealth = health;
}

function Update()
{
	if ( health <= 0 )
	{
		SendMessageUpwards( "OnDeath", this.gameObject, SendMessageOptions.DontRequireReceiver );
	}
}