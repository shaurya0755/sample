var button=document.querySelector("#bc")

function getrandomcolor(){
  var hash='0123456789abcdef';
  var color='#'
  for(i=0;i<6;i++){
    x=Math.floor(Math.random()*16)
    y=hash[x];
    color=color+y;
  }
  return color;
}
function applycolor(){
  var body=document.querySelector("body")
  body.style.background=getrandomcolor();
  h1.style.color=getramdomcolor();
  p.style.color=getrandomcolor();
}
button.addEventListener('click',applycolor);
button.addEventListener('mouseover',applycolor);
button.addEventListener('mouseout',applycolor);
button.addEventListener('focus',applycolor);
