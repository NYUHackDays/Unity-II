import UnityEngine;
import System.Collections;

public class Player extends MonoBehaviour {

	public var speed: float = 10;
	public var maxVelocity: Vector2 = new Vector2(3, 5);
	public var standing: boolean;
	public var jetSpeed: float = 15;
	public var airSpeedMultiplier: float = .3;

	private var animator: Animator;
	private var controller: PlayerController;

	private function Start(){
		controller = GetComponent.<PlayerController> ();
		animator = GetComponent.<Animator> ();
	}

	// Update is called once per frame
	private function Update() {
		var forceX = 0;
		var forceY = 0;

		var absVelX = Mathf.Abs (rigidbody2D.velocity.x);
		var absVelY = Mathf.Abs (rigidbody2D.velocity.y);

		if (absVelY < .2) {
			standing = true;
		} else {
			standing = false;
		}

		if (controller.moving.x != 0) {
			if (absVelX < maxVelocity.x) {

				forceX = standing ? speed * controller.moving.x : (speed * controller.moving.x * airSpeedMultiplier);

				transform.localScale = new Vector3 (forceX > 0 ? 1 : -1, 1, 1);
			}
			animator.SetInteger ("AnimState", 1);
		} else {
			animator.SetInteger ("AnimState", 0);
		}

		if (controller.moving.y > 0) {
						if (absVelY < maxVelocity.y)
								forceY = jetSpeed * controller.moving.y;

						animator.SetInteger ("AnimState", 2);
				} else if (absVelY > 0) {
			animator.SetInteger("AnimState", 3);
				}

		rigidbody2D.AddForce (new Vector2 (forceX, forceY));
	}
}
