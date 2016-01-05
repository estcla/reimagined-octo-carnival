var d, h, m, s, color, time;
function displayTime() {
	d = new Date();
	h = d.getHours();
	m = d.getMinutes();
	s = d.getSeconds();

	if(h <= 9) h = '0'+h;
	if(m <= 9) m = '0'+m;
	if(s <= 9) s = '0'+s;

  hour = ((h + 11) % 12 + 1);
  time = hour+":"+m+":"+s;
	color = "rgb("+h*4+"%, "+m*2+"%, "+s*2+"%)";

	document.body.style.background = color;
	document.getElementById("hex").innerHTML = time;
	setTimeout(displayTime, 1000);
}

displayTime();
