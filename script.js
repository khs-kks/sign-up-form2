const pwd = document.querySelector('#password');
const confirm_pwd = document.querySelector('#confirm-password');
const span_no_match = document.querySelector('.first-column > span');
const button = document.querySelector('button');

const disableEnableButton = function () {
    if (pwd.value === confirm_pwd.value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const checkMatch = function () {

    disableEnableButton();

    if (pwd.value === confirm_pwd.value) {
        if (pwd.classList.contains('error')) {
            pwd.classList.remove('error');
            confirm_pwd.classList.remove('error');
            span_no_match.classList.replace('nomatch', 'match');
        }
    } else {
        if (!pwd.classList.contains('error')) {
            pwd.classList.add('error');
            confirm_pwd.classList.add('error');
            span_no_match.classList.replace('match', 'nomatch');
        };
    };    
}


pwd.addEventListener('keyup', checkMatch);
confirm_pwd.addEventListener('keyup', checkMatch);
