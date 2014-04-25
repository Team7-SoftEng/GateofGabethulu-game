#pragma strict

public var level : int;

function OnEnemiesDefeated()
{
	var pl = GameObject.FindGameObjectWithTag("Player");
	DontDestroyOnLoad( pl );
	DontDestroyOnLoad( Camera.main );
	Application.LoadLevel( level );
}