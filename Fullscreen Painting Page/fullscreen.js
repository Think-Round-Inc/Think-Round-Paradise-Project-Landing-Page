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
function setPainting(){ //read the url to find the specific painting
  const URLparams = window.location.search("painting");
  //search for the background version and the backgroundless version
  //Defaults
  var paintingTitle = "Painting Title";
  var family = "Part 1 : The Human Family Tree (Christians)";
  var paintingSrc = "./public/1a-4@2x.png";
  var paintingDescription = "";
  if (URLparams){
    //here we would check the corresponding image and update the title accordingly
  }
  document.getElementById('paintingTitle').innerText = paintingTitle;
  document.getElementById('artworkDescription').innerText = family;
  document.getElementById('painting').src = paintingSrc;
  //probably change size too
  document.getElementById("descriptionText").innerText = paintingDescription;
}
function previousPainting(){ //may need to change paintings size
  //Things that will need to change:
  // Painting Title, Description Composition, Description Dimensions, Actual Descripton, Painting Family

}
function nextPainting(){ //may need to change paintings size
  //Things that will need to change:
  // Painting Title, Description Composition, Description Dimensions, Actual Descripton, Painting Family

}
function exitFullScreen(){
  window.location.href = "../Gallery Page/gallery-page.html";
}