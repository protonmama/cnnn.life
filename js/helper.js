function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + "=" + "(.+?)(&|$)").exec(location.search) || [, null])[1] ||
      ""
  );
}

document.addEventListener("DOMContentLoaded", noScrollToFillLink);

function stopDefault (e) {
  e.preventDefault();
}
function noScrollToFillLink() {
  let links = document.querySelectorAll("a[href|='#filink']");
  [...links].forEach((link) =>
    link.addEventListener("click", stopDefault)
  );
}

let closeExceptionModalBtns = document.querySelectorAll(
  ".js-exception-modal-close"
);

closeExceptionModalBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    btn.parentElement.parentElement.style.display = "none";
  });
});

function GetToday(offset) {
  // Array of day names
  let dayNames = new Array(
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu"
  );

  // Array of month Names
  let monthNames = new Array(
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  );
  let now = new Date();

  now.setDate(now.getDate() + parseInt(offset));

  return (
    now.getDate() + " " + monthNames[now.getMonth()] + ", " + now.getFullYear()
  );
}
function loadTime() {
  if (new Date().getTime() - performance.timing.navigationStart < 10000) {
    var e = document.createElement("link");
    (e.type = "text/css"),
      (e.rel = "stylesheet"),
      (e.href =
        "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,700i&amp;subset=cyrillic,latin-ext,vietnamese"),
      document.body.appendChild(e);
  }
}

function teleporter(from, to, removeElements = []) {
  const target = document.querySelector(from);
  const container = document.querySelector(to);
  if (target) {
    if (target.closest("#olymp-instruction")) {
      return;
    }

    removeElements.forEach(function (selector) {
      const element = target.querySelector(selector);

      if (element) {
        element.remove();
      }
    });

    if (container) {
      container.appendChild(target);
    } else {
      target.remove();
    }
  }
}

//это нужно если понадобится телепортировать инструкцию

function teleporterInstruction(from, to, removeElements = []) {
  const target = document.querySelector(from);
  const container = document.querySelector(to);

  removeElements.forEach(function (selector) {
    const element = target.querySelector(selector);

    if (element) {
      element.remove();
    }
  });

  if (container) {
    container.appendChild(target);
  } else {
    target.remove();
  }
}

//кроссбраузерная правная прокрутка между якорными ссылками
function smoothScroll(from, to) {
  const start = document.querySelector(from);
  const goal = document.querySelector(to);

  start.addEventListener("click", function (e) {
    e.preventDefault();
    let smoothScrollFeature =
      "scrollBehavior" in document.documentElement.style;
    let target = goal.offsetTop;
    let i = parseInt(window.pageYOffset);
    if (i != target) {
      if (!smoothScrollFeature) {
        target = parseInt(target);
        if (i < target) {
          var int = setInterval(function () {
            if (i > target - 20) i += 1;
            else if (i > target - 40) i += 3;
            else if (i > target - 80) i += 8;
            else if (i > target - 160) i += 18;
            else if (i > target - 200) i += 24;
            else if (i > target - 300) i += 40;
            else i += 60;
            window.scroll(0, i);
            if (i >= target) clearInterval(int);
          }, 15);
        } else {
          var int = setInterval(function () {
            if (i < target + 20) i -= 1;
            else if (i < target + 40) i -= 3;
            else if (i < target + 80) i -= 8;
            else if (i < target + 160) i -= 18;
            else if (i < target + 200) i -= 24;
            else if (i < target + 300) i -= 40;
            else i -= 60;
            window.scroll(0, i);
            if (i <= target) clearInterval(int);
          }, 15);
        }
      } else {
        window.scroll({
          top: target,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  });
}

window.addEventListener("load", loadTime, !1);
