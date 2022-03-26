const loadLessBtn = document.querySelectorAll("[data-loadless-btn]");

const loadless_config = {
  showNth: 0,
  showAll: false,
  change_delay : 0
};

[].forEach.call(loadLessBtn, function (el) {
  el.addEventListener("click", function () {
    var page = document.querySelector(
      "[data-page='" + el.dataset.loadlessBtn + "']"
    );
    setTimeout(changePage, loadless_config.change_delay, page);
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
  [].forEach.call(document.querySelectorAll("[data-loadless-parent]"), function (el) {
    var children = el.querySelectorAll("[data-page]");
    let n = 0;
    [].forEach.call(children, function (child) {
      if (loadless_config.showAll === true) {
        child.style.display = "block";
        return;
      }
      if (!n == loadless_config.showNth) {
        child.style.display = "none";
      }
      n = n + 1;
      let attr = child.getAttribute("data-animate");
      if (attr) {
        let classes = attr.split(" ");
        classes.forEach(
          (className) => (child.classList.add("animate-"+ className))
        );  
      }
    });
  });
}

document.onload = func_on_load();
