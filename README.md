# Etch-A-Sketch Web App

A modern, interactive Etch-A-Sketch application built with **HTML5, CSS3, and Vanilla JavaScript**. Users can draw, erase, or color cells dynamically, customize the grid size, and enjoy a sleek, responsive UI.

---

## Features

- **Dynamic Grid:** Choose grid size from 4×4 to 80×80.  
- **Multiple Drawing Modes:**  
  - **Color Mode** – Draw using your selected color.  
  - **Rainbow Mode** – Draw with random vibrant colors.  
  - **Eraser Mode** – Clear cells individually.  
- **Color Picker:** Customizable color selection with live SVG icon update.  
- **Reset Functionality:** Clear the entire grid with a single click.  
- **Responsive UI:** Grid adapts to screen size with subtle hover effects.  
- **Smooth Interactions:** Draw by clicking or dragging the mouse.

---

## Technical Highlights

- **DOM Manipulation:**  
  The app dynamically generates the grid using JavaScript’s Document Object Model (DOM). Each grid cell is a `<div>` created via `document.createElement` and inserted into the container using `appendChild`.

- **Event Handling:**  
  Mouse events (`mousedown`, `mouseover`) allow intuitive drawing. The app tracks mouse state to differentiate between clicks and drags.

- **CSS Grid Layout:**  
  The grid uses `display: grid` with dynamic `grid-template-columns` and `grid-template-rows` to adapt to any grid size.  

- **Responsive Design & UI Effects:**  
  - Hover animations on cells and buttons for smooth feedback.  
  - Shadow, spacing, and subtle color transitions for a professional feel.  

- **JavaScript Logic:**  
  - `switch` statement handles drawing modes efficiently.  
  - Color changes are applied in real-time to the SVG brush icon.  
  - Grid size input is clamped to ensure usability and prevent overflow.

---

<!-- ## Getting Started

1. Clone the repository:  
   ```bash
   git clone <your-repo-link> -->
