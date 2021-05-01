// window.setTimeout(()=>{alert("Hello")},3000);
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
  console.log(email, name);
  Swal.fire({
    title: "Success!",
    text: "Message has been sent",
    icon: "success",
    confirmButtonText: "Confirm",
  });
  setTimeout(()=>{
      location.reload();
  },3000)
});
