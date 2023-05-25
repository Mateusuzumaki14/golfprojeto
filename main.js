var canvas=new fabric.Canvas("myCanvas");
// Crie uma variável canvas

//Defina as posições iniciais da bola e do buraco.
ball_X=0
 ball_Y=0
holeY=400
holeX=1000

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		holeobj=Img;
		holeobj.scaleToWidth(50)
		holeobj.scaleToHeight(50)
		holeobj.set({
			top:holeY,
			left:holeX
		});
		canvas.add(holeobj);
	})
	  
	newImage();
}

function newImage(){
	fabric.Image.fromURL("ball.png",function(img){
		ballobj=img;
		ballobj.scaleToWidth(50)
		ballobj.scaleToHeight(50)
		ballobj.set({
			top:ball_Y ,
			left:ball_X
		});
		canvas.add(ballobj);
})
}
window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_X==holeX)&&(ball_Y==holeY)){
		canvas.remove("ball.png");
		document.getElementById("hd3").innerHTML="voce atingiu seu objetivo";
		document.getElementById("myCanvas").style.borderColor="red"
		
	}
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	
	else{
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
	}
	
	function up()
	{
		if(ball_Y>=0){
			ball_Y=ball_Y-block_image_height
			canvas.remove(ballobj)
			newImage()
		}
	}

	function down()
	{
		if(ball_Y<=450){
			ball_Y=ball_Y+block_image_height
			canvas.remove(ballobj)
			newImage()
		}
	}

	function left()
	{
		if(ball_X >5)
		{
			ball_X=ball_X-block_image_width
			canvas.remove(ballobj)
			newImage()
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			ball_X=ball_X+block_image_width
			canvas.remove(ballobj)
			newImage()
		}
	}
	
}

