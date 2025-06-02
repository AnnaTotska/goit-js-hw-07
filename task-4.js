const form = document.querySelector(".login-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    return alert("All form fields must be filled in");
  }
  const formValue = {
    email: emailValue,
    password: passwordValue,
  };
  console.log(formValue);
  event.currentTarget.reset();
});
