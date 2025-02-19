const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.target.elements.email.value.trim();
  const pass = event.target.elements.password.value.trim();

  if (!email || !pass) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: email,
    pass: pass,
  };

  console.log(formData);

  form.reset();
}
