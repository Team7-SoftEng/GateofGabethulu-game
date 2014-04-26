#pragma strict

@HideInInspector
var pickupItem : GameObject;

function OnPickupAvailable( obj : GameObject )
{
	pickupItem = obj;
}

function OnPickupUnavailable()
{
	pickupItem = null;
}
