let contact_section = document.getElementById("contact-section");
let btn_contact = document.getElementById("btn-contact");
let form = document.getElementById("contact-form");

btn_contact.addEventListener("click", () => {
  console.log("removing hidden class");
  // document.getElementById("come-back").classList.remove("hidden");
  contact_section.classList.remove("hidden");
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  let message = document.getElementById("message").value;
  console.log(email, name, message);
  const params = {
    name,
    email,
    message,
  };
  emailjs.send("service_xq6gvoo", "template_266h0rh", params).then((res) => {
    Swal.fire({
      title: "Success!",
      text: "Message has been sent",
      icon: "success",
      confirmButtonText: "Confirm",
    });
    setTimeout(() => {
      location.reload();
    }, 2500);
  });
});
