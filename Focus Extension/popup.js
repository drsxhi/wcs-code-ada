'use strict'

function enterTeacherInputs() {
	var webpage = document.getElementById("link");
	var interval = document.getElementById("timing");
}

function enterQuestions() {
	var question = document.getElementById("question");
  	/*question.setAttribute("type", "text");
  	question.setAttribute("value", "Hello World!");
  	document.body.appendChild(question);*/
}

function setAlarms(){
    chrome.browserAction.setBadgeText({text: 'ON'});
    let minutes = parseFloat(event.target.value);
    console.log(minutes);
    chrome.alarms.create("General", {delayInMinutes: minutes});
    chrome.storage.sync.set({timeMinutes: minutes})
}

// function activateAlarm(){
//     console.log("Here");
//     chrome.browserAction.setBadgeText({text: ''});
//     chrome.notifications.create({
//         type:     'basic',
//         iconUrl: 'icon.png',
//         title:    'Here\'s your questions',
//         message:  'AAAAAA',
//         buttons: [
//           {title: 'Keep it Flowing.'}
//         ],
//         priority: 0});
//   };

var sam = document.getElementById('sampleSecond');
if(sam){
    sam.addEventListener('click', setAlarms);
}
var fift = document.getElementById('15min');
if(fift){
    fift.addEventListener('click', setAlarms);
}
var thirt = document.getElementById('30min');
if(thirt){
    thirt.addEventListener('click', setAlarms);
}

