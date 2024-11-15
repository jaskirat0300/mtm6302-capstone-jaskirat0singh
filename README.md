# mtm6302-capstone-jaskirat0singh

# **Pokedex Web Application**

A simple web application that allows users to explore and manage Pokémon data using the [PokeAPI](https://pokeapi.co/). The application displays a gallery of Pokémon, enables users to view Pokémon details, and allows marking Pokémon as "caught." Caught Pokémon are stored in local storage and displayed in a separate section.

---

## **Features**

- Display a gallery of Pokémon (20 Pokémon per page).
- Fetch additional Pokémon using a "Load More" button.
- View detailed information about a selected Pokémon (abilities, types, and image).
- Mark Pokémon as "caught" and manage a caught Pokémon list stored in local storage.
- Responsive design for mobile, tablet, and desktop devices.

---

## **Steps Taken**

### 1. **Project Initialization**
- Set up the project structure with three main files: `index.html`, `style.css`, and `script.js`.
- Designed a simple, user-friendly layout using HTML and CSS.
- Planned the functionality using JavaScript and outlined the API endpoints required.

### 2. **API Integration**
- Integrated the [PokeAPI](https://pokeapi.co/) to fetch Pokémon data.
- Used the `fetch` API to handle asynchronous requests.
- Implemented parsing logic to extract Pokémon IDs from API URLs.

### 3. **Gallery Page**
- Created a grid layout to display Pokémon thumbnails and names.
- Set up a "Load More" button to fetch additional Pokémon.
- Ensured that the gallery dynamically updates with newly fetched data.

### 4. **Detail Page**
- Created a section to display detailed information about a Pokémon, including:
  - A larger image of the Pokémon.
  - A list of its abilities and types.
  - A button to toggle its "caught" status.

### 5. **Caught Pokémon Page**
- Designed a section to display all caught Pokémon.
- Used local storage to persist the caught Pokémon list.
- Added a button to navigate back to the gallery view.

### 6. **Responsive Design**
- Used CSS Grid and Flexbox for a responsive layout.
- Tested the application on multiple screen sizes to ensure compatibility.

### 7. **Navigation**
- Implemented a navigation bar to switch between the Gallery, Detail, and Caught Pokémon sections.
- Added event listeners to handle view toggling without page refresh.

---

## **Challenges Faced**

### 1. **Handling API Responses**
- Parsing Pokémon IDs from the PokeAPI's `url` property was tricky. This was resolved by using a regular expression to extract the ID.

### 2. **State Management**
- Managing the state of "caught" Pokémon across different views required careful handling of local storage and consistent updates in the UI.


 
