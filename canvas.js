var c = document.getElementById("mon_canvas");
  var ctx = c.getContext("2d");

//lune

    //dégradé
    var radial = ctx.createRadialGradient (130,130,40,130,130,100);
    radial.addColorStop(0,'#ffff33');
    radial.addColorStop(0.25,'#e6e6ff');



ctx.beginPath(); 
ctx.arc(130, 130, 50, 0, Math.PI * 2); 
ctx.fillStyle = radial;
ctx.strokeStyle = "#997a00"; 
ctx.lineWidth = 1;
ctx.fill(); 
ctx.stroke();


//coque du bateau

ctx.beginPath();
ctx.moveTo(50,250);
ctx.lineTo(100,300);
ctx.lineTo(250,300);
ctx.lineTo(300,250);
ctx.lineTo(50,251);

ctx.fillStyle = "peru";
ctx.strokeStyle = "sienna"; 
ctx.lineWidth = 4;         
ctx.fill();            
ctx.stroke(); 


//mat 1

ctx.beginPath();
ctx.moveTo(100,250);
ctx.lineTo(100,150);
ctx.lineWidth = 10;
ctx.fillStyle = "peru";
ctx.strokeStyle = "sienna";
ctx.stroke();

//mat 2

ctx.beginPath();
ctx.moveTo(175,250);
ctx.lineTo(175,90);
ctx.lineWidth = 10;
ctx.fillStyle = "peru";
ctx.strokeStyle = "sienna";
ctx.stroke();

//mat 3

ctx.beginPath();
ctx.moveTo(250,250);
ctx.lineTo(250,150);
ctx.lineWidth = 10;
ctx.fillStyle = "peru";
ctx.strokeStyle = "sienna";
ctx.stroke();


//voile 1

ctx.beginPath();
ctx.moveTo(105,220);   
ctx.lineTo(160,220);
ctx.lineTo(105,165);
 

ctx.closePath();      
ctx.fillStyle = "#000000";
ctx.strokeStyle = "sienna"; 
ctx.lineWidth = 2;
ctx.fill(); 
ctx.stroke();



//voile 3

ctx.beginPath();
ctx.moveTo(255,220);   
ctx.lineTo(330,220);
ctx.lineTo(255,165);
 

ctx.closePath();      
ctx.fillStyle = "#ED2939";
ctx.strokeStyle = "sienna"; 
ctx.lineWidth = 2;
ctx.fill(); 
ctx.stroke();

//voile 2

ctx.beginPath();
ctx.moveTo(180,100);   
ctx.lineTo(300,230);  
ctx.lineTo(180,230);  

ctx.closePath();      
ctx.fillStyle = "#FAE042";
ctx.strokeStyle = "sienna"; 
ctx.lineWidth = 2;
ctx.fill(); 
ctx.stroke();




//maison

//carré principal
ctx.beginPath(); 
ctx.strokeStyle = "black";
ctx.strokeRect(400, 350, 100, 80);
ctx.fill(); 
ctx.stroke();

//toiture
ctx.beginPath();
ctx.moveTo(400,350);
ctx.lineTo(450,300);
ctx.lineTo(500,350);
ctx.lineTo(400,350);
ctx.strokeStyle = "black"; 
ctx.stroke();

//fenetre gauche
ctx.beginPath(); 
ctx.strokeStyle = "black";
ctx.strokeRect(410, 370, 20, 20);
ctx.fill(); 
ctx.stroke();

//fenetre droit
ctx.beginPath(); 
ctx.strokeStyle = "black";
ctx.strokeRect(470, 370, 20, 20);
ctx.fill(); 
ctx.stroke();

//fenetre centre
ctx.beginPath(); 
ctx.strokeStyle = "black";
ctx.strokeRect(440, 370, 20, 20);
ctx.fill(); 
ctx.stroke();


//porte
ctx.beginPath(); 
ctx.strokeStyle = "black";
ctx.strokeRect(410, 410, 18, 20);
ctx.fill(); 
ctx.stroke();

//porte garage
ctx.beginPath(); 
ctx.strokeStyle = "black";
ctx.strokeRect(450, 410, 40, 20);
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450,415);   
ctx.lineTo(490,415);  
ctx.closePath(); 

ctx.strokeStyle = "black"; 
ctx.lineWidth = 2;
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450,420);   
ctx.lineTo(490,420);  
ctx.closePath();  

ctx.strokeStyle = "black"; 
ctx.lineWidth = 2;
ctx.fill(); 
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450,425);   
ctx.lineTo(490,425);  
ctx.closePath();  

ctx.strokeStyle = "black"; 
ctx.lineWidth = 2;
ctx.fill(); 
ctx.stroke();


//logo android

//tete

ctx.fillStyle="#a5ca39";
      ctx.beginPath();
      ctx.arc(500,145,90,0, Math.PI*1, true);
      ctx.closePath()
      ctx.fill();

ctx.fillStyle="#FFFFFF";
      ctx.beginPath();
      ctx.arc(450,110,9,0, Math.PI*2, true);
      ctx.closePath()
      ctx.fill();
      
      ctx.fillStyle="#FFFFFF";
      ctx.beginPath();
      ctx.arc(550,110,9,0, Math.PI*2, true);
      ctx.closePath()
      ctx.fill();

ctx.beginPath();
      ctx.lineCap = "round";
      ctx.moveTo(500,110);
      ctx.lineTo(450, 50);
      ctx.strokeStyle = "#a5ca39";
      ctx.lineWidth = 8;
      ctx.stroke();
      
      ctx.beginPath();
      ctx.lineCap = "round";
      ctx.moveTo(500,110);
      ctx.lineTo(550, 50);
      ctx.strokeStyle = "#a5ca39";
      ctx.lineWidth = 8;
      ctx.stroke();


//corps

ctx.beginPath();
ctx.strokeStyle = "#a5ca39";
ctx.moveTo(420,230);
ctx.lineTo(580,170);
ctx.lineWidth = 25;
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#a5ca39";
ctx.moveTo(420,170);
ctx.lineTo(580,230);
ctx.lineWidth = 25;
ctx.stroke();

ctx.font = "15px Calibri,Geneva,Arial";
ctx.fillStyle = "white";
ctx.fillText("ROOTED", 468, 204);

ctx.beginPath(); // Le cercle extérieur
ctx.arc(500, 155, 130, 0, Math.PI * 2);
ctx.lineWidth = 10;
ctx.stroke();











