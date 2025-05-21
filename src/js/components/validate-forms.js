import JustValidate from "just-validate";
import Inputmask from "../../../node_modules/inputmask/dist/inputmask.es6.js";

const form = document.querySelector(".form");
const telInput = form.querySelector(".input-tel");
const im = new Inputmask("+7 (999) 999-99-99");
im.mask(telInput);

const validation = new JustValidate(".form", {
  errorFieldCssClass: "is-invalid",
  successFieldCssClass: "is-valid",
  errorLabelCssClass: "invalid-feedback",
});

validation
  .addField(".input-name", [
    { rule: "required", errorMessage: "Введите имя" },
    { rule: "minLength", value: 3 },
  ])
  .addField(".input-tel", [
    { rule: "required", errorMessage: "Введите телефон" },
    {
      rule: "function",
      validator: () => telInput.inputmask.unmaskedvalue().length === 10,
      errorMessage: "Введите корректный номер",
    },
  ])
  .addField(".input-email", [
    { rule: "required", errorMessage: "Введите email" },
    { rule: "email", errorMessage: "Неверный email" },
  ])
  .onSuccess(async (ev) => {
    const formData = new FormData(ev.target);
    const response = await fetch("mail.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      alert("Форма успешно отправлена!");
      ev.target.reset();
    } else {
      alert("Ошибка при отправке");
    }
  });
