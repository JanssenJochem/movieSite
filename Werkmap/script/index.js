// Navigation items inside objects
const navigationItems = [
  {
    itemLink: "https://jochemjanssen.com/Werkmap/Werkmap/index.html",
    itemName: "Home",
  },
  {
    itemLink: "https://jochemjanssen.com/Werkmap/Werkmap/#",
    itemName: "about-me",
  },
];

let navigation = document.getElementById("navigation");
let input = document.getElementById("navigationInput");

for (let i = 0; i < navigationItems.length; i++) {
  let ulNavigationElement = document.createElement("ul");
  let aNavigationElement = document.createElement("a");
  const currentUrl = window.location.href;

  if (
    currentUrl === navigationItems[i].itemLink ||
    (currentUrl == "https://jochemjanssen.com/Werkmap/Werkmap/" &&
      navigationItems[i].itemName == "Home")
  ) {
    aNavigationElement.className = "activeNav";
  }

  aNavigationElement.href = navigationItems[i].itemLink;

  navigation
    .appendChild(ulNavigationElement)
    .appendChild(aNavigationElement).innerHTML = navigationItems[i].itemName;
}

navigation.insertBefore(input, navigation.children[navigationItems.length + 1]);

// Function for responsive navigation
function showResponsiveNavigationMenu() {
  const navigationContainer = document.getElementById("navigationContainer");

  if (navigationContainer.offsetHeight == 0) {
    navigationContainer.style.height = "25rem";
  } else {
    addEventListener("click", (e) => {
      console.log(e.target.id);
    });

    navigationContainer.style.height = "0px";
  }
}
