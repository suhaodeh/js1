function sizeBigger(){
   
  document.querySelector(".font").classList.add("size-Bigger");
  document.querySelector(".font").classList.remove("size-smaller");

}
document.querySelector(".bigger").onclick=sizeBigger;

function sizeSmaller(){
    document.querySelector(".font").classList.add("size-smaller");
    document.querySelector(".font").classList.remove("size-Bigger");
 
}
document.querySelector(".smaller").onclick=sizeSmaller;
