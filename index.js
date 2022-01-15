function changeColor() {
	let red = document.getElementById('rangeRed').value;
	let green = document.getElementById('rangeGreen').value;
	let blue = document.getElementById('rangeBlue').value;
	let alphaValue = document.getElementById('rangeAlpha').value;
	let color = 'rgba(' + red + ',' + green + ',' + blue + ',' + alphaValue + ')';
    document.getElementById('colorOutput').innerHTML = color;
  document.getElementById('redValue').innerHTML = red;
    document.getElementById('greenValue').innerHTML = green;
    document.getElementById('blueValue').innerHTML = blue;
    document.getElementById('alphaV').innerHTML = alphaValue;
  document.querySelector('.box-3').style.backgroundColor = color;
  document.querySelector('a').style.color = color;


}

document.getElementById('rangeRed').addEventListener('change',changeColor);
document.getElementById('rangeGreen').addEventListener('change',changeColor);
document.getElementById('rangeBlue').addEventListener('change',changeColor);
document.getElementById('rangeAlpha').addEventListener('change',changeColor);