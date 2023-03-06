var pos = 0;
var numbA = 0;
var numbB = 0;
var test, question, choice, choices, chA, chB;


var questions = [
  {
      question: "Choose a color.",
      a: "Green",
      b: "Purple"
    },
  {
      question: "What is you greatest strenght?",
      a: "Humility",
      b: "Patience"
    },
  {
      question: "What is your favourite accessory?",
      a: "A crown",
      b: "Combat boots"
    },
  {
      question: "You're one with the Force. How do you wield this power?",
      a: "Helping those who can't help themselves",
      b: "Teach others its power"
    },
    {
      question: "You've been betrayed. How do you react?",
        a:"Walk away",
      b: "Plot revenge"
    },
    {
      question: "People hate it when you...",
        a:"Give them orders",
      b: "Get snippy"
    }
    
  ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    if(numbA>numbB){
        return window.location.assign("http://localhost/star_wars_site/answerjedi/master1.php");
  } else {
        return window.location.assign("http://localhost/star_wars_site/answerjedi/master2.php");
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