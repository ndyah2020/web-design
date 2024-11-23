let minWidthTablet = 768;
let maxWidthTablet = 991.98;
const bar = document.querySelector(".bar");
// console.log(bar);
const overlay = document.querySelector(".menu-overlay");
const menuContent = document.querySelector(".menu-content");
// console.log(overlay);



bar.addEventListener("click", function () {
    let screenWidth = window.innerWidth;

    console.log("da click bar");
    // Kiểm tra kích thước màn hình
    if (screenWidth <= maxWidthTablet) {
        if (overlay.style.visibility == "hidden" || overlay.style.visibility == "") {
            console.log("Xác nhận hidden");
            overlay.style.visibility = "visible";
            overlay.style.opacity = "1";
            menuContent.style.transform = "translateX(0)";
        } else {
            overlay.style.visibility = "hidden";
            overlay.style.opacity = "0";
            menuContent.style.transform = "translateX(-100%)";
        }
    }
});

overlay.addEventListener("click", function () {
    let screenWidth = window.innerWidth;

    // Kiểm tra kích thước màn hình
    if (screenWidth <= maxWidthTablet) {
        if (overlay.style.visibility == "hidden" || overlay.style.visibility == "") {
            console.log("Xác nhận hidden");
            overlay.style.visibility = "visible";
            overlay.style.opacity = "1";
            menuContent.style.transform = "translateX(0)";
        } else {
            overlay.style.visibility = "hidden";
            overlay.style.opacity = "0";
            menuContent.style.transform = "translateX(-100%)";
        }
    }
});