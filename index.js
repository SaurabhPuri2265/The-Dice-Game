function myfunc(){
	var r1=Math.floor(Math.random()*6)+1;
	var r2=Math.floor(Math.random()*6)+1;

	var diceimg="dice"+r1+".png";

	var source="images/"+diceimg;

	var image1=document.querySelectorAll("img")[0];


	image1.setAttribute("src",source);


	var diceimg2="dice"+r2+".png";

	var source2="images/"+diceimg2;

	var image2=document.querySelectorAll("img")[1];

	image2.setAttribute("src",source2);


	if(r1>r2)
		document.getElementById('R').innerHTML="Player 1 Wins !!";
	else if(r1<r2)
		document.getElementById('R').innerHTML="Player 2 Wins !!";
	else
		document.getElementById('R').innerHTML="Draw !!";
}

document.getElementById('btn').addEventListener("click", myfunc);