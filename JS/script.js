console.log( ".د نصب  موفقیت  با  اسکری‍ت جاوا فایل" );
const body = document.body;
const themeButton = document.getElementById('themeButton');
const themeKey = 'userTheme'


function changeTitle() {
    console .log ("بهترین سرور");
    const TitleElement = document.getElementById('main-title');
    TitleElement.innerHTML = "2B2C More Games  ";
    TitleElement.style.color = "white";
}

function changeTheme() {
        body.classList.toggle('dark-mode');

        console .log ('تم تغییر کرد!');

        if(body.classList.contains('dark-mode')) {
            localStorage.setItem(themeKey, 'dark');
        } else{
            localStorage.setItem(themeKey, 'light');
        }

}

function applySavedTheme() {
    const SavedTheme = localStorage.getItem(themeKey);
    if(SavedTheme =='dark') {
        body.classList.add('dark-mode');
    }
    else {
    }
}

applySavedTheme ()
if (themeButton) {
    themeButton.addEventListener('click' , changeTheme);
}