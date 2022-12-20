/**
 * Lazy-Loader for the comments section
 */
const observer = new IntersectionObserver(commentsSectionIntersecting);

/**
 * Called when the element comes into view
 */
function commentsSectionIntersecting(entries) {
  entries
    .filter(e => e.isIntersecting)
    .forEach(e => {
      window.commento.main();
      observer.unobserve(e.target);
  });
}
 
document.addEventListener("DOMContentLoaded", function() {
  // we only need to observe anything, if there is a commento element on the page
  const commentsElem = document.getElementById("commento");
  if (commentsElem) {
    if (typeof window.commento.main !== "undefined") {
      observer.observe(commentsElem);
    } else {
      // if commento is not available, we remove the comments section
      commentsElem.parentNode.removeChild(commentsElem);
    }
  }
});