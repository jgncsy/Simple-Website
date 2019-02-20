/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

//change the color of the table
function button_one_function(){
  console.log("Button one clicked!");
  var rows = document.getElementsByTagName("table")[0];
  rows.className = "even";
}
const button1 = document.getElementById("button-one");
button1.addEventListener('click', button_one_function);



