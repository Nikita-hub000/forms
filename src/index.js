class Price {
  constructor(el) {
    this.el = el;
  }
  isChecked() {
    for (
      let i = 0;
      i < this.el.parentNode.querySelectorAll(".radio-form__radio").length;
      i++
    ) {
      this.el.parentNode.querySelectorAll(".radio-form__radio")[
        i
      ].checked = false;
    }
    let bool = false;
    this.el.querySelector(".radio-form__radio").checked = !bool;
    bool = !bool;

    for (
      let i = 0;
      i < this.el.parentNode.querySelectorAll(".radio-form__radio").length;
      i++
    ) {
      this.el.parentNode.querySelectorAll(".radio-form__text")[i].style.color =
        "#A7A2CB";
    }

    this.el.querySelector(".radio-form__text").style.color = "#23C967";
  }
  continue() {}
}

class Transition {
  constructor(el, f, currentf) {
    this.el = el;
    this.f = f;
    this.currentf = currentf;
  }
  move() {
    console.log(this.el);
    this.el.addEventListener("click", (e) => {
      e.preventDefault();
      this.currentf.classList.add("hide");
      this.f.classList.remove("hide");
      this.f.classList.add("anim");
    });
  }
}
const button = document.querySelector(".main-form__button");
const form1 = document.querySelectorAll(".main-form")[1];
const form2 = document.querySelectorAll(".main-form")[0];
const transition = new Transition(button, form1, form2);
transition.move();
