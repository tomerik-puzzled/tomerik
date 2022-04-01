$(document).ready(function() {
  var numberOfPages = 10;
  var hoverTarget; //stores currently hovered page, will only remove the hover effect if it hasn't been turned.
  var PagesMoving = false; //prevents the pages getting out of order with multiple page clicks running simultaneously

  //set the 3d perspective and initiate the back pages so it's rotated to the correct position
  TweenLite.set(".book", {
    transformStyle: "preserve-3d"
  });
  TweenLite.set(".Wrapper", {
    transformStyle: "preserve-3d",
    transformOrigin: '50% 0%',
    rotationX: 12
  });
  TweenLite.set(".pageCont", {
    transformStyle: "preserve-3d"
  });
  TweenMax.set(".pageBack", {
    transformStyle: "preserve-3d",
    transformOrigin: '100% 50%',
    rotationY: 180,
    transformPerspective: 5000
  });
  TweenMax.set(".pageFront", {
    transformStyle: "preserve-3d",
    transformOrigin: '0% 50%',
    transformPerspective: 5000
  });

  // functions that set the z-index after a page has been moved
  function setZIndexLeft(element, index) {
    element.css('z-index', (index + 1));
  }

  function setZIndexRight(element, index) {
    element.css('z-index', (numberOfPages - index) + 1);
  }

  //function that runs on completion of a page move
  function pageTurnComplete() {
    PagesMoving = false;
  }

  //set initial z-index
  var pages = $('.Wrapper').children();
  pages.each(function(i) {
    var page = $(this);
    page.css('z-index', (numberOfPages - i) + 1);
  });

  // turn pages on click - needs a function for the front of a page (i.e. one on the right hand side) and the back (on the left hand side)
  $('.pageFront').click(function() {
    if (PagesMoving != true) {
      PagesMoving = true;
      var frontCard = $(this),
        backCard = $(this).parent(".pageCont").children(".pageBack"),
        element = $(this).parent(".pageCont"),
        parentPage = $(this).parent(".pageCont"),
        tl = new TimelineMax({
          paused: false
        });

      hoverTarget = -1;
      //console.log(hoverTarget);

      tl
        .to(frontCard, 1.4, {
          rotationY: -180,
          ease: Power1.easeInOut
        })
        .to(frontCard.find(".pageShading"), 0.7, {
          opacity: 0.4,
          ease: Power1.easeInOut
        }, 0)
        .to(backCard.find(".pageShading"), 0.7, {
          opacity: 0,
          ease: Power1.easeInOut,
        onComplete: pageTurnComplete
        }, 0.7)
        .to(backCard, 1.4, {
          rotationY: 0,
          ease: Power1.easeInOut,
          onComplete: setZIndexLeft,
          onCompleteParams: [parentPage, parentPage.index()]
        }, 0);
    }
  });

  // turn pages on click - needs a function for the back (on the left hand side) and the front of a page (i.e. one on the right hand side) 
  $('.pageBack').click(function() {
    if (PagesMoving != true) {
      PagesMoving = true;
      //console.log("back clicked");
      var frontCard = $(this).parent(".pageCont").children(".pageFront"),
        backCard = $(this),
        element = $(this).parent(".pageCont"),
        parentPage = $(this).parent(".pageCont"),
        tl = new TimelineMax({
          paused: false
        });

      hoverTarget = -1;
      //console.log(hoverTarget);

      tl
        .to(frontCard, 1.4, {
          rotationY: 0,
          ease: Power1.easeInOut
        })
        .to(backCard.find(".pageShading"), 0.7, {
          opacity: 0.4,
          ease: Power1.easeInOut
        }, 0)
        .to(frontCard.find(".pageShading"), 0.7, {
          opacity: 0,
          ease: Power1.easeInOut
        }, 0.7)
        .to(backCard, 1.4, {
          rotationY: 180,
          ease: Power1.easeInOut,
          onStart: setZIndexRight,
          onStartParams: [parentPage, parentPage.index()],
          onComplete: pageTurnComplete
        }, 0);
    }
  });

  //raise pages on hover, again, one set of functions for the front and back of the pages
  $(".pageFront").hover(elOverFront, elOutFront);

  function elOverFront() {
    if ((!TweenMax.isTweening()) && (PagesMoving == false)) {
      var frontCard = $(this),
        backCard = $(this).parent(".pageCont").children(".pageBack"),
        element = $(this).parent(".pageCont"),
        parentPage = $(this).parent(".pageCont"),
        indexOf = (2 * (parentPage.index() + 1) - 1),
        tl = new TimelineMax({
          paused: false
        });

      hoverTarget = indexOf;
      //console.log(hoverTarget);

      tl
        .to(frontCard, 0.4, {
          rotationY: -10,
          ease: Power1.easeInOut
        })
        .to(frontCard.find(".pageShading"), 0.4, {
          opacity: 0.1,
          ease: Power1.easeInOut
        }, 0);
    }
  }

  function elOutFront() {
    if ((!TweenMax.isTweening()) && (PagesMoving == false)) {
      var frontCard = $(this),
        backCard = $(this).parent(".pageCont").children(".pageBack"),
        element = $(this).parent(".pageCont"),
        parentPage = $(this).parent(".pageCont"),
        indexOf = (2 * (parentPage.index() + 1) - 1);

      if (hoverTarget == indexOf) {

        var tl = new TimelineMax({
            paused: false
          });

        tl
          .to(frontCard, 0.4, {
            rotationY: 0,
            ease: Power1.easeInOut
          })
          .to(frontCard.find(".pageShading"), 0.4, {
          opacity: 0,
          ease: Power1.easeInOut
        }, 0);
      }
    }
  }

  //raise pages on hover, again, one set of functions for the front and back of the pages
  $(".pageBack").hover(elOverBack, elOutBack);

  function elOverBack() {
    if ((!TweenMax.isTweening()) && (PagesMoving == false)) {
      var frontCard = $(this).parent(".pageCont").children(".pageFront"),
        backCard = $(this),
        element = $(this).parent(".pageCont"),
        parentPage = $(this).parent(".pageCont"),
        indexOf = 2 * (parentPage.index() + 1),
        tl = new TimelineMax({
          paused: false
        });

      hoverTarget = indexOf;
      //console.log(hoverTarget);

      tl
        .to(backCard, 0.4, {
          rotationY: 10,
          ease: Power1.easeInOut
        })
        .to(backCard.find(".pageShading"), 0.4, {
          opacity: 0.1,
          ease: Power1.easeInOut
        }, 0);
    }
  }

  function elOutBack() {
    if ((!TweenMax.isTweening()) && (PagesMoving == false)) {
      var frontCard = $(this).parent(".pageCont").children(".pageFront"),
        backCard = $(this),
        element = $(this).parent(".pageCont"),
        parentPage = $(this).parent(".pageCont"),
        indexOf = 2 * (parentPage.index() + 1);

      if (hoverTarget == indexOf) {

        var tl = new TimelineMax({
            paused: false
          });

        tl
          .to(backCard, 0.4, {
            rotationY: 0,
            ease: Power1.easeInOut
          })
          .to(backCard.find(".pageShading"), 0.4, {
          opacity: 0,
          ease: Power1.easeInOut
        }, 0);
      }
    }
  }		
});