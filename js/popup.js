function clickHandler(evt){
  var ls = window.localStorage;
  var lastData = evt.key === 'Enter' ? '\n' : (evt.value || '');
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
  document.getElementById('notepad').addEventListener('keydown', clickHandler);
  poppulateNotepad();
});