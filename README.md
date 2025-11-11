📘 React – Chapter One
🧠 Topics Covered
1️⃣ Difference Between Library and Framework

Library: A collection of pre-written code that you can call to perform tasks.
👉 You are in control of the flow of the application.
Example: React, NumPy, jQuery

Framework: A structure that provides a complete environment for building applications.
👉 Framework controls the flow, and you plug your code into it.
Example: Angular, Django, Flutter

2️⃣ Functions vs Components
Feature	Function	Component
Definition	Block of code that performs a specific task	Reusable piece of UI in React
Return Type	Returns a value	Returns JSX (UI)
Example	function add(a,b){return a+b;}	function Header(){return <h1>Hello</h1>}

💡 Note:
In React, components can be written as functions — known as Functional Components.

3️⃣ JSX (JavaScript XML)

Full Form: JavaScript XML

JSX allows you to write HTML-like code inside JavaScript.

It makes React code more readable and easier to write.

Example:

const element = <h1>Hello, World!</h1>;


➡️ This gets compiled into:

const element = React.createElement("h1", null, "Hello, World!");

4️⃣ Why JSX is Used

Makes UI code easier to understand

Helps combine logic and layout in one place

Improves developer productivity

5️⃣ Key Points

React is a JavaScript library, not a framework.

Components are the building blocks of React.

JSX is a syntax extension for writing UI elements easily.

🧩 Summary

In this chapter, we learned:

How React is different from a framework

The difference between functions and components

What JSX is and why it’s used in React
