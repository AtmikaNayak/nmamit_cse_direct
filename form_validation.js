document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  const email = document.getElementById("email");
  const password = document.getElementById("pw");
  const username = document.getElementById("firstname");

  const emailFeedback = document.getElementById("emailFeedback");
  const passwordFeedback = document.getElementById("passwordFeedback");
  const usernameFeedback = document.getElementById("usernameFeedback");

  // Email validation
  email.addEventListener("input", () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email.value)) {
      emailFeedback.textContent = "Valid email!";
      emailFeedback.className = "valid";
    } else {
      emailFeedback.textContent = "Please enter a valid email address.";
      emailFeedback.className = "error";
    }
  });

  // Password validation
  password.addEventListener("input", () => {
    if (password.value.length >= 8) {
      passwordFeedback.textContent = "Password is strong!";
      passwordFeedback.className = "valid";
    } else {
      passwordFeedback.textContent =
        "Password must be at least 8 characters long.";
      passwordFeedback.className = "error";
    }
  });

  // Username validation
  if(username){
    username.addEventListener("input", () => {
    if (username.value.length >= 4) {
      usernameFeedback.textContent = "Username looks good!";
      usernameFeedback.className = "valid";
    } else {
      usernameFeedback.textContent =
        "Username must be at least 4 characters long.";
      usernameFeedback.className = "error";
    }
  });
  }

  // Submit validation
  form.addEventListener("submit", (event) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !emailPattern.test(email.value) ||
      password.value.length < 8 ||
      (username && username.value.length < 4)
    ) {
      event.preventDefault();
      alert("Please fill out the form correctly before submitting.");
    }
  });
});

