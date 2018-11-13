var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//rectangle vert de la voiture auquel on retire 2 rectangles(carrés pour le coup)
// ctx.fillStyle = "green";
// ctx.fillRect(100,100,300,100);
// ctx.clearRect(100, 100, 50, 50);
// ctx.clearRect(350, 100, 50, 50);

//ou 2 rectangles superposés
ctx.fillStyle = "green";
ctx.fillRect(100,150,300,50);
ctx.fillRect(150,100,200,50);

//roues
ctx.lineWidth = 5;
ctx.fillStyle = "grey";
ctx.strokeStyle = "white";
ctx.beginPath();
ctx.arc(125,225,25,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();
ctx.beginPath();
ctx.arc(375,225,25,0,Math.PI*2,true);
ctx.stroke();
ctx.fill();
