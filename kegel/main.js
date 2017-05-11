//main.js

var kg = {
	'exers':{
		//Time on x Time off (secs.)
		'pulse':[0.1,0.6],
		'short':[1,1],
		'medium':[3,1],
		'long':[7,2]
	},
	'moods':{
		//Total time duration (mins.)
		'Minimal':2,
		'Enthusiastic':5,
		'Focused':10,
		'Maniac':30
	}
	//Each exercise takes 20 secs. repeating before a new flush.
};

var mood = '';

function createMoodSelect(){
	var r = '';
	var template = '<span class="mood-item" onclick="setMood(\'YYY\')">XXX</span>';
	for(key in kg['moods']){
		r += template.replace("XXX",key).replace("YYY",key);
	}
	document.getElementById('setmood-list').innerHTML = r;
}

function setMood(m){
	document.getElementById('setmood').style.display = 'none';
	document.getElementById('exer').style.display = 'block';
	startExer();
}

function trocaExer(last){
	var max = 4;
	
	//1 - Randomiza uma classe
	var tipo = Math.floor(Math.random()*max);
	
	while(tipo == last){
		tipo = Math.floor(Math.random()*max);
	}
	
	
	switch(tipo){
		case 0: document.getElementById('quad').className = 'exer-pulse';
		break;
		
		case 1: document.getElementById('quad').className = 'exer-short';
		break;
		
		case 2: document.getElementById('quad').className = 'exer-medium';
		break;
		
		case 3: document.getElementById('quad').className = 'exer-long';
		break;
	}
	
	
	
	//2 - Em 20 segundos, se repete
	var t = setTimeout('trocaExer('+tipo+');',20000);
}

function startExer(){
	trocaExer(-1);
}

function start(){
	createMoodSelect();
}
start();


