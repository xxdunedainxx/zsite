/**
  * All JS related to UI Rendering 
  *
  *
**/


/**
 * Render the nav bar 
 */
function navBar(dest) {
  var zClass = "inactive"
  var aboutClass = "inactive"

  // this is dumb but im lazy :)
  if(dest == "zach") {
    zClass = "active"
  } else {
    aboutClass = "active"
  }

  document.getElementById('nav').innerHTML =  `
  <ul>
    <li><a class="${zClass}" href="./zach.html">Congrats</a></li>
    <li><a class="${aboutClass}" href="./about.html">About</a></li>
    <li><a href="https://docs.google.com/document/d/1Mg1Nt80ZYMXS7eIXzWWK6cyVOSoAUQ73csjgEhQA59I/edit?usp=sharing">Resume</a></li>
    <li style="float:right;
    display: flex;
    flex-wrap: wrap; color: white;" > <svg style="padding-top: 15px; class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 9 3 3-3 3m5 0h3M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
  </svg>
  <a href="./welcome.html">terminal</a></li>
  </ul>
  `;
}

