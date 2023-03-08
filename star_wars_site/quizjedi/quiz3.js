var pos = 0;
var numbA = 0;
var numbB = 0;
var test, question, choice, choices, chA, chB;


var questions = [
  {
      question: "You're having a drink with Greedo when you notice him reach suspiciously under the table, you...",
      a: "Wait to see what Greedo does",
      b: "Shoot first"
    },
  {
      question: "You are up for a promotion at work and really want the job. Do you...",
      a: "Wait patiently knowing everything will fall into place",
      b: "Continue working hard"
    },
  {
      question: "A bounty hunter on the run has taken a princess hostage at blaster point. You have a contingent of clone troopers at your disposal. What do you do?",
      a: "Force choke the bounty hunter.",
      b: "Surround the bounty hunter with clones, dividing their attention. When they are most distracted, grab the princess and force the bounty hunter's surrender."
    },
  {
      question: "You are tasked with building a new Jedi Temple. Where do you build it?",
      a: "A planet located along a major trade route to allow for easy travel to and from the Temple.",
      b: "A mountainous and treacherous planet where it will be easy to defend from incoming attacks."
    },
    {
      question: "What is the greatest threat to the Galaxy?",
      a: "The Sith.",
      b: "Corrupt politicians."
    },
    {
      question: "How do you view the Force?",
      a: "Balance.",
      b: "The sentient will of the Galaxy."
    }
  ];

function get(x){
  return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    if(numbA>numbB){
        return window.location.assign("http://localhost/star_wars_site/answerjedi/master5.php");
  } else {
        return window.location.assign("http://localhost/star_wars_site/answerjedi/master5.php");
    }

  } else{
      get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;

  test.innerHTML = "<h3>"+question+"</h3>";

  test.innerHTML += "<label class='round'> <input type='radio' name='choices' value='A'><span class='checkmark'></span> "+chA+"</label><br>";
  test.innerHTML += "<label class='round'> <input type='radio' name='choices' value='B'><span class='checkmark'></span> "+chB+"</label><br>";
  test.innerHTML += "<button class='button' onclick='checkAnswer()'>Submit</button>";
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