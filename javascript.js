//Interval is per seconde
setInterval(showTime, 1000);
function showTime() {
var tijd = new Date();
var uur = tijd.getHours();
var min = tijd.getMinutes();
var sec = tijd.getSeconds();

//Zodat de getallen onder de 10 ook mooi staan
uur = uur < 10 ? "0" + uur : uur;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

//Oproepen tijd met dubbelepunten ertussen
var currentTime = uur + ":" + min + ":" + sec + " "+"UUR";

//Zodat de klok gezien wordt
document.getElementById("klok")
.innerHTML = currentTime;
}
showTime();

//Nacht functie. In de avond wordt het donker
function nachtMode() {
    var dag = new Date();
    var uur = dag.getHours();
    var moment = document.getElementById('dag');
	
//Wanneer het tussen 6 en 6 is, is het overdag
	if (uur < 18 && uur > 5) {
        moment.classList.add('overdag');
		moment.classList.remove('avond');
		moment.classList.remove('nacht');
    }
//Wanneer het tussen 6 en 12 in de avond is, is het avond
	else if (uur > 17 && uur < 24) {
        moment.classList.add('avond');
		moment.classList.remove('nacht');
		moment.classList.remove('overdag');
    }
//Wanneer het tussen 12 en 6 in de nacht is, is het nacht
	else if (uur > 0 && uur < 5) {
        moment.classList.add('nacht');
		moment.classList.remove('overdag');
		moment.classList.remove('avond');
    }
}
//Nightmode duurt 1 sec om ingeschakeld te worden
setInterval(nachtMode, 1000)
nachtMode();

//Bronnen https://www.geeksforgeeks.org/how-to-design-digital-clock-using-javascript/