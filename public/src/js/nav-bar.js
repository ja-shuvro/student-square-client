export function initializeNavBar() {
  let navItems = document.querySelectorAll(".nav-data-t");
  let subMenuSection = document.querySelector(".sub-menu-section");

  navItems.forEach((navItem) => {
    let navElements = navItem.getAttribute("data-target");

    navItem.addEventListener("mouseover", mouseOverFun);
    navItem.addEventListener("mouseleave", mouseLeaveFun);

    function mouseOverFun() {
      let subMenu = document.getElementById(navElements);
      if (subMenu) {
        subMenu.classList.add("active"); // Show the sub-menu
        subMenuSection.classList.add("activeMain"); // Add class to sub-menu-section
      }
    }

    function mouseLeaveFun() {
      let subMenu = document.getElementById(navElements);
      if (subMenu) {
        subMenu.classList.remove("active"); // Hide the sub-menu
        subMenuSection.classList.remove("activeMain"); // Remove class from sub-menu-section
      }
    }
  });
}
