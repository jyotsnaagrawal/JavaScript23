$(document).ready(function () {
  $('#lightBtn').click(function () {
    $('body').removeClass('dark-mode').addClass('light-mode');
  });

  $('#darkBtn').click(function () {
    $('body').removeClass('light-mode').addClass('dark-mode');
  });

  $('#increaseFontBtn').click(function () {
    var currentSize = parseInt($('body').css('font-size'));
    var newSize = currentSize + 2;
    $('body').css('font-size', newSize + 'px');
  });

  $('#decreaseFontBtn').click(function () {
    var currentSize = parseInt($('body').css('font-size'));
    var newSize = currentSize - 2;
    $('body').css('font-size', newSize + 'px');
  });

  $('#submitBtn').click(function () {
    var name = $('#name').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var message = $('#message').val();

    $('#output').append(`<p>Name: ${name}</p>`);
    $('#output').append(`<p>Email: ${email}</p>`);
    $('#output').append(`<p>Phone: ${phone}</p>`);
    $('#output').append(`<p>Message: ${message}</p>`);

    $('#name, #email, #phone, #message').val('');
  });
});
