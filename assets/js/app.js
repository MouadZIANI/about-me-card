"use stric";
// Elements
var $boxEditInfoUser = document.getElementById('box-edit-info-user');
var $boxShowInfoUser = document.getElementById('box-show-info-user');
var $btnSubmit = document.getElementById('btn-submit'); 
var $btnEdit = document.getElementById('btn-edit'); 
var $formUserInfo = document.querySelectorAll("#box-edit-info-user form")[0];
var $userName = document.getElementById('user-name'); 
var $userEmail = document.getElementById('user-email'); 
var $userJob = document.getElementById('user-job'); 
var $userDescription = document.getElementById('user-description'); 
var $userAvatar = document.getElementById('user-avatar');

// Events 
$btnSubmit.addEventListener('click', function() {
	// Set data to card
	setText($userName, $formUserInfo.fullName.value);
	setText($userEmail, $formUserInfo.email.value);
	setText($userJob, $formUserInfo.job.value);
	setText($userDescription, $formUserInfo.description.value);
	setImage($userAvatar, $formUserInfo.avatar);
	// Show user card
	show($boxShowInfoUser);
	hide($boxEditInfoUser);
});

$btnEdit.addEventListener('click', function() {
	show($boxEditInfoUser);
	hide($boxShowInfoUser);
});

// Helpers
function hide(element) {
	element.classList.add('hide');
	element.classList.remove('show');
}

function show(element) {
	element.classList.add('show');
	element.classList.remove('hide');
}

function setImage(element, fileInput) {
	if(fileInput.files[0] != undefined) {
		element.src = window.URL.createObjectURL(fileInput.files[0]);
	} else {
		element.src = './assets/images/default-avatar.png';
	}
}

function setText(element, value) {
	element.innerText = value;
}