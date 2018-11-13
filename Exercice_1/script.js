var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

ctx.beginPath(); // Début du chemin
ctx.moveTo(100,100); // Le tracé part du point 100,100
ctx.lineTo(100,300); // Un segment est ajouté vers 100,300
ctx.lineTo(300,300); // Un segment est ajouté vers 300,300
ctx.lineTo(300,100); // Un segment est ajouté vers 300,100
ctx.closePath(); // Fermeture du chemin
ctx.fillStyle = "lightblue"; // Définition de la couleur de remplissage
ctx.fill(); // Application du remplissage

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,0);
ctx.lineTo(300,100);
ctx.closePath();
ctx.fillStyle = "peru";
ctx.fill();

ctx.beginPath();
ctx.moveTo(120,120);
ctx.lineTo(120,160);
ctx.lineTo(160,160);
ctx.lineTo(160,120);
ctx.closePath();
ctx.fillStyle = "grey";
ctx.fill();


ctx.beginPath();
ctx.moveTo(240,120);
ctx.lineTo(240,160);
ctx.lineTo(280,160);
ctx.lineTo(280,120);
ctx.closePath();
ctx.fillStyle = "grey";
ctx.fill();

ctx.beginPath();
ctx.moveTo(180,230);
ctx.lineTo(180,300);
ctx.lineTo(220,300);
ctx.lineTo(220,230);
ctx.closePath();
ctx.fillStyle = "grey";
ctx.fill();
