document.addEventListener("DOMContentLoaded", function (event) {
  let acc = document.getElementsByClassName("accordion");
  let panel = document.getElementsByClassName('panel');
  for (let i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      let setClasses = !this.classList.contains('accordion_active');
      setClass(acc, 'accordion_active', 'remove');
      setClass(panel, 'accordion_show', 'remove');
      if (setClasses) {
        this.classList.toggle("accordion_active");
        this.nextElementSibling.classList.toggle("accordion_show");
      }
    }
  }
  const setClass = (els, className, fnName) => {
    for (var i = 0; i < els.length; i++) {
      els[i].classList[fnName](className);
    }
  }
});