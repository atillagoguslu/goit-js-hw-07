const tamForm = document.querySelector(".login-form");
const email = document.querySelector("#emailID");
const password = document.querySelector("#passwordID");
const gonder = document.querySelector("#submitButtonID");

const formDegerleri = {
  email: "",
  password: "",
};

function submitForm() {
  console.log("Form submitted successfully");
  formDegerleri.email = email.value;
  formDegerleri.password = password.value;
  console.log(formDegerleri);
  tamForm.reset();
}

gonder.addEventListener("click", (event) => {
  event.preventDefault();

  if (password.value === "" || email.value === "") {
    alert("Fields must be filled!");
  } else if (!email.value.match("@")) {
    alert("Please enter a valid email!");
  } else {
    submitForm();
  }
});
