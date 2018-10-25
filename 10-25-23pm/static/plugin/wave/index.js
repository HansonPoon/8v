function Wave(boxId) {
	var container = document.getElementById(boxId);
	if (!container) {
		console.log('BOX ID ERROR');
		return;
	}
	var boxW = container.clientWidth;
	var boxH = container.clientHeight;

	var SEPARATION = 120,
		AMOUNTX = 40,
		AMOUNTY = 40;

	var camera, scene, renderer;

	var particles,
		particle,
		count = 0;

	var mouseX = 300,
		mouseY = -300;

	var windowHalfX = boxW / 2;
	var windowHalfY = boxH / 2;

	var radio = boxW / boxH;

	var requestAnimationFrame =
		window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;

	init();
	animate();

	function init() {
		camera = new THREE.PerspectiveCamera(75, boxW / boxH, 1, 10000);
		camera.position.z = 1000;

		scene = new THREE.Scene();

		particles = new Array();

		var PI2 = Math.PI * 2;
		var material = new THREE.ParticleCanvasMaterial({
			color: 0xffffff,
			program: function(context) {
				context.beginPath();
				context.arc(0, 0, 1, 0, PI2, true);
				context.fill();
			}
		});

		var i = 0;

		for (var ix = 0; ix < AMOUNTX; ix++) {
			for (var iy = 0; iy < AMOUNTY; iy++) {
				particle = particles[i++] = new THREE.Particle(material);
				particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
				scene.add(particle);
			}
		}

		renderer = new THREE.CanvasRenderer();
		renderer.setSize(boxW, boxH);
		container.appendChild(renderer.domElement);

		// container.addEventListener('mousemove', onDocumentMouseMove, false);
		// container.addEventListener('touchstart', onDocumentTouchStart, false);
		// container.addEventListener('touchmove', onDocumentTouchMove, false);

		window.addEventListener('resize', onWindowResize, false);
	}

	function onWindowResize() {
		boxW = container.clientWidth;
		boxH = container.clientHeight;
		windowHalfX = boxW / 2;
		windowHalfY = boxH / 2;

		camera.aspect = boxW / boxH;
		camera.updateProjectionMatrix();

		renderer.setSize(boxW, boxH);
	}

	// function onDocumentMouseMove(event) {
	// 	mouseX = event.clientX - windowHalfX;
	// 	mouseY = event.clientY - windowHalfY;
	// }

	// function onDocumentTouchStart(event) {
	// 	if (event.touches.length === 1) {
	// 		event.preventDefault();

	// 		mouseX = event.touches[0].pageX - windowHalfX;
	// 		mouseY = event.touches[0].pageY - windowHalfY;
	// 	}
	// }

	// function onDocumentTouchMove(event) {
	// 	if (event.touches.length === 1) {
	// 		event.preventDefault();

	// 		mouseX = event.touches[0].pageX - windowHalfX;
	// 		mouseY = event.touches[0].pageY - windowHalfY;
	// 	}
	// }

	var animateId = 0;
	function animate() {
		cancelAnimationFrame(animateId);
		animateId = requestAnimationFrame(animate);
		render();
	}

	function render() {
		camera.position.x += (mouseX - camera.position.x) * 0.05;
		camera.position.y += (-mouseY - camera.position.y) * 0.05;
		camera.lookAt(scene.position);

		var i = 0;

		for (var ix = 0; ix < AMOUNTX; ix++) {
			for (var iy = 0; iy < AMOUNTY; iy++) {
				particle = particles[i++];
				particle.position.y =
					Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
				particle.scale.x = particle.scale.y =
					(Math.sin((ix + count) * 0.3) + 1) * 2 +
					(Math.sin((iy + count) * 0.5) + 1) * 2;
			}
		}

		renderer.render(scene, camera);

		count += 0.1;
	}
}