$(function () {
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
