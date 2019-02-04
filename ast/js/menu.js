class Menu {
  constructor(menu) {

    // Assign this.element to the dropdown element
    this.element = document.querySelector('.menu');

    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.menu-btn');

    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = document.querySelector('.menu-items');

    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', () => {
      this.toggleContent();
    })
  }

  toggleContent() {

    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('z-open');
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let menu = document.querySelectorAll('.menu').forEach( menu => new Menu(menu));
