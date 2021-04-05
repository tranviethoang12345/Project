/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
$('#add_user').submit((event) => {
  alert('Data Inserted Successfully!');
});

$('#update_user').submit((event) => {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};
  $.map(unindexed_array, function (n, i) {
    data[n['fullName']] = n['value'];
  });
  console.log(data);

  var request = {
    url: 'http://localhost:3000/admin/api/users/${data.id}',
    method: 'PUT',
    data: data,
  };
  console.log(request);

  $.ajax(request).done((response) => {
    alert('Data Update Successfully!');
  });
});
