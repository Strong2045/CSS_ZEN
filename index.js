const inp = document.getElementsByClassName("selector")[0];
const but_find = document.getElementsByClassName("selector-find")[0];
const but_next = document.getElementsByClassName("selector-next")[0];
const but_prev = document.getElementsByClassName("selector-prev")[0];
const tops = document.getElementsByClassName("nav-top")[0];
const bottom = document.getElementsByClassName("nav-bottom")[0];
const left = document.getElementsByClassName("nav-left")[0];
const right = document.getElementsByClassName("nav-right")[0];
let search_sel = "";
let parent_sel = "";
const sel = "";
let timer = 0;

const style = document.createElement("style");
style.type = "text/css";
style.innerHTML =
  ".select {outline: solid red 5px;background-color: lightblue;}";
document.getElementsByTagName("head")[0].appendChild(style);

function clears(param) {
  const res = param.slice(1, param.length);
  if (res.trim() !== undefined && res.trim() !== "") {
    const arr = document.querySelectorAll(param);
    if (parent_sel !== "") parent_sel.classList.remove("select");
    for (let i = 0; i < arr.length; i++) {
      arr[i].classList.remove("select");
    }
  }
}

function button_off() {
  but_next.disabled = true;
  but_prev.disabled = true;
}

function button_on() {
  tops.disabled = false;
  bottom.disabled = false;
  left.disabled = false;
  right.disabled = false;
}

but_find.onclick = function () {
  timer = 0;
  const text = inp.value.trim();
  if (text !== undefined && text !== "") {
    const arr = document.querySelectorAll(text);
    if (arr.length > 1) {
      but_next.disabled = false;
      but_prev.disabled = false;
    }
    clears(search_sel);
    search_sel = text;
    clears(search_sel);
    button_on();
    try {
      arr[timer].classList.add("select");
    } catch {}
  }
};
but_next.onclick = function () {
  const arr = document.querySelectorAll(search_sel);
  if (arr.length > 1 && timer < arr.length - 1) {
    timer++;
    if (search_sel !== "") {
      clears(search_sel);
      sel === arr[timer];
      arr[timer].classList.add("select");
    }
  }
};
but_prev.onclick = function () {
  const arr = document.querySelectorAll(search_sel);
  if (arr.length > 1 && timer > 0) {
    timer--;
    if (search_sel !== "") {
      clears(search_sel);
      sel = arr[timer];
      arr[timer].classList.add("select");
    }
  }
};

tops.onclick = function () {
  const elem = sel.parentNode;
  if (elem === null) return 0;
  clears(search_sel);
  elem.classList.add("select");
  parent_sel = elem;
  button_off();
};

bottom.onclick = function () {
  const elem = sel.firstElementChild;
  if (elem === null) return 0;
  clears(search_sel);
  elem.classList.add("select");
  parent_sel = elem;
  button_off();
};

left.onclick = function () {
  const elem = document.querySelector(search_sel).previousElementSibling;
  if (elem === null) return 0;
  clears(search_sel);
  elem.classList.add("select");
  parent_sel = elem;
  button_off();
};

right.onclick = function () {
  const elem = document.querySelector(search_sel).nextElementSibling;
  if (elem === null) return 0;
  clears(search_sel);
  elem.classList.add("select");
  parent_sel = elem;
  button_off();
};
