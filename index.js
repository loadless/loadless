var loadLessBtn = document.querySelectorAll("[data-loadless-btn]");

[].forEach.call(loadLessBtn, function (el) {
  el.addEventListener("click", function () {
    var page = document.querySelector(
      "[data-page='" + el.dataset.loadlessBtn + "']"
    );
    changePage(page);
  });
});

changePage = (page) => {
  var siblings = page.parentElement.children;
  [].forEach.call(siblings, function (el) {
    if (el.dataset.page == page.dataset.page) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};

document.onload = function () {
  let location = window.location.href;
  if (location.length > 0 && location.indexOf("#") > -1) {
    element_id = location.split("#")[1];
    el = document.getElementById(element_id);
    if (el) {
      changePage();
      return;
    }
  }
  var parent = document.querySelectorAll("[data-parent]");
  [].forEach.call(parent, function (el) {
    var children = el.querySelectorAll("[data-page]");
    let n = 0;
    [].forEach.call(children, function (child) {
      if (n > 0) {
        child.style.display = "none";
      }
      n = n + 1;
    });
  });
}

