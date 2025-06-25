const role = localStorage.getItem("role") || "user";

if (role !== "admin") {
  alert("Access Denied! Admins only.");
  window.location.href = "page1.html"; 
}
