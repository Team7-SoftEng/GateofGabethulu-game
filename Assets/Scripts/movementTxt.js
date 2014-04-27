#pragma strict

var Movementtxt : GameObject;

function Start () {
Movementtxt.active=true;}

function Update () {
if(Input.GetKey(KeyCode.Escape)){
Movementtxt.active=false;}}