const toggleSwitch = document.querySelector('#theme-switch');
const htmlWrap = document.querySelector('#wrap');

function switchTheme(e) {
    if (toggleSwitch.checked) {
        htmlWrap.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = false;
    } else {
        htmlWrap.setAttribute('data-theme', 'light');
        toggleSwitch.checked = true;
    }
}
toggleSwitch.addEventListener('click', switchTheme, true);

if (htmlWrap.getAttribute("data-theme") == "dark"){
    toggleSwitch.checked = false;
}