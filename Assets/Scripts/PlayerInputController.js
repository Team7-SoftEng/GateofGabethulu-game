#pragma strict
@script RequireComponent(Animator)
@script RequireComponent(WeaponManager)
@script RequireComponent(pickupbehavior);

public var maxSpeed = 5;
private var animator : Animator;
private var weaponManager : WeaponManager;
private var pickupBehavior : pickupbehavior;

function Start()
{
	animator = GetComponent(Animator);
	weaponManager = GetComponent(WeaponManager);
	pickupBehavior = GetComponent(pickupbehavior);
}

function Update() {
	var h = Input.GetAxis("Horizontal");
	var v = Input.GetAxis( "Vertical" );
	
	// use input to set the animation
	if (h < 0){
		animator.SetInteger( "Direction", 1 );
	}
	else if (h > 0) {
		animator.SetInteger( "Direction", 2 );
	}
	else if (v > 0) {
		animator.SetInteger( "Direction", 3 );
	}
	else if (v < 0) {
		animator.SetInteger( "Direction", 0 );	
	}
	
	// weapon aim controls
	if ( Input.GetButton( "Fire1" ) )
	{
		BroadcastMessage("RotateWeapon", 1, SendMessageOptions.DontRequireReceiver );
	}
	else if ( Input.GetButton( "Fire2" ) )
	{
		BroadcastMessage("RotateWeapon", -1, SendMessageOptions.DontRequireReceiver );
	}
	
	// fire weapon ( for ranged weapons )
	if ( Input.GetButton( "Fire3" ) )
	{
		BroadcastMessage("FireWeapon", SendMessageOptions.DontRequireReceiver );
	}
	
	// weapon switcher
	for ( var i : int = 1; i < 6; i++ )
	{
		if ( Input.GetKey( i.ToString() ) )
		{
			weaponManager.SwitchWeapon( i - 1 );
			break;
		}
	}
	
	// pickup any items we touch
	if ( Input.GetButton("TakeItem") )
	{
		if ( pickupBehavior.pickupItem != null )
		{
			if ( pickupBehavior.pickupItem.tag == "Weapon" )
			{
				// reset the incomming prefab instance to correct any positional data
				PrefabUtility.ResetToPrefabState( pickupBehavior.pickupItem );
				weaponManager.AddWeapon(pickupBehavior.pickupItem);
				Destroy(pickupBehavior.pickupItem);
			}
		}
	}
	
	// send wanted velocity to the collision system
	var vel = new Vector2( h, v );
	vel *= maxSpeed;
	rigidbody2D.velocity = vel;
}