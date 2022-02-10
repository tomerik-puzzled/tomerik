


var lfour = 0;
var lthree = 0;
var vid = document.getElementById('videowindow');

var vid3 = document.getElementById('optionThree'); 
var vid4 = document.getElementById('optionFour');




function openBook() {
  document.getElementById('modalTotal').style.display ='block';
}


 function openPhoneiFrame() {
  document.getElementById('phoneBFTF').className += ' largePhone';

}


function activateOne() { 
  document.getElementById('optionOne').style.display ='block';
  document.getElementById('optionTwo').style.display ='none';
  document.getElementById('optionThree').style.display ='none';
  document.getElementById('optionFour').style.display ='none';
  document.getElementById('about').style.display ='none';
              }   


function activateTwo() {
  document.getElementById('optionOne').style.display ='none';
  //document.getElementById('optionTwo').style.display ='block';
  document.getElementById('optionThree').style.display ='none';
  document.getElementById('optionFour').style.display ='none';
  document.getElementById('about').style.display ='block';
  }

function activateThree() {
  document.getElementById('optionOne').style.display ='none';
  document.getElementById('optionTwo').style.display ='none';
  document.getElementById('about').style.display ='none';
  document.getElementById('optionThree').style.display ='block';
  document.getElementById('optionFour').style.display ='none';
    $('#optionFour').trigger('pause');
    $('#optionthree').trigger('play');
  var x = document.getElementById("optionThree");x.play();


  }

function activateFour() {
  document.getElementById('optionOne').style.display ='none';
  document.getElementById('optionTwo').style.display ='none';
  document.getElementById('about').style.display ='none';
  document.getElementById('optionThree').style.display ='none';
  document.getElementById('optionFour').style.display ='block';
  playVideo4();
  }




function playVideo4() {
  if (lfour === 0) {
    $('#optionFour').trigger('play');
    lfour = 1;
  } else {
    $('#optionFour').trigger('pause');
    lfour = 0;
  }

  if (vid.paused == true) {
    document.getElementById('videoButtonId').className = "videoButtonPlayClass";
  
          } else {//document.getElementById('temp').style.display = 'block';
                  document.getElementById('videoButtonId').className = "videoButtonPauseClass";
        }
} 






function playVideo() {
  if (l === 0) {
    $('#videowindow').trigger('play');
    l = 1;
  } else {
    $('#videowindow').trigger('pause');
    l = 0;
  }

  if (vid.paused == true) {
    document.getElementById('videoButtonId').className = "videoButtonPlayClass";
  
          } else {//document.getElementById('temp').style.display = 'block';
                  document.getElementById('videoButtonId').className = "videoButtonPauseClass";
        }
} 

function closeModal() {
    document.getElementById('modalTotal').style.display ='none';
}


