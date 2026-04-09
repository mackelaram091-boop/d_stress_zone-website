function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();

  let error = document.getElementById("error");
  let success = document.getElementById("success");

  error.innerHTML = "";
  success.innerHTML = "";

  // Check for empty fields
  if (!name || !email || !phone || !message) {
    error.innerHTML = "All fields are required!";
    return false;
  }

  // Basic email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    error.innerHTML = "Please enter a valid email address!";
    return false;
  }

  // Basic phone number validation (digits only, min 7)
  const phonePattern = /^[0-9]{7,15}$/;
  if (!phonePattern.test(phone)) {
    error.innerHTML = "Please enter a valid phone number (7-15 digits)!";
    return false;
  }

  // If all checks pass
  success.innerHTML = "Message sent successfully!";
  // Optionally, clear the form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";

  return false; // prevent actual form submission for demo
}
