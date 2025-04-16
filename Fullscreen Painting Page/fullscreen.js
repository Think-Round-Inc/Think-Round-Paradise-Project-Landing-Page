function viewWithBackground(){
  var bB = document.getElementById('bgButton');
  bB.innerText = "View Main Painting";
  document.getElementById("painting").style.transform = 'scale(0.5)';
  bB.removeEventListener('click',viewWithBackground);
  bB.addEventListener('click',viewMainPainting);
}
function viewMainPainting(){
  var bB = document.getElementById('bgButton');
  bB.innerText = "View Background";
  document.getElementById("painting").style.transform = 'scale(1)';
  bB.removeEventListener('click',viewMainPainting);
  bB.addEventListener('click',viewWithBackground);
}
function viewDescription(){
  var dB = document.getElementById('descButton');
  document.getElementById('a-4-icon-top').style.opacity = '100%';
  dB.innerText = "Hide Description";
  dB.removeEventListener('click',viewDescription);
  dB.addEventListener('click',hideDescription);
}
function hideDescription(){
  var dB = document.getElementById('descButton');
  document.getElementById('a-4-icon-top').style.opacity = '0%';
  dB.innerText = "View Description";
  dB.removeEventListener('click',hideDescription);
  dB.addEventListener('click',viewDescription);
}
function previousPainting(){ //may need to change paintings size

}
function nextPainting(){ //may need to change paintings size

}
function exitFullScreen(){
  window.location.href = "../Gallery Page/gallery-page.html";
}