var trivGame = [
  {q1: 'Has Italy won a world cup?', Options: ['true', ' false'], Answer: true},
  {q2: 'All bugs have 5 legs.', Options: ['true', 'false'] , Answer: false},
  {q3: '4 + 5 = 8', Options: ['true', 'false'] , Answer: false},
  {q4: 'Humans require water.', Options: ['true', 'false'] , Answer: true},
  {q5: 'Milk comes from cows.', Options: ['true', 'false'] , Answer: true},
//  {q6: '9 - 3 = 6', Options: ['true', 'false'] , Answer: true},
// {q7: 'Rocks are soft objects.', Options: ['true', 'false'] , Answer: false},
//  {q8: 'Italy is candy.', Options: ['true', 'false'] , Answer: false},
//  {q9: '2 * 2 = 4', Options: ['true', 'false'] , Answer: true},
//  {q10: 'Cars can talk.', Options: ['true', 'false'] , Answer: false}
];
// Page loads when refreshed
$(document).ready(function() {

var right = 0;
var wrong = 0;
var timer = 30;

$('.panel-body').hide();
// $('.ans2').hide();
$('.play-again').hide();

$('.start').on('click', run);
  
  function run(){
      counter = setInterval(increment, 1000);
      $('.panel-body').show();
      // $('.ans2').show();
      $('.start').hide("slow");

      $('.quest1').html(trivGame[0].q1);
        $('.ans1').html(trivGame[0].Options[0]);
        $('.ans2').html(trivGame[0].Options[1]);
          $('#tru1').on('click', function() {
            right++;
            $('.right').html('<h4>' + 'Right: ' + right + '</h4>');
            $('#first').hide();
          });
          $('#fal1').on('click', function() {
            wrong++;
            $('.wrong').html('<h4>' + 'Wrong: ' + wrong + '</h4>');
            $('#first').hide();
          });

      $('.quest2').html(trivGame[1].q2);
        $('.ans1').html(trivGame[1].Options[0]);
        $('.ans2').html(trivGame[1].Options[1]);
          $('#tru2').on('click', function() {
            wrong++;
            $('.wrong').html('<h4>' + 'Wrong: ' + wrong + '</h4>');
            $('#second').hide();
          });
          $('#fal2').on('click', function() {
            right++;
            $('.right').html('<h4>' + 'Right: ' + right + '</h4>');
            $('#second').hide();
          });

      $('.quest3').html(trivGame[2].q3);
        $('.ans1').html(trivGame[2].Options[0]);
        $('.ans2').html(trivGame[2].Options[1]);
          $('#tru3').on('click', function() {
            wrong++;
            $('.wrong').html('<h4>' + 'Wrong: ' + wrong + '</h4>');
            $('#third').hide();
          });
          $('#fal3').on('click', function() {
            right++;
            $('.right').html('<h4>' + 'Right: ' + right + '</h4>');
            $('#third').hide();
          });

      $('.quest4').html(trivGame[3].q4);
        $('.ans1').html(trivGame[3].Options[0]);
        $('.ans2').html(trivGame[3].Options[1]);
          $('#tru4').on('click', function() {
            right++;
            $('.right').html('<h4>' + 'Right: ' + right + '</h4>');
            $('#fourth').hide();
          });
          $('#fal4').on('click', function() {
            wrong++;
            $('.wrong').html('<h4>' + 'Wrong: ' + wrong + '</h4>');
            $('#fourth').hide();
          }); 

      $('.quest5').html(trivGame[4].q5);
        $('.ans1').html(trivGame[4].Options[0]);
        $('.ans2').html(trivGame[4].Options[1]);
          $('#tru5').on('click', function() {
            right++;
            $('.right').html('<h4>' + 'Right: ' + right + '</h4>');
            $('#fifth').hide();
          });
          $('#fal5').on('click', function() {
            wrong++;
            $('.wrong').html('<h4>' + 'Wrong: ' + wrong + '</h4>');
            $('#fifth').hide();
          });

//      $('.quest6').html(trivGame[5].q6);
          $('.ans1').html(trivGame[5].Options[0]);
        $('.ans2').html(trivGame[5].Options[1]);
          $('#tru6').on('click', function() {
            right++;
            $('.right').html('<h4>' + 'Right: ' + right + '</h4>');
            $('#six').hide();
          });
          $('#fal6').on('click', function() {
            wrong++;
            $('.wrong').html('<h4>' + 'Wrong: ' + wrong + '</h4>');
            $('#six').hide();
          });

      $('.quest7').html(trivGame[6].q7);
          $('.ans1').html(trivGame[6].Options[0]);
        $('.ans2').html(trivGame[6].Options[1]);
            $('#tru7').on('click', function() {
            wrong++;
            $('.wrong').html('<h4>' + 'Wrong: ' + wrong + '</h4>');
            $('#seventh').hide();
          });
          $('#fal7').on('click', function() {
            right++;
            $('.right').html('<h4>' + 'Right: ' + right + '</h4>');
            $('#seventh').hide();
          });

      $('.quest8').html(trivGame[7].q8);
          $('.ans1').html(trivGame[7].Options[0]);
        $('.ans2').html(trivGame[7].Options[1]);
            $('#tru8').on('click', function() {
            wrong++;
            $('.wrong').html('<h4>' + 'Wrong: ' + wrong + '</h4>');
            $('#eighth').hide();
          });
          $('#fal8').on('click', function() {
            right++;
            $('.right').html('<h4>' + 'Right: ' + right + '</h4>');
            $('#eighth').hide();
          });

      $('.quest9').html(trivGame[8].q9);
          $('.ans1').html(trivGame[8].Options[0]);
        $('.ans2').html(trivGame[8].Options[1]);
            $('#tru9').on('click', function() {
            right++;
            $('.right').html('<h4>' + 'Right: ' + right + '</h4>');
            $('#ninth').hide();
          });
          $('#fal9').on('click', function() {
            wrong++;
            $('.wrong').html('<h4>' + 'Wrong: ' + wrong + '</h4>');
            $('#ninth').hide();
          });

      $('.quest10').html(trivGame[9].q10);
          $('.ans1').html(trivGame[9].Options[0]);
        $('.ans2').html(trivGame[9].Options[1]);
            $('#tru10').on('click', function() {
            wrong++;
            $('.wrong').html('<h4>' + 'Wrong: ' + wrong + '</h4>');
            $('#tenth').hide();
            stop();
          });
          $('#fal10').on('click', function() {
            right++;
            $('.right').html('<h4>' + 'Right: ' + right + '</h4>');
            $('#tenth').hide();
            stop();
          });
    }

    function increment(){
      timer--;
    $('.show-counter').html('<h3>' + 'Time left: ' + timer + ' seconds' + '</h3>');
    if (timer === 0){
    stop();
      $('.time-up').html('<h2>' + 'Your Time is up!' + '</h2>');
      $('.panel-body').hide();
      $('#first').hide();
      $('#second').hide();
      $('#third').hide();
      $('#fourth').hide();
      $('#fifth').hide();
 //     $('#six').hide();
 //     $('#seventh').hide();
 //     $('#eighth').hide();
 //     $('#ninth').hide();
 //     $('#tenth').hide();
    // $('.ans2').hide();
    // $('.play-again').show();
        }
    }

    function stop(){
      clearInterval(counter);
    }

    // $('.play-again').on('click', function() {
    //  run();
    // });

});
   