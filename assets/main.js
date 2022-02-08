



/*
var words = ['books', 'interactive websites', 'videos', 'instructables', 'escape games'],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 25,
    speed = 150;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset--;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
*/

var lfour = 0;
var lthree = 0;
var vid = document.getElementById('videowindow');

var vid3 = document.getElementById('optionThree'); 
var vid4 = document.getElementById('optionFour');




function openBook() {
  document.getElementById('bookPopUp').style.display ='block';
}



function activateOne() { 
  document.getElementById('optionOne').style.display ='block';
  document.getElementById('optionTwo').style.display ='none';
  document.getElementById('optionThree').style.display ='none';
  document.getElementById('optionFour').style.display ='none';
              }   


function activateTwo() {
  document.getElementById('optionOne').style.display ='none';
  document.getElementById('optionTwo').style.display ='block';
  document.getElementById('optionThree').style.display ='none';
  document.getElementById('optionFour').style.display ='none';
  }

function activateThree() {
  document.getElementById('optionOne').style.display ='none';
  document.getElementById('optionTwo').style.display ='none';
  document.getElementById('optionThree').style.display ='block';
  document.getElementById('optionFour').style.display ='none';
    $('#optionFour').trigger('pause');
    $('#optionthree').trigger('play');
  var x = document.getElementById("optionThree");x.play();


  }

function activateFour() {
  document.getElementById('optionOne').style.display ='none';
  document.getElementById('optionTwo').style.display ='none';
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


