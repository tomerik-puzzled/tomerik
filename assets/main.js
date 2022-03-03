

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

function openVirtualGame() {
    document.getElementById('modalVirtualGame').style.display ='block';
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
  document.getElementById("optionFour").muted = true;
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






function muteVideos() {


     //document.getElementById("optionFour").muted = true;

  var soundMuted = document.getElementById("optionFour").muted;
    if (soundMuted === false) { document.getElementById("optionFour").muted = true; soundMuted = true}
      else  {document.getElementById("optionFour").muted = false;}

  var soundMuted3 = document.getElementById("optionThree").muted;
    if (soundMuted3 === false) { document.getElementById("optionThree").muted = true; soundMuted3 = true}
      else  {document.getElementById("optionThree").muted = false;}



  
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
    document.getElementById('modalVirtualGame').style.display ='none';
}




