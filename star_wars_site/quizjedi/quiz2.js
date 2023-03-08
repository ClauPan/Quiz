var pos = 0;
var numbA = 0;
var numbB = 0;
var test, question, choice, choices, chA, chB;


var questions = [
{
      question: "If you weren't a Jedi, you would dedicate your life to...",
        a:"A cause",
      b: "Family"
    },
  {
      question: "You find a wallet on the sidewalk filled with cash and the owner's driver's license. What do you do?",
      a: "Send the wallet back to his owner",
      b: "Leave the wallet where I found it"
    },
  {
      question: "Choose a lightsaber color:",
      a: "Orange",
      b: "Blue"
    },
  {
      question: "A cashier accidentally gives you $10 extra in change. What do you do?",
      a: "I don't say anything",
      b: "Tell them they were incorrect"
    },
    {
      question: "How do you handle road rage?",
      a: "Take deep breaths",
      b: "Scream"
    },
    {
      question: "Pick a word:",
      a: "Peace",
      b: "Wisdom"
    }
  ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    if(numbA>numbB){
        return window.location.assign("http://localhost/star_wars_site/answerjedi/master3.php");
  } else {
        return window.location.assign("http://localhost/star_wars_site/answerjedi/master4.php");
    }

  } else{
      get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;

  test.innerHTML = "<h3>"+question+"</h3>";

  test.innerHTML += "<label class='round'> <input type='radio' name='choices' value='A'><span class='checkmark'></span> "+chA+"</label><br>";
  test.innerHTML += "<label class='round'> <input type='radio' name='choices' value='B'><span class='checkmark'></span> "+chB+"</label><br>";
  test.innerHTML += "<button class='button'onclick='checkAnswer()'>Submit</button>";
  }
  
}


function checkAnswer(){

  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }

  if(choice == 'A'){

    numbA++;
  } else if( choice == 'B'){
      numbB++;
  }

  pos++;

  renderQuestion();
}

window.addEventListener("load", renderQuestion);