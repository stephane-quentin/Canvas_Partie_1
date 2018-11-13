var c = document.getElementById("mon_canvas");
var ctx = c.getContext("2d");

//facade
ctx.fillStyle = "lightblue";
ctx.fillRect(100,100,200,200); // pour faire un rectangle fillRect( point de départ x, y, largeur, hauteur)

//fenetres et porte
ctx.fillStyle = "grey";
ctx.fillRect(120,120,40,40);
ctx.fillRect(240,120,40,40);
ctx.fillRect(180,230,40,70);

//toit arrondi
ctx.beginPath();
ctx.arc(200,100,100,0,Math.PI,true); //arc(centre x, y, rayon, angle (utile pour demi cercle), Math.PI demi-cercle *2 cercle entier, sens horaire du cercle(importe peu pour un cercle entier))
ctx.fillStyle = "peru";
ctx.fill();
