class Agent {
	
  constructor(name){
  	this.name = name;
  	this.age = 0;
  	this.hp = 10;
  	this.title = 'child';
  	this.affinity = 0;
    this.hunger = 0;
    this.ability = 0.08;
    this.food = 10;
    this.state = 'idle';
    this.states = {
    	'idle': ()=>{ this.idle() },
    	'hunting': ()=>{ this.hunting() },
    	'dead': ()=>{ return }
    }
    
  }
  
  update(){
  
	  this.states[this.state]();
    
    this.age += 0.1;
    
    if( this.age < 10 ){
    	this.title = 'child';
    }else if( this.age < 50 ){
    	this.title = 'hunter';
    }else{
    	this.title = 'elder';
    }
    
    if( this.hunger > 10 ){
    	if( !this.eat() ){
      	this.hp -= Math.round( 0.1 * this.hunger );
      }
    }
    
    if( this.hp < 1 ){
    	this.hp = 0;
    	this.state = 'dead';
    	return;
    }
    

  }
  
  idle(){
  
  	this.hunger += 1;

		if( this.food < 8 ){
      this.state = 'hunting';
    }
    
  }
  
  eat(){
  
  	if( this.food < 1 )
  		return false;

		this.food -= 1;
    this.hunger -= 10;
    return true;
    
  }
  
  hunting(){
  
  	this.hunger += 3;
  		
  	if( Math.random() < this.ability ){
    	this.food += Math.round( Math.random() * 20);
    }
    
    if( this.food > 9 ){
  		this.state = 'idle';
  	}
    
  }
  
  feed(){
  	this.food += Math.floor( Math.random() * 6 );
  	this.affinity += 1;
  }
  
  hurt(){
  	this.hp -= 1;
  	this.affinity -= 1;
  }
  
}
