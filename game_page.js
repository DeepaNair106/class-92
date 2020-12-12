player_name_1 = localStorage.getItem("player1_name");
player_name_2 = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player_name_1 + " :";
document.getElementById("player2_name").innerHTML = player_name_2 + " :";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn - " + player_name_1;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player_name_2;

function send() {

    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    secondLetter = word.charAt(1);

    middlePosition = Math.floor(word.length / 2);

    middleLetter = word.charAt(middlePosition);

    lastLetter = word.charAt(word.length - 1);

    removeCharAt1 = word.replace(secondLetter, "_");
    removeCharAt2 = removeCharAt1.replace(middleLetter, "_");
    removeCharAt3 = removeCharAt2.replace(lastLetter, "_");

    question = "<h4 id= 'word_display'> Q. " + removeCharAt3 + "</h4>";
    answer = " <br> Answer : <input type = 'text' id= 'answer'>";
    button = " <br><br> <button class = 'btn btn-warning' onclick='check()'>Check</button>";
    row = question + answer + button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check() {

    get_answer = document.getElementById("answer").value;
    answer = get_answer.toLowerCase();

    if (answer == word) {

        if (answer_turn == "player1") {

            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;


        } else {

            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;

        }

    }

    if (question_turn == "player1") {

        question_turn = "player2"
        document.getElementById("question_turn").innerHTML = "Question Turn : " + player_name_2;

    } else {

        question_turn == "player1"
        document.getElementById("question_turn").innerHTML = "Question Turn : " + player_name_1;


    }

    if (answer_turn == "player1"){

        answer_turn == "player2"
        document.getElementById("answer_turn").innerHTML = "Answer Turn : " + player_name_2;

    }
    else{

        answer_turn == "player1"
        document.getElementById("answer_turn").innerHTML = "Answer Turn : " + player_name_1;

    }

    document.getElementById("output").innerHTML = "";

}