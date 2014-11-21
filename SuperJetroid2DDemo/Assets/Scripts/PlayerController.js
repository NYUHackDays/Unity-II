import UnityEngine;
import System.Collections;

public class PlayerController extends MonoBehaviour {

	public var moving: Vector2 = new Vector2();

	// Use this for initialization
	private function Start() {
	
	}
	
	// Update is called once per frame
	private function Update() {
	
		moving.x = moving.y = 0;

		if (Input.GetKey ("right")) {
			moving.x = 1;
		} else if (Input.GetKey ("left")) {
			moving.x = -1;
		}

		if (Input.GetKey ("up")) {
			moving.y = 1;
		} else if (Input.GetKey ("down")) {
			moving.y = -1;
		}

	}
}