function clickHandler(evt){
  var ls = window.localStorage;
  let lastData = '';
  if(evt.key === 'Enter') {
    lastData = '\n';
  } else if(evt.key === 'Backspace'){
    lastData = '';
  }

  var data = document.getElementById('notepad').value + lastData;
  ls.setItem('notepad', data);
}

function poppulateNotepad() {
  var ls = window.localStorage;
  var data = ls.getItem('notepad') || "Text...";
  var color = ls.getItem('notePadColor') || "#000";
  var notepad = document.getElementById('notepad');
  notepad.value = data;
  notepad.style.color = color;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('notepad').addEventListener('keyup', clickHandler);
  poppulateNotepad();
});