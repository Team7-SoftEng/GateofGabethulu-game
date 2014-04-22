#pragma strict

public var shot : GameObject;
public var fireRate : float;
private var timeLastFired : float = 0;

function Update () {
	
	var down = Input.GetButton( "Fire1" );
	
	if ( down )
	{
		transform.RotateAround(transform.parent.transform.position, Vector3.forward, 360 * Time.deltaTime );
	}
	
	if ( timeLastFired + fireRate < Time.timeSinceLevelLoad )
	{
		var nshot : GameObject = Instantiate(shot);
		nshot.SetActive( true );
		nshot.transform.position = transform.position;
		//nshot.transform.parent = transform;
		var moveCont = nshot.GetComponent(ShotMoveController);
		moveCont.dir = Vector3.Normalize( transform.position - transform.parent.transform.position );
	
		// rotate the shot so it is facing the correct direction
		nshot.transform.Rotate( Quaternion.LookRotation(Vector3.forward,moveCont.dir).eulerAngles );
		timeLastFired = Time.timeSinceLevelLoad;
	}
}