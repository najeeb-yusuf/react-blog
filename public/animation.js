document.addEventListener('DOMContentLoaded',() => {const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
  
      if (entry.isIntersecting) {
        entry.target.classList.add('show');}
      else{
        entry.target.classList.remove('show');
      }
       });
    });
  hiddenElements = document.querySelectorAll('.hidden');
  console.log(hiddenElements);
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });});