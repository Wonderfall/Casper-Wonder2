const scrollTopBtn = document.querySelector('.js-scroll-top');

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  })

  document.addEventListener("scroll", function(event) {
    const scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
    scrollPos > 60 ? scrollTopBtn.classList.add('is-active') : scrollTopBtn.classList.remove('is-active');
  }, false)
}