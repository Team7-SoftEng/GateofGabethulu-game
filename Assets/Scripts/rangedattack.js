#pragma strict

public var shot : GameObject;
public var fireRate : float;
private var timeLastFired : float = 0;

function FireWeapon() {
	if ( timeLastFired + fireRate < Time.timeSinceLevelLoad )
	{
		// create a new projectile shot starting at the weapon's current position
		
		var nshot : GameObject = Instantiate(shot);
		nshot.SetActive( true );
		nshot.transform.position = transform.position;

		// set the movement direction for the shot
		var moveCont = nshot.GetComponent(ShotMoveController);
		moveCont.dir = Vector3.Normalize( transform.position - transform.parent.transform.position );
	
		// rotate the shot so the sprite is facing the correct direction
		nshot.transform.Rotate( Quaternion.LookRotation(Vector3.forward,moveCont.dir).eulerAngles );
		timeLastFired = Time.timeSinceLevelLoad;
	}
}