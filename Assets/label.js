﻿#pragma strict

var text : String;
private var sprite : SpriteRenderer;

function Start () {
	sprite = GetComponent(SpriteRenderer);
}

function OnGUI () {
	var point = transform.position;
	point.y += sprite.bounds.extents.y;
	
	point = Camera.main.WorldToScreenPoint(point);
	point.y = Screen.height - point.y;
	var size : Vector2 = GUI.skin.label.CalcSize(GUIContent(text));
	point.x -= size.x / 2;
	point.y -= size.y;
	var rect = Rect(point.x, point.y, size.x, size.y);
	GUI.contentColor = Color.black;
	GUI.Label(rect, text);
}