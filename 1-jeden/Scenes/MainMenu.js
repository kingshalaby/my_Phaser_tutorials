Scene.MainMenu = function(game) {

};

Scene.MainMenu.prototype = {

	create: function() {
		var player = this.add.sprite(100, 100, "mr_cube"); // show image and asign it into a 'player' variable
		player.inputEnabled = true; // enable input so you can use some functions 
		player.input.enableDrag(false, true); // enable drag function which allows you to drag object around on touch
	},

};
