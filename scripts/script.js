function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
});

$(function(){
$(".plus").click(function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.siblings('input');
  var value = parseInt($input.val());

  if (value < 30) {
    value = value + 1;
  }
  else {
    value =30;
  }

  $input.val(value);
});

$(".minus").click(function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.siblings('input');
  var value = parseInt($input.val());

  console.log(value);

  if (value > 0) {
    value = value - 1;
  }
  else {
    value =0;
  }

  $input.val(value);
});
});
