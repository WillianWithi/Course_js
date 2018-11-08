function acender()
{
	var src = document.getElementById("img").getAttribute('src');
				
	if(src == "img/lampada-on.jpg")
		document.getElementById("img").src = 'img/lampada.jpg';
	else
		document.getElementById("img").src = 'img/lampada-on.jpg';
}
