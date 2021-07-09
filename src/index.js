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
  continue() {

    function render(i) {
      const root = document.querySelectorAll(".main-form__root")[0];
      const product = document.createElement("p");
      product.classList.add("main-form__title");
      product.textContent = `Product ${i+1}`;
      const keyword = document.createElement("p");
      keyword.classList.add("main-form__text");
      keyword.textContent = "Enter main keyword for the product";
      const example = document.createElement("input");
      example.classList.add("main-form__input");
      example.placeholder = "for example, sylicon wine cup";
      example.type = "text";
      const link = document.createElement("p");
      link.classList.add("main-form__text");
      link.textContent = "Enter link to the similar product as a reference";
      const http = document.createElement("input");
      http.placeholder = "https://...";
      http.type = "text";
      http.classList.add("main-form__input");
      root.appendChild(product);
      root.appendChild(keyword);
      root.appendChild(example);
      root.appendChild(link);
      root.appendChild(http);
    }

    let arr = Array.from(
      this.el.parentNode.querySelectorAll(".radio-form__radio")
    );
    arr.forEach((x, index) => {
      console.log(x.checked);

      if (x.checked && index == 0) {
        for (let i = 0; i < 5; i++) {
          render(i)
        }
      }
      else if(x.checked && index == 1){
        for (let i = 0; i < 4; i++) {
          render(i)
        }
      }
      else if(x.checked && index == 2){
        for (let i = 0; i < 3; i++) {
          render(i)
        }
      }
      else if(x.checked && index == 3){
        for (let i = 0; i < 2; i++) {
          render(i)
        }
      }
      else if(x.checked && index == 4){
          render(1)
      }
    });
  }
}

class Transition {
  constructor(el, f, currentf, preloader) {
    this.el = el;
    this.f = f;
    this.currentf = currentf;
    this.preloader = preloader;
  }
  move() {
    this.el.addEventListener("click", (e) => {
      e.preventDefault();
      this.currentf.classList.add("hide");
      this.f.classList.remove("hide");
      this.f.classList.add("anim");
    });
  }
  submit() {
    this.el.addEventListener("click", (e) => {
      e.preventDefault();
      let a = this.el.textContent;
      this.el.textContent = "";
      this.preloader.style.display = "flex";

      setTimeout(() => {
        this.currentf.classList.add("hide");
        this.f.classList.remove("hide");
        this.f.classList.add("anim");
        this.el.textContent = a;
        this.preloader.style.display = "none";
      }, 1000);
    });
  }
}
const button = document.querySelector(".main-form__button");
const buttonSub = document.querySelectorAll(".main-form__submit")[0];
const buttonBack = document.querySelectorAll(".main-form__submit")[2];
const buttonNext = document.querySelectorAll(".main-form__submit")[1];
const buttonTryAgain = document.querySelector(".main-form__submit_red");
const preloader = document.querySelector(".preloader");
const form1 = document.querySelectorAll(".main-form")[1];
const form2 = document.querySelectorAll(".main-form")[0];
const formBack = document.querySelectorAll(".main-form")[2];
const formTryAgain = document.querySelectorAll(".main-form")[3];
const formNext = document.querySelectorAll(".main-form")[1];

const transition = new Transition(button, form1, form2);
const submit = new Transition(
  buttonSub,
  Math.random() >= 0.5 ? formBack : formTryAgain,
  form2,
  preloader
);
const back = new Transition(buttonBack, form2, formBack);
const tryAgain = new Transition(buttonTryAgain, form2, formTryAgain);
const next = new Transition(buttonNext, form2, formNext);
transition.move();
submit.submit();
back.move();
tryAgain.move();
next.move();
