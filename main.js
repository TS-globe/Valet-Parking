canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
greencar_width=150;
greencar_height = 100;
//Give specific height and width to the car image
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225
//Set initial position for a car image.

function add() {
	imgTag = new Image();
	imgTag.onload = BG;
	imgTag.src = background_image;

	green_imgTag = new Image();
	green_imgTag.onload = BG;
	green_imgTag.src = greencar_image;
}

function BG() {
	ctx.drawImage(imgTag, 0, 0, canvas.width, canvas.height);
}

function gc() {
	ctx.drawImage(green_imgTag, greencar_x, greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		if(keyPressed == '65')
		{
			left();
			console.log("up");
		}
	
		if(keyPressed == '68')
		{
			right();
			console.log("down");
		}
		
		if(keyPressed == '83')
		{
			down();
			console.log("left");
		}
	
		if(keyPressed == '87')
		{
			up();
			console.log("right");
		}

		
		
}

function up()
{
	if (greencar_y>40)
	{
		greencar_y = greencar_y-10;
		BG();
		gc();
	}
}

function down()
{
	if (greencar_y<canvas.height-140)
	{
		greencar_y = greencar_y+10
		BG();
		gc();
	}
}

function left()
{
	if (greencar_x>0)
	{
		greencar_x = greencar_x-10
		BG();
		gc();
	}
}

function right()
{
	if(greencar_x<canvas.width-100)
	{
		greencar_x = greencar_x+10
		BG();
		gc();
	}
}
