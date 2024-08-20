$(function () {
  // const url = 'http://127.0.0.1:5001/api/v1/status/'; // use it when you run localy
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  }, 'json');
  const dict = {};
  $('input:checkbox').on('click', function () {
    const name = $(this).attr('data-name');
    const id = $(this).attr('data-id');

    if (dict.hasOwnProperty(id)) {
      delete dict[id];
    } else {
      dict[id] = name;
    }

    $('div.amenities h4').html('&nbsp;');
    for (const key in dict) {
      $('div.amenities h4').append(dict[key] + ', ');
    }
  });
});
