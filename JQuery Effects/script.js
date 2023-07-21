
  // Wait for the document to be ready
  $(document).ready(function() {
    // Select the box element
    var $box = $('.box');

    // Define the animation function
    function moveBox(properties, duration, callback) {
      $box.animate(properties, duration, callback);
    }

    // Define the movement functions
    function moveUp() {
      moveBox({ top: '-=50px' }, 500);
    }

    function moveDown() {
      moveBox({ top: '+=50px' }, 500);
    }

    function moveLeft() {
      moveBox({ left: '-=50px' }, 500);
    }

    function moveRight() {
      moveBox({ left: '+=50px' }, 500);
    }

    // Set up event delegation for the buttons
    $('body').on('click', '#moveUp', moveUp);
    $('body').on('click', '#moveDown', moveDown);
    $('body').on('click', '#moveLeft', moveLeft);
    $('body').on('click', '#moveRight', moveRight);

    // Add the ability to stop the animation on button click
    $('button').click(function() {
      $box.stop();
    });

    // Define a callback function to be executed after the animation
    function afterMove() {
      console.log("Animation completed!");
    }

    // Chaining example: Move the box diagonally and then call the afterMove callback
    function moveDiagonal() {
      $box.animate({ top: '-=50px', left: '+=50px' }, 500)
          .animate({ top: '+=50px', left: '+=50px' }, 500, afterMove);
    }

    // Set up the event listener for the Diagonal button
    $('body').on('click', '#moveDiagonal', moveDiagonal);
  });
