#pragma strict
public var health : int = 100;
@HideInInspector
public var maxHealth : int;

function Start()
{
	maxHealth = health;
}

function ApplyDamage( damage : int )
{
	health -= damage;
	if ( health <= 0 )
	{
		SendMessageUpwards( "OnDeath", gameObject, SendMessageOptions.DontRequireReceiver );
	}
}

function ApplyHealing( heal : int )
{
	health += heal;
	if ( health > maxHealth )
	{
		health = maxHealth;
	}
}