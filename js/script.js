let playerWins = 0;
let computerWins = 0;

function playGame (btnValue) {

  clearMessages();

  const playerInput = btnValue;

  function getMove (arg) {
    if (arg == 1) {
      return 'kamień';
    } else if (arg == 2) {
      return 'papier';
    } else if (arg == 3) {
      return 'nożyce';
    } else {
      return 'nieznany ruch';
    }
  }
  
  // player move

  const playerMove = getMove(playerInput);
  printMessage('UŻYTKOWNIK mówi: ' + playerMove);

  // computer move

  function getComputerMove(x) {
    let randomNumber = Math.floor(Math.random() * 100) + 1; //1-100
    console.log(x, randomNumber);
    
      if ( (x == 1) && (randomNumber <= 25) ) {
        return 'papier'; // computer wins
      } else if ( (x == 1) && (randomNumber > 25) && ( randomNumber <= 25) ) {
        return 'kamień'; // draw
      } else if ( (x == 1) && (randomNumber > 25) && (randomNumber <= 100) ) {
        return 'nożyce'; // user wins

      } else if ( (x == 2) && (randomNumber <= 25) ) {
        return 'nożyce'; // computer wins
      } else if ( (x == 2) && (randomNumber > 25) && ( randomNumber <= 25) ) {
        return 'papier'; // draw
      } else if ( (x == 2) && (randomNumber > 25) && ( randomNumber <= 100) ) {
        return 'kamień'; // user wins

      } else if ( (x == 3) && (randomNumber <= 25) ) {
        return 'kamień'; // computer wins
      } else if ( (x == 3) && (randomNumber > 25) && ( randomNumber <= 25) ) {
        return 'nożyce'; // draw
      } else if ( (x == 3) && (randomNumber > 25) && ( randomNumber <= 100) ) {
        return 'papier'; // user wins
      }
  }

  let computerMove = getComputerMove(playerInput);

  console.log(playerMove, computerMove);
  
  printMessage('KOMPUTER mówi: ' + computerMove);

  // show result

  function displayResult (comp, user) {
    if ( (comp == 'kamień' && user == 'papier') || (comp == 'papier' && user == 'nożyce') || (comp == 'nożyce' && user == 'kamień') ) {
      playerWins++;
      console.log('Wygrywa użytkownik!');
      return 'Wygrywa użytkownik!';
    } else if ( (comp == 'kamień' && user == 'nożyce') || (comp == 'papier' && user == 'kamień') || (comp == 'nożyce' && user == 'papier') ) {
      computerWins++;
      console.log('Wygrywa komputer!');
      return 'Wygrywa komputer!';
    } else if (comp == user) {
      // playerWins++;
      // computerWins++;
      console.log('Remis!');
      return 'Remis!';
    } else {
      return 'Powtórz rundę, podałeś nieznany ruch!';
    }
  }

  printMessage(displayResult(computerMove, playerMove));

  //show counter 

  countWins(computerWins, playerWins);
}

// event listeners and handlers

document.getElementById('rock').addEventListener('click', function() {
  playGame(1);
});

document.getElementById('paper').addEventListener('click', function() {
  playGame(2);
});

document.getElementById('scissors').addEventListener('click', function() {
  playGame(3);
});

// testing game for probability

function testGame() {
  for (let i = 0; i <= 2000; i++) {
    playGame(1);
  }
  for (let i = 0; i <= 2000; i++) {
    playGame(2);
  }
  for (let i = 0; i <= 2000; i++) {
    playGame(3);
  }
}

document.getElementById('test').addEventListener('click', function() {
  console.log('Testuję....');
  testGame();
  console.log(computerWins, playerWins);
  console.log(Math.round((computerWins/(computerWins + playerWins)) * 100) + '%'); // should be ca. 25% of total rounds
  console.log('Koniec testu!');
});
