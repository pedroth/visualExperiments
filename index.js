const { DomBuilder, Card, WebUtils, SearchInput, Nabla, textFit } = Pedroth;
WebUtils.retrieveAndAppend(
  "/static/nav/nav.html",
  document.getElementById("root")
);

window.sizeObservers = [];
function onResize() {
  window.sizeObservers.forEach(obs => {
    obs();
  });
}
window.addEventListener("resize", onResize);
