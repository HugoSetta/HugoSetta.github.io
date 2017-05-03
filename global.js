var global_page = "list"; //Define se o usuário esta vendo lista ou texto
var global_nightmode = false; //Se true esta com o night mode ligado


// Troca de pagina ========================================
function checkPage(){
	if(global_page == "list"){
		$("#page_list").addClass("visible");
		$("#page_text").removeClass("visible");
		$("#bt_back").addClass("disable");
		console.log(5);
	}else{
		$("#page_list").removeClass("visible");
		$("#page_text").addClass("visible");
		$("#bt_back").removeClass("disable");
		console.log(4);
	}
	
}

function changePage(page){
	global_page = page;
	console.log(2);
	checkPage();
}


// Night mode ========================================
function nightMode(){
	global_nightmode = !global_nightmode;
	if(global_nightmode){
		$("#body").addClass("night");
		$("#bt_night").addClass("disable");
	}else{
		$("#body").removeClass("night");
		$("#bt_night").removeClass("disable");
	}
}

