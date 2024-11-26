const navItems = document.getElementsByTagName("a");

for (let i = 0; i < navItems.length; i++) {
  //   console.log(navItems[i]);
  const navBar = navItems[i];
  navBar.style.backgroundColor = "#27374D";
  navBar.style.fontWeight = "bold";
}
