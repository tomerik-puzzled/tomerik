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

var l = 0;
var vid = document.getElementById('videowindow');
 





function activateOne() { 
     document.getElementById('optionOne').style.display ='block';
  document.getElementById('optionTwo').style.display ='none';
  document.getElementById('optionThree').style.display ='none';


              }   


function activateTwo() {
  document.getElementById('optionOne').style.display ='none';
  document.getElementById('optionTwo').style.display ='block';
  document.getElementById('optionThree').style.display ='none';
  }

function activateThree() {
  document.getElementById('optionOne').style.display ='none';
  document.getElementById('optionTwo').style.display ='none';
  document.getElementById('optionThree').style.display ='block';
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


