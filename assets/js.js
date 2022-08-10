const BUTTON =  document.getElementById('button');
const BODY = document.getElementsByTagName('body')[0];
const MODE = document.getElementById('mode');
const FOOTER = document.getElementById('footer')

function changeColor(){
    BODY.classList.toggle("darkMode");
    BODY.classList.toggle("lightMode");
    MODE.classList.toggle("darktMode");
    MODE.classList.toggle("lightMode");
    BUTTON.classList.toggle("darktMode");
    BUTTON.classList.toggle("lightMode");
    FOOTER.classList.toggle("darktMode");
    FOOTER.classList.toggle("lightMode");
}

function changeText(){
    if(BODY.classList.contains('darkMode')){
        MODE.innerHTML = "Dark mode ON";
        BUTTON.innerHTML = "Light mode";
    }

    else{
        MODE.innerHTML = "Light mode ON";
        BUTTON.innerHTML = "Dark mode";
    }
}

function changeTheme(){
    changeColor();
    changeText();
}


BUTTON.addEventListener('click', changeTheme);