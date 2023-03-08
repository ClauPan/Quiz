var pos = 0;
var numbA = 0;
var numbB = 0;
var test, question, choice, choices, chA, chB;


var questions = [
  {
      question: "Where would you like to call home?",
      a: "Dathomir",
      b: "Corelia"
    },
  {
      question: "You and your schemes are discovered by a Jedi! How do you respond?",
      a: "Unleash Force Lightning upon them.",
      b: "Test your lightsaber skills against theirs to prove the superiority of the Sith."
    },
  {
      question: "Which is your strongest power?",
      a: "Dark magic",
      b: "Lightsaber combat"
    },
  {
      question: "When you’re not wielding your dark side power, we might find you...",
      a: "Attending a show",
      b: "Meditating"
    },
    {
      question: "You fight for...",
      a: "Yourself",
      b: "Your family"
    },
    {
      question: "Why would you turn to the dark side?",
      a: "To gain power",
      b: "To restore order"
    }
  ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    if(numbA>numbB){
        return window.location.assign("http://localhost/star_wars_site/answersith/master1.php");
  } else {
        return window.location.assign("http://localhost/star_wars_site/answersith/master2.php");
    }

  } else{
      get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;

  test.innerHTML = "<h3>"+question+"</h3>";

  test.innerHTML += "<label class='round'> <input type='radio' name='choices' value='A'><span class='checkmark'></span> "+chA+"</label><br>";
  test.innerHTML += "<label class='round'> <input type='radio' name='choices' value='B'> <span class='checkmark'></span> "+chB+"</label><br>";
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