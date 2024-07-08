if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}
document.getElementById('dark-mode-toggle').addEventListener('change', function() {
  document.body.classList.toggle('dark-mode');
  document.querySelectorAll('.navbar, .button, .footer-icon, .icon-link, .subheader-text').forEach(function(element) {
      element.classList.toggle('dark-mode');
  });
});

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}