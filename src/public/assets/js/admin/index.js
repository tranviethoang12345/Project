/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
$('#add_user').submit((event) => {
  alert('Data Inserted Successfully!');
});

$('#update_user').submit(function (event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function (n, i) {
    data[n[`name`]] = n[`value`];
  });

  var request = {
    url: `http://localhost:3000/admin/api/users/${data.id}`,
    method: 'PUT',
    data: data,
  };

  $.ajax(request).done(function (response) {
    alert('Data Update Successfully!');
  });
});
