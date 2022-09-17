const Event = new Vue();

Vue.directive('drag', {
	inserted: function(el) {
		let x = 0;
		let y = 0;
		let l = 0;
		let t = 0;
		let isDown = false;
		el.onmousedown = function(e) {
			x = e.clientX;
			y = e.clientY;
			l = el.parentElement.offsetLeft;
			t = el.parentElement.offsetTop;

			isDown = true;
			window.onmousemove = function(e) {

				if (isDown == false) {
					return;
				}

				let nx = e.clientX;
				let ny = e.clientY;
				let nl = nx - (x - l);
				let nt = ny - (y - t);

				el.parentElement.style.left = nl + "px";
				el.parentElement.style.top = nt + "px";
			};
			window.onmouseup = function() {
				window.onmousemove = move;
				isDown = false;
			};
		};

	}
})
Vue.directive('drag-ch', {
	inserted: function(el) {
		let x = 0;
		let y = 0;
		let l = 0;
		let t = 0;
		let isDown = false;
		el.onmousedown = function(e) {
			x = e.clientX;
			y = e.clientY;
			l = el.offsetLeft;
			t = el.offsetTop;
			isDown = true;
			window.onmousemove = function(e) {

				if (isDown == false) {
					return;
				}
				let nx = e.clientX;
				let ny = e.clientY;
				let nl = nx - (x - l);
				let nt = ny - (y - t);
				moveInstance(e,el);
				el.style.left = nl + "px";
				el.style.top = nt + "px";
			};
			window.onmouseup = function() {
				window.onmousemove = move;
				isDown = false;
			};
		};

	}
})
var move=function(e) {
	Event.$emit("mouseMove",{
		e:e
	})
};

var moveInstance=function(e,el) {
	Event.$emit("moveInstance",{
		e:e,
		el:el
	})
};
window.onmousemove = move;
