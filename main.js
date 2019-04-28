var educationModal = $(".education-modal");
var portfolioModal = $(".portfolio-modal");
var experienceModal = $(".experience-modal");
var links = $(".nested-grid");
var closeButton = $(".close-btn");

links.on('click', openModal);

closeButton.on('click', closeModal);

function openModal(){
  var clickedElement = event.target;

  switch(true){
    case clickedElement.classList.contains('education'):
    educationModal.show();
    break;
    case clickedElement.classList.contains('portfolio'):
    portfolioModal.show();
    break;
    case clickedElement.classList.contains('experience'):
    experienceModal.show();
    break;
  }
}

function closeModal(){
  educationModal.hide();
  portfolioModal.hide();
  experienceModal.hide();
}
