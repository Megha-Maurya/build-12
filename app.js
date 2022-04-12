var uName = document.querySelector('#nam');
var password = document.querySelector('#pass');
var btn = document.querySelector('#btn');
var err = document.querySelector('#error');

function clickHandler(){
    var pas = password.value
    if(uName.value === ""){
        err.innerText = "**please enter username";
        return false;
    }
    if(pas === ""){
        password.style.background = "red";
        err.innerText = "**please enter password";
        return false;
    }

    if(pas.length < 5){
        password.style.color = "red";
        err.innerText = "**password has atleast 5 character";
        return false;
    }
    else {
        console.log('clicked');
        password.style.color = "green";
        return true;
    }
}

btn.addEventListener('click', clickHandler);