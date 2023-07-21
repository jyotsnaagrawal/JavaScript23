
 // Wait for the document to be ready
  $(document).ready(function() {
    // Hide/Show effect
    $('#hideShowBtn').click(function() {
      $('#image1Box img').toggle();
      $('#hideShowText').toggle();
    });

    // Fade effect
    $('#fadeBtn').click(function() {
      $('#image2Box img').fadeToggle();
      $('#fadeText').fadeToggle();
    });

    // Slide effect
    $('#slideBtn').click(function() {
      $('#image3Box img').slideToggle();
      $('#slideText').slideToggle();
    });
  });




