#pragma strict

function Update ()
{
	if (Input.GetKey(KeyCode.Escape) )
	{
		gameObject.SetActive(false);
	}
}