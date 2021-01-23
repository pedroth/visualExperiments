function getApp(url) {
  console.log("Getting app...", url);
  const div2append = document.getElementById("appContainer");
  const split = url.split("=");
  if (split.length <= 1) {
    WebUtils.retrieveAndAppend("static/notFound.html", div2append);
  } else {
    WebUtils.retrieveAndAppendMarkDown(split[1], div2append);
  }
  // render equations
  console.log("Rendering equations");
  setTimeout(() => {
    MathJax.typeset();
  }, 200);
}
getApp(window.location.href);
