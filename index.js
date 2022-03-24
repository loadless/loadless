let loadLessBtn = document.querySelectorAll("[data-loadless-btn]");

let loadless_config = {
    showNth : 0,
    showAll : false  
};

[].forEach.call(loadLessBtn, function (el) {
  el.addEventListener("click", function () {
    var page = document.querySelector(
      "[data-page='" + el.dataset.loadlessBtn + "']"
    );
    changePage(page);
  });
});

changePage = (page) => {
  [].forEach.call(page.parentElement.children, function (el) {
    if (el.dataset.page == page.dataset.page) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};

function func_on_load() {
  let location = window.location.href;
  if (location.length > 0 && location.indexOf("#") > -1) {
    el = document.getElementById(location.split("#")[1]);
    if (el) {
      changePage(el);
      return;
    }
  }
  [].forEach.call(document.querySelectorAll("[data-parent]"), function (el) {
    var children = el.querySelectorAll("[data-page]");
    let n = 0;
    [].forEach.call(children, function (child) {
        if (loadless_config.showAll) {
            child.style.display = "block";
            return
        }
      if (! n == loadless_config.showNth) {
        child.style.display = "none";
      }
      n = n + 1;
    });
  });
}

document.onload = func_on_load();
