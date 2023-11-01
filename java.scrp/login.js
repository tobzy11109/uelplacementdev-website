document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const role = document.querySelector("select[name='role']").value;
  const username = document.querySelector("input[name='username']").value;
  const password = document.querySelector("input[name='password']").value;

  if (role === "admin" && username === "Username 1" && password === "Password") {
    window.location.href = "admin dashboard.html";
  } else if (role === "tpo") {
    window.location.href = "tpo dashboard.html";
  } else if (role === "student") {
    window.location.href = "student_dashboard.html";
  } else {
    // Handle invalid credentials or other cases here
    alert("Invalid username or password for the selected role.");
  }
});
