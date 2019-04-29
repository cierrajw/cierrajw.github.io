let educationModal = $(".education-modal");
let portfolioModal = $(".portfolio-modal");
let experienceModal = $(".experience-modal");
let blogModal = $(".blog-modal");
let contactForm = $(".contact-form");
let closeButton = $(".close-btn");
let links = $(".nested-grid");

links.on('click', openModal);

closeButton.on('click', closeModal);

function openModal(){
  let clickedElement = event.target;

  switch(true){
    case clickedElement.classList.contains('education'):
    educationModal.show();
    break;
    case clickedElement.classList.contains('experience'):
    experienceModal.show();
    break;
    case clickedElement.classList.contains('contact'):
    contactForm.show();
    break;
    case clickedElement.classList.contains('blog'):
    blogModal.show();
    break;
  }
}

function closeModal(){
  // if($(".modal").classList.contains('close-btn')){
  //   event.target.hide();
  // }
  educationModal.hide();
  portfolioModal.hide();
  experienceModal.hide();
  contactForm.hide();
  blogModal.hide();
}
