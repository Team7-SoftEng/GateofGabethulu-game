#pragma strict

public var level : int;

function OnEnemiesDefeated()
{
	Destroy( transform.parent.gameObject );
	Application.LoadLevelAdditive(level);
}