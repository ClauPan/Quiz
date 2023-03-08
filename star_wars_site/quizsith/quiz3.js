var pos = 0;
var numbA = 0;
var numbB = 0;
var test, question, choice, choices, chA, chB;


var questions = [
  {
      question: "What is your fighting style?",
      a: "Psychological intimidation",
      b: "Acrobatic"
    },
  {
      question: "Your master has ordered you to publicly execute a politician to intimidate a planet’s population. How do you execute them?",
      a: "Sever their appendages individually and slowly",
      b: "Light them on fire"
    },
  {
      question: "Which one of these things is most annoying?",
      a: "When the rebels blow up your Death Star",
      b: "When your apprentice turns against you"
    },
  {
      question: "What type of droid do you prefer?",
      a: "Protocol",
      b: "Astromech"
    },
    {
      question: "It is time for you to assume the mantle of Master. How do you proceed?",
      a: "Poison their food",
      b: "Arrange for your master to be assassinated by a bounty hunter"
    },
    {
      question: "You must rescue a kidnapped politician that has been useful to you from a crime syndicate. They are being held in a fortress. How do you do this?",
      a: "Organize an army and order a full frontal assault",
      b: "Extort the syndicate’s leader"
    }
    
  ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    if(numbA>numbB){
        return window.location.assign("http://localhost/star_wars_site/answersith/master5.php");
  } else {
        return window.location.assign("http://localhost/star_wars_site/answersith/master5.php");
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