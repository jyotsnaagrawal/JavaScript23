
  // Wait for the document to be ready
  $(document).ready(function() {
    // Function to hide paragraphs
    function hideParagraphs() {
      $('p').hide();
    }

    // Function to hide the specific div
    function hideDiv() {
      $('#hideMe').hide();
    }

    // Hide paragraphs on button click
    $('#hideParagraphs').click(hideParagraphs);

    // Hide the specific div on button click
    $('#hideDiv').click(hideDiv);

    // Hide h2 headings when clicked
    $('h2').click(function() {
      $(this).hide();
    });
  });
