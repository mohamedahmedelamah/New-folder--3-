                   // show - hidden  password 
var myInput = document.getElementById('password'),
    myIcon = document.getElementById('icon');


myIcon.onclick = function () {

  if (myIcon.classList.contains('fa-eye')) {

    this.classList.toggle('fa-eye-slash');
    this.classList.toggle('fa-eye');

    myInput.setAttribute('type', 'text');

  } else {
    myInput.setAttribute('type', 'password');
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');

  };
}








