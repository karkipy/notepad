function clickHandler(evt){
  var ls = window.localStorage;
  var data = document.getElementById('notepad').value+evt.key;
  ls.setItem('notepad', data);
}

function poppulateNotepad() {
  var ls = window.localStorage;
  var data = ls.getItem('notepad') || "Text...";
  document.getElementById('notepad').value = data;
}

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('notepad').addEventListener('keydown', clickHandler);
  poppulateNotepad();
});