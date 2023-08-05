export const handleScroll = (event) => {
  var dest;

  switch (event.target.innerText) {
    case "Home":
      dest = "#welcome-section";
      break;
    case "About":
      dest = "#about-me";
      break;
    case "Work":
      dest = "#projects";
      break;
    case "Contact":
      dest = "#contact";
      break;
  }

  const anchor = document.querySelector(dest);
  anchor.scrollIntoView();
};
