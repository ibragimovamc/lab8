let switchCount = 0;
function tabs(el, tab){
    let previousTab, previousTabText, tabText;
    previousTabText = document.getElementsByClassName('active__tab__text');
    previousTab = document.getElementsByClassName('active__tab');
    for (let i = 0; i < previousTabText.length; i++) {
        previousTabText[i].classList.remove('active__tab__text');
    }

    for (let i = 0; i < previousTab.length; i++) {
        previousTab[i].classList.remove('active__tab');
    }

    document.getElementById(tab).classList.add('active__tab__text');
    el.classList.add('active__tab');
}
function switcher(el){
    let switches = document.getElementsByClassName('learn_choice_element');
    switches[switchCount].classList.remove('active');
    let prevText = switches[switchCount].dataset.text;
    document.getElementById(prevText).classList.remove('active__container');

    if (el.dataset.info == 'down') {switchCount++}
    else switchCount--;

    if(switchCount > switches.length - 1) switchCount = 0;
    if(switchCount < 0) switchCount = switches.length - 1;

    switches[switchCount].classList.add('active');

    let forSwitch = switches[switchCount].dataset.text;
    document.getElementById(forSwitch).classList.add('active__container');
}

// start
function setSwitch(el){
    let switches = document.getElementsByClassName('learn_choice_element');
    switches[switchCount].classList.remove('active');
    let prevText = switches[switchCount].dataset.text;
    document.getElementById(prevText).classList.remove('active__container');

    if (el.dataset.info == '0') {switchCount = 0}
    if (el.dataset.info == '1') {switchCount = 1}
    if (el.dataset.info == '2') {switchCount = 2}

    switches[switchCount].classList.add('active');

    let forSwitch = switches[switchCount].dataset.text;
    document.getElementById(forSwitch).classList.add('active__container');
}
//end

document.getElementById('default').click()
