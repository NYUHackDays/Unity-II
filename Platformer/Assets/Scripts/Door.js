#pragma strict
import UnityEngine;
import System.Collections;

public class Door extends MonoBehaviour {
	private var animator: Animator;
	
	var IDLE = 0;
	var OPENING = 1;
	var OPEN = 2;
	var CLOSING = 3;
	var closeDelay : float = .3;
	
	private var state = IDLE;

	function Start () {
		animator = GetComponent.<Animator>();
	}	

	function Update () {

	}
	
	function OnOpenStart() {
		state = OPENING;
	}
	
	function OnOpenEnd() {
		state = OPEN;
	}
	
	function OnCloseStart() {
		state = CLOSING;
	}
	
	function OnCloseEnd() {
		state = IDLE;
	}
	
	function DisableCollider2D() {
		collider2D.enabled = false;
	}
	
	function EnableCollider2D() {
		collider2D.enabled = true;
	}
	
	function Open() {
		animator.SetInteger("DoorState", 2);
	}
	
	function Close() {
		StartCoroutine(CloseNow());
	}
	
	private function CloseNow() {
		yield WaitForSeconds(closeDelay);
		animator.SetInteger("DoorState", 1);
	}
}
