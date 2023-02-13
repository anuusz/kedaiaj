let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back :(";
});
windown.addEventListener("Focus", () => {
  document.title = docTitle;
});