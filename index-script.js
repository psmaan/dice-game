    let diceValue1 = Math.floor((Math.random() * 6) + 1);
    let diceValue2 = Math.floor((Math.random() * 6) + 1);
    console.log(diceValue1);
    console.log(diceValue2);

    if (diceValue1 == 1) {
        document.getElementById("dice1").src = "dice1.png";
      } else if (diceValue1 == 2) {
        document.getElementById("dice1").src = "dice2.svg";
      } else if (diceValue1 == 3) {
        document.getElementById("dice1").src = "dice3.png";
      } else if (diceValue1 == 4) {
        document.getElementById("dice1").src = "dice4.svg";
      } else if (diceValue1 == 5) {
        document.getElementById("dice1").src = "dice5.svg";
      } else {
        document.getElementById("dice1").src = "dice6.webp";
      }

    if (diceValue2 == 1) {
        document.getElementById("dice2").setAttribute("src", "dice1.png");
      } else if (diceValue2 == 2) {
        document.getElementById("dice2").setAttribute("src", "dice2.svg");
      } else if (diceValue2 == 3) {
        document.getElementById("dice2").setAttribute("src", "dice3.png");
      } else if (diceValue2 == 4) {
        document.getElementById("dice2").setAttribute("src", "dice4.svg");
      } else if (diceValue2 == 5) {
        document.getElementById("dice2").setAttribute("src", "dice5.svg");
      } else {
        document.getElementById("dice2").setAttribute("src", "dice6.webp");
      }

    if (diceValue1 > diceValue2) {
        document.getElementById("heading").innerHTML = "Player 1 Wins!";
    } else if (diceValue2 > diceValue1) {
        document.getElementById("heading").innerHTML = "Player 2 Wins!";
    } else {
        document.getElementById("heading").innerHTML = "It's a draw";
    }