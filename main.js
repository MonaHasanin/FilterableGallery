// has been modified
let about = document.querySelector(".about");
let btns = document.querySelectorAll(".tab-btn");
let articles = document.querySelectorAll(".content");

about.addEventListener("click", function(e)  {
  // has been modified
  let id = e.target.dataset.id;

//  console.log(id); للتأكد فقط من أن الكود يعمل بشكل صحيح

  if (id) {
    // Remove 'active' class from other buttons
    btns.forEach(function(btn) {
      btn.classList.remove("active");
    e.target.classList.add("active");

    });
    // Add 'active' class to clicked button

    // Hide other articles
    articles.forEach(function(article) {
      article.classList.remove("active");
    });

    // Find the element class
    // has been modified
    let element = document.querySelector(id);
      element.classList.add("active");
  }
});
