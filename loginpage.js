document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Login sederhana (hardcoded)
  if (username === "admin" && password === "12345") {
    window.location.href = "home.html";
  } else {
    document.getElementById("error").textContent = "Username atau password salah!";
  }
});
