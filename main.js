let educationModal = $(".education-modal");
let portfolioModal = $(".portfolio-modal");
let experienceModal = $(".experience-modal");
let blogModal = $(".blog-modal");
let profileModal = $(".profile-modal");
let contactForm = $(".contact-form");
let closeButton = $(".close-btn");
let links = $(".nested-grid");

links.on('click', openModal);

closeButton.on('click', closeModal);

function openModal(){
  let clickedElement = event.target;

  switch(true){
    case clickedElement.classList.contains('contact'):
    contactForm.show();
    break;
    case clickedElement.classList.contains('blog'):
    blogModal.show();
    case clickedElement.classList.contains('profile'):
    profileModal.show();
    break;
  }
}

function closeModal(){
  contactForm.hide();
  blogModal.hide();
  profileModal.hide();
}
