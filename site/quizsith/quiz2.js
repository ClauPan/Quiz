var pos = 0;
var numbA = 0;
var numbB = 0;
var test, question, choice, choices, chA, chB;


var questions = [
  {
      question: "You learn that an insubordinate soldier is sowing seeds of distrust amongst your army. What do you do?",
      a: "Order them imprisoned and tortured endlessly.",
      b: "Skin them alive and wear their flesh when you next address your army."
    },
  {
      
      question: "Which is your favorite accessory?",
      a: "Belt",
      b: "Hat"
    },
  {
      question: "What is your preferred method of travel?",
      a: "Customized starfighter",
      b: "Stealth ship"
    },
  {
      question: "What kind of lightsaber do you like to use?",
      a: "Double-bladed",
      b: "Standard hilt"
    },
    {
      question: "Where do you live?",
      a: "At the site of your greatest battle",
      b: "In a secret lair"
    },
    {
      question: "What is the Force?",
      a: "Power",
      b: "Legacy"
    }
  ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    if(numbA>numbB){
        return window.location.assign("http://localhost/star_wars_site/answersith/master3.php");
  } else {
        return window.location.assign("http://localhost/star_wars_site/answersith/master4.php");
    }

  } else{
      get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;

  test.innerHTML = "<h3>"+question+"</h3>";

  test.innerHTML += "<label class='round'> <input type='radio' name='choices' value='A'> <span class='checkmark'></span>"+chA+"</label><br>";
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