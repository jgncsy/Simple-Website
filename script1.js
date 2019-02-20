//show more information of career
function button_two_function(){
  var myNodelist = document.querySelectorAll("p");
  var i;
  for (i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.backgroundColor = "rgb(204, 153, 255)";
  }
}
const button2 = document.getElementById("button-two");
button2.addEventListener('click', button_two_function);

function button_three_function(){
  console.log("Button three clicked!");
  var moreDetail = document.getElementById("add");
  var newP = document.createElement("p");
  var text = document.createTextNode('In November 2015, Cabello collaborated with Canadian singer Shawn Mendes on a duet titled "I Know What You Did Last Summer", a song they wrote together. The single charted at number 20 in the US and 18 in Canada, and was certified platinum by the Recording Industry Association of America (RIAA).');
  newP.appendChild(text);
  moreDetail.appendChild(newP);
}
const button3 = document.getElementById("button-three");
button3.addEventListener('click', button_three_function);


