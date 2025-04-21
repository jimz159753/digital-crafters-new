function sendEmail(event) {
    event.preventDefault();

    const serviceID = "service_4hmq3ao";
    const templateID = "template_fiqorhb";
    const publicKey = "RPjZNMABQKUWQUBJC";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    if (!name || !email || !phone || !message) {
        alert("Please fill in all fields.");
        return;
    }
    const params = { name, email, phone, message };

    emailjs.init(publicKey);
    emailjs.send(serviceID, templateID, params)
        .then(() => alert("Message sent!"))
        .catch((error) => alert(`Error: ${JSON.stringify(error)}`));
}