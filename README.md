
 📘 Project README

📌 Project Overview

This project is a **static website layout demo** built using **HTML, CSS, and JavaScript** (no frameworks).

It demonstrates:

* Multiple common website layouts
* Component-based structure using plain HTML
* How sections and footers should be structured correctly
* Responsive layouts using CSS Grid and Flexbox



🧠 What We Did in This Project

* Created **one main entry file** (`index.html`)
* Split the page into **logical sections** (Intro, Website Layout, Gallery, Cards, Media Objects)
* Built a **reusable navigation bar**
* Used **CSS Grid and Flexbox** for layouts
* Ensured smooth scrolling between sections using anchor links
* Made the layout responsive for mobile screens



📁 Project Structure

```
project/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── components/
│   └── navbar.html
        footer.html
├── sections/
│   ├── intro.html
│   ├── website.html
│   ├── gallery.html
│   ├── cards.html
│   └── media.html
└── README.md
```


 📄 What Each File/Folder Contains

`index.html`

* Main entry point of the project
* Loads all sections and components
* Contains the **global footer**
* No layout content is hardcoded here



 `components/`

* Currently includes the navigation bar
* Currently includes the footer



`sections/`

* Each file represents a **page section**
* Used to demonstrate different layout patterns
  



`css/style.css`

* Contains **all styling**
* Layouts, colors, responsiveness, animations




 `js/main.js`

* Loads components and sections dynamically
* Keeps HTML clean and modular


▶️ How to Run the Project

 This project uses JavaScript `fetch`, so it **must be run on a local server**.

 Option 1: VS Code (Recommended)

1. Install **Live Server** extension
2. Right-click `index.html`
3. Click **Open with Live Server**

 Option 2: Terminal

* Use any local server (Node, Python, etc.)



 📱 Responsive Design

* Layout adapts to different screen sizes
* Sidebar stacks below content on small screens
* Gallery adjusts columns automatically



 🎯 Purpose of This Project

* Learn real-world HTML structure
* Understand how components work without frameworks
* Avoid common layout mistakes (like misplaced footers)
* Prepare for frameworks like React or Angular



 ✅ Summary

* One entry point
* Modular sections
* Clean structure
* Correct footer placement
* Beginner-friendly architecture

