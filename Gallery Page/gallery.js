function openNav() {
  document.getElementById("miniGallerySidebar").style.width = "20%";
  document.getElementById("main").style.width = "80%";
}
/* Set the width of the sidebar to 0 and the right margin of the page content to 0 */
function closeNav() {
  document.getElementById("miniGallerySidebar").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}
function toggleSortByMenu(){
  closeFilterByMenu();
  var dDContent = document.getElementById('sortByMenu');
  if (dDContent.style.display === 'block') dDContent.style.display = 'none';
  else dDContent.style.display = 'block';
}
function closeSortByMenu(){
  document.getElementById('sortByMenu').style.display = 'none';
}
function toggleFilterByMenu(){
  closeSortByMenu();
  var dDContent = document.getElementById('filterByMenu');
  if (dDContent.style.display === 'block') dDContent.style.display = 'none';
  else dDContent.style.display = 'block';
}
function closeFilterByMenu(){
  document.getElementById('filterByMenu').style.display = 'none';
}
function sortBy(){
  //No Functionality Right Now
}
function addFilter(){

}
function removeFilter(id){ 
  //pass the id to the filter and delete it
  //doesnt currently filter paintings as i have no information on tags


}