# ScribblePad
An interactive digital whiteboard featuring freehand drawing, color selection, adjustable brush sizes, and eraser functionality.


A lightweight, OneNote-inspired drawing and note-taking app built with **HTML, CSS, JavaScript, and the Canvas API**.

> A clean canvas-based workspace for quick sketches, handwritten notes, and freeform ideas.

---

## 🌟 Features

🎨 **Color Picker**
Choose from multiple pen colors and switch styles instantly.

📏 **Adjustable Brush Width**
Use the slider to change pen thickness in real time.

🧽 **Eraser Mode**
Toggle eraser mode to remove strokes easily.

🖌️ **Smooth Freehand Drawing**
Draw naturally with rounded line caps and joins for a cleaner look.

🖥️ **Full-Screen Canvas**
The entire remaining screen is available for scribbling and note-taking.

📱 **Responsive Layout**
The toolbar and canvas adapt to different screen sizes.

-----------------------------------------        
| Toolbar                               |
| [Colors] [Pen Width] [Eraser]         |
-----------------------------------------
|                                       |
|                                       |
|                                       |
|          Drawing Canvas               |
|                                       |
|                                       |
-----------------------------------------

---

app
│
├── toolbar
│   │
│   ├── colors
│   │   ├── black
│   │   ├── red
│   │   ├── blue
│   │   └── green
│   │
│   ├── brush-size
│   │   └── range input
│   │
│   └── eraser
│       └── button
│
└── canvas


## 🛠️ Tech Stack

* HTML5
* CSS3
* Vanilla JavaScript
* HTML Canvas API

---

## 📚 What I Learned

This project helped me practice:

* DOM selection and manipulation
* Event handling with `click`, `input`, `mousedown`, `mousemove`, `mouseup`, and `resize`
* State management using variables like:

  ```js
  currentColor
  currentWidth
  isDrawing
  isErasing
  ```
* Canvas drawing methods like:

  * `beginPath()`
  * `moveTo()`
  * `lineTo()`
  * `stroke()`
* Responsive UI structure and clean component design

---

## 🧠 Project Highlights

The app is built around a simple drawing workflow:

```text
Select color
   ↓
Choose brush width
   ↓
Toggle eraser if needed
   ↓
Draw freely on the canvas
```

It also taught me an important canvas behavior: resizing the canvas clears the drawings, so canvas size management needs careful handling.

---

## 📁 Folder Structure

```text
SketchNote/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

---

## 🚀 Future Improvements

Planned upgrades include:

* Clear Canvas button
* Download as PNG
* Undo / Redo
* Custom color picker
* Touch support for mobile devices
* Save notes using Local Storage
* Multiple pages or notebook sections

---

## 📸 Preview

Add a screenshot here once the app is ready:

```md
![SketchNote Preview](./assets/preview.png)
```

---

## 🔗 Live Demo

Add your deployed link here:

```md
[Live Demo](https://your-deployment-link.vercel.app)
```

---

## 🎯 Project Goal

This project was created to strengthen my frontend fundamentals and understand how interactive browser tools are built from scratch using only vanilla web technologies.

---

## 👨‍💻 Author

**Aryan**

Built as part of my frontend learning journey.
