var btr=document.querySelector("#b");
var cells=document.querySelectorAll("td");

function clearcell(){
   for(cell of cells){
     cell.textContent='';
   }
}
btr.addEventListener('click',clearcell);

function changecontent(){
    if(this.textContent===''){
      this.textContent='X';
    }
    else if(this.textContent=='X'){
        this.textContent='O';
    }
    else {
      this.textContent=''
    }

}

for(cell of cells){
  cell.addEventListener('click',changecontent)
}
