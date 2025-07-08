//Toggle Class Active
const navbarNAV = document.querySelector(".navbar-nav");
//Ketika Humberger Menu DIklik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNAV.classList.toggle("active");
};

//Klik Diluar Sidebar Untuk Menghilangkan Nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNAV.contains(e.target))
    navbarNAV.classList.remove("active");
});
