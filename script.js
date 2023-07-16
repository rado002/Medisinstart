document.addEventListener('DOMContentLoaded', function() {
    var answer1Select = document.getElementById('answer1');
    var additionalQuestionContainer1 = document.getElementById
      ('additionalQuestionContainer1');
  
  
    var answer2Select = document.getElementById('answer2');
    var additionalQuestionContainer2 = document.getElementById('additionalQuestionContainer2');
  
  
    var answer3Select = document.getElementById('answer3');
    var additionalQuestionContainer3 = document.getElementById('additionalQuestionContainer3');
  
  
    var answer4Select = document.getElementById('answer4');
    var additionalQuestionContainer4 = document.getElementById('additionalQuestionContainer4');
  
    var answer5Select = document.getElementById('answer5');
    var additionalQuestionContainer5 = document.getElementById('additionalQuestionContainer5');
  
    var answer6Select = document.getElementById('answer6');
    var additionalQuestionContainer6 = document.getElementById('additionalQuestionContainer6');
  
  
    var answer7Select = document.getElementById('answer7');
    var additionalQuestionContainer7 = document.getElementById('additionalQuestionContainer7');
  
  
  
  
  
    answer1Select.addEventListener('change', function() {
      if (answer1Select.value === 'Nei') {
        additionalQuestionContainer1.style.display = 'block';
      } else {
        additionalQuestionContainer1.style.display = 'none';
      }
    });
  
  
    answer2Select.addEventListener('change', function() {
      if (answer2Select.value === 'Kommentar') {
        additionalQuestionContainer2.style.display = 'block';
      } else {
        additionalQuestionContainer2.style.display = 'none';
      }
    });
  
  
    answer3Select.addEventListener('change', function() {
      if (answer3Select.value === 'Endret tidspunkt') {
        additionalQuestionContainer3.style.display = 'block';
      } else {
        additionalQuestionContainer3.style.display = 'none';
      }
    });
  
  
    answer4Select.addEventListener('change', function() {
      if (answer4Select.value === 'Ikke nok') {
        additionalQuestionContainer4.style.display = 'block';
      } else {
        additionalQuestionContainer4.style.display = 'none';
      }
    });
  
  
    answer5Select.addEventListener('change', function() {
        if (answer5Select.value === 'Ja') {
          additionalQuestionContainer5.style.display = 'block';
        } else {
          additionalQuestionContainer5.style.display = 'none';
        }
      });
  
  
    answer6Select.addEventListener('change', function() {
      if (answer6Select.value === 'Ja') {
        additionalQuestionContainer6.style.display = 'block';
      } else {
        additionalQuestionContainer6.style.display = 'none';
      }
    });
  
    answer7Select.addEventListener('change', function() {
      if (answer7Select.value === 'Ja') {
        additionalQuestionContainer7.style.display = 'block';
      } else {
        additionalQuestionContainer7.style.display = 'none';
      }
    });
  
  
  
  
  
    var nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', function() {
      var answer1 = answer1Select.value;
      var additionalQuestion1 = document.getElementById('additionalQuestion1').value;
      var answer2 = answer2Select.value;
      var additionalQuestion2 = document.getElementById('additionalQuestion2').value;
      var answer3 = answer3Select.value;
      var additionalQuestion3 = document.getElementById('additionalQuestion3').value;
      var answer4 = document.getElementById('answer4').value;
      var answer5 = document.getElementById('answer5').value;
      var answer6 = answer6Select.value;
      var additionalQuestion6 = document.getElementById('additionalQuestion6').value;
      var answer7 = answer7Select.value;
      var additionalQuestion7 = document.getElementById('additionalQuestion7').value;
  
  
  
      // Process the survey data
      console.log("Have you had the chance to start taking your new medicine yet?", answer1);
      if (answer1 === 'No') {
        console.log("Additional question 1 response:", additionalQuestion1);
      }
      console.log("How are you getting on with it?", answer2);
      if (answer2 === 'Not good') {
        console.log("Additional question 2 response:", additionalQuestion2);
      }
      console.log("Are you having any problems with your new medicine, or concerns about taking it?", answer3);
      if (answer3 === 'Yes') {
        console.log("Additional question 3 response:", additionalQuestion3);
      }
      console.log("Do you think it is working? (Prompt: is this different from what you were expecting?)", answer4);
      console.log("Do you think you are getting any side effects or unexpected effects?", answer5);
      console.log("People often miss taking doses of their medicines, for a wide range of reasons. Have you missed any doses of your new medicine, or changed when you take it?", answer6);
      if (answer6 === 'Yes') {
        console.log("When did you last miss a dose?", additionalQuestion6);
      }
      console.log("Do you have anything else you would like to know about your new medicine or is there anything you would like me to go over again?", answer7);
      if (answer7 === 'Yes') {
        console.log("Additional question 7 response:", additionalQuestion7);
      }
  
      // Clear the form or move to the next step
    });
  });