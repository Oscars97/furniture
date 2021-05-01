// window.setTimeout(()=>{alert("Hello")},3000);
let contact_section = document.getElementById("contact-section");
let btn_contact = document.getElementById("btn-contact");

btn_contact.addEventListener("click",()=>{
    console.log("removing hidden class");
    contact_section.classList.remove("hidden");
})