const navLinks = document.querySelectorAll('.nav-link');
const tabContents = document.querySelectorAll('.tab-content');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const tabId = link.getAttribute('data-tab');
    showTab(tabId);
  });
});

function showTab(tabId) {
  tabContents.forEach(content => {
    content.classList.remove('active');
  });
  
  document.getElementById(tabId).classList.add('active');
}
