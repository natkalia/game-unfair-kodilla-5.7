function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function countWins(computerWins, playerWins) {
	document.getElementById('result').innerHTML = `Wynik: KOMPUTER ${computerWins} : UŻYTKOWNIK ${playerWins}`;
}