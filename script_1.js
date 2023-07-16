document.addEventListener('DOMContentLoaded', function() {
    var answer1Select = document.getElementById('answer1');
    var additionalQuestionContainer1 = document.getElementById
      ('additionalQuestionContainer1');
  
  
    var answer2Select = document.getElementById('answer2');
    var additionalQuestionContainer2 = document.getElementById('additionalQuestionContainer2');
  

    var answer6Select = document.getElementById('answer6');
    var additionalQuestionContainer6 = document.getElementById('additionalQuestionContainer6');






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
    
    
      answer6Select.addEventListener('change', function() {
        if (answer6Select.value === 'Ja') {
          additionalQuestionContainer6.style.display = 'block';
        } else {
          additionalQuestionContainer6.style.display = 'none';
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


    });
});