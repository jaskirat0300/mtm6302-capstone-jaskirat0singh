# mtm6302-capstone-jaskirat0singh
 

# Pokemon Web Application Prototype - Report

## Overview
 The application consists of three main pages: the **Pokemon Gallery**, **Caught Pokemon**, and **Pokemon Detail**. Additionally, it includes JavaScript functionality to dynamically generate Pokémon cards on the Gallery and Caught Pokémon pages, along with navigation to detailed Pokémon pages.

## Steps Taken

1. **Page Layout Design**:
    - Three HTML files were created to structure the application: `index.html` (Pokemon Gallery), `caughtpokemon.html` (Caught Pokemon), and `pokemondetail.html` (Pokemon Detail).
    - The layout for each page includes a header with a logo and navigation bar, a main content section with Pokémon information or a gallery, and buttons for interactions.
    - A consistent style was maintained across all pages using a single `style.css` file to apply flexbox-based layouts and responsive designs.

2. **Pokemon Card Rendering**:
    - JavaScript was used to dynamically generate Pokémon cards for the Pokémon Gallery and Caught Pokémon pages. An array of Pokémon names and images was stored and iterated through to render each card into the DOM.
    - Each card displays the Pokémon's name and includes a "View Image" button that links to the detailed Pokémon page (`pokemondetail.html`).

## Resources Used

1. **HTML & CSS**: 
    - HTML and CSS were used to create the structure and style of the Pokémon application. Flexbox was employed to achieve responsive design, and the layout was made mobile-friendly.
    - External resources like Pokémon placeholder images were used temporarily for visual representation.

2. **JavaScript**:
    - JavaScript was used extensively to dynamically generate and display content in the Pokémon Gallery and Caught Pokémon pages.
    - Methods such as `document.createElement()` and `appendChild()` were used to manipulate the DOM and render the Pokémon cards.


## Challenges Faced

1. **Dynamic Rendering**:
    - One of the main challenges was implementing the dynamic rendering of Pokémon cards. Initially, rendering hardcoded cards was simple, but generating the cards dynamically using JavaScript required careful manipulation of the DOM.
    - Creating the appropriate HTML structure (image, name, and button) for each Pokémon programmatically and ensuring that all components were appended correctly to the container took some troubleshooting.

