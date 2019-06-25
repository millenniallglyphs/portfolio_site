var animate = "clickme 0.5s infinite"
var noanimate = "none"

/*calling all of the divs to activate the link animation*/

/*epiphyte*/
clickit("epiphytea", "epiphyteb");
clickit("epiphytec", "epiphyteb");
/*abacus*/
clickit("abacusa", "abacusb");
clickit("abacusc", "abacusb");
/*bitclaims*/
clickit("bitclaimsa", "bitclaimsb");
clickit("bitclaimsc", "bitclaimsb");
/*international*/
clickit("internationala", "internationalb");
clickit("internationalc", "internationalb");
/*botnet*/
clickit("botneta", "botnetb");
clickit("botnetc", "botnetb");
/*capital*/
clickit("capitala", "capitalb");
/*cloud*/
clickit("clouda", "cloudb");
/*cybernetic*/
clickit("cybernetica", "cyberneticb");
/*recompose*/
clickit("recomposea", "recomposeb");
/*opensource*/
clickit("opensourcea", "opensourceb");

/*on hover calls animation function*/
function clickit(hov, respond) {
  document.getElementById(hov).onmouseover = function()
  {getmoving(respond)};
  document.getElementById(hov).onmouseout = function()
  {quitmoving(respond)};
}

/*tells selection to animate*/
function getmoving(name) {
  document.getElementById(name).style.animation = animate;
}

/*tells selection to stop animation*/
function quitmoving(call) {
  document.getElementById(call).style.animation = noanimate;
}
