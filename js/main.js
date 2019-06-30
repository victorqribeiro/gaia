
let i = 0, d = 3;

const m = new Agent('Oliver');
m.isWalking = false;

const spritesheet = new Image();

spritesheet.src = 'img/char.png';

spritesheet.onload = function(){
  update();
}

function draw(y,x,img,nx,ny){
	xsize = img.width/nx;
  ysize = img.height/ny;
	c.drawImage(img,x*xsize,y*ysize,xsize,ysize,w/2-32,h/2-46,64,92);
}

document.getElementById("feed").addEventListener("click", ()=>{m.feed()} );
document.getElementById("hurt").addEventListener("click", ()=>{m.hurt()} );

function status(m){
	document.getElementById("name").innerHTML = m.name+", The "+m.title;
	document.getElementById("age").innerHTML = Math.floor(m.age);
	document.getElementById("hp").innerHTML = m.hp;
	document.getElementById("affinity").innerHTML = m.affinity;
	document.getElementById("food").innerHTML = m.food;
	document.getElementById("hunger").innerHTML = m.hunger;
	document.getElementById("state").innerHTML = m.state;
}

function update(){
	c.clearRect(0,0,w,h);
	m.update();
	status(m);
	if( m.state == 'hunting' ){
		m.isWalking = true;
	}else if(m.state == 'idle' ){
		m.isWalking = false;
		i = 0;
		d = 0;
	}else{
		draw(4,0,spritesheet,4,5);
		return;
	}
	draw(d,i,spritesheet,4,5);
  setTimeout(update, 1000/8);
  if(m.isWalking){
  	i = (i + 1) % 4;
  	if( !i )
  		d = Math.floor( Math.random() * 4);
  }
}

const canvas = document.getElementById('canvas');
canvas.width = w = 200;
canvas.height = h = 200;
const c = canvas.getContext('2d');


