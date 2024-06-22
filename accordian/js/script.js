

const  accordian = document.querySelectorAll(".accordion");
let chevronIcon = document.querySelectorAll('.fa-chevron-right');
accordian.forEach((element)=>{
  element.addEventListener('click',function(element){
    this.classList.toggle('active')
chevronIcon.forEach((element) => {
        if (element.parentElement && element.parentElement.parentElement && element.parentElement.parentElement.classList.contains('active')) {
          element.style.transform = "rotate(90deg)";
        } else {
          element.style.transform = "rotate(0deg)";
        }
      });
    let panel = this.nextElementSibling;
   if(panel){
     if(panel.style.maxHeight){
      panel.style.maxHeight = null
    }else{
      panel.style.maxHeight = panel.scrollHeight  + "px"
    }
   }
  })
})

