document.addEventListener('DOMContentLoaded', () => {
  var acc = document.getElementsByClassName("accordin");
  let chevronIcon = document.querySelectorAll('.fa-chevron-right');

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");

      chevronIcon.forEach((element) => {
        if (element.parentElement && element.parentElement.parentElement && element.parentElement.parentElement.classList.contains('active')) {
          element.style.transform = "rotate(90deg)";
        } else {
          element.style.transform = "rotate(0deg)";
        }
      });

      var panel = this.nextElementSibling;
      if (panel) {
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      }
    });
  }
});
