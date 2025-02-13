const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {};
  const login = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  formData.login = login;
  formData.password = password;

  if (login === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log(formData);
  form.reset();
});
