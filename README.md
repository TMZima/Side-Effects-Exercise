# Side Effects Exercise

## Star Destroyer 🌠

Hello, future software developer! In this exercise, we will practice the powerful hooks `useEffect` and `useRef` in React by creating a Star Destroyer application. 💫

Your main goal is to build an application that scans space for stars. Every 2.5 seconds, it finds a new star in a random position. With the power vested in your application, you will be able to click on these stars and destroy them on contact.

## Component Design 🎨

The Spacecraft Builder application will consist of several components, each dedicated to handling a distinct segment of the application's functionality. Here's a breakdown of the components you'll develop and their roles:

- `Space` represents the vast expanse of space. It is responsible for generating stars at random locations within its bounds every 2.5 seconds and manages the lifecycle of these stars.
- `Star` represents individual stars that are randomly placed in space. These components need to be focusable and destructible upon user interaction.

```mermaid
graph
    Space --> Star

```

## Tasks 📋

- Implement a `Space` component to manage stars.
  - Implement the logic to generate stars at random positions within the viewport (Hint: x position is `window.innerWidth - STAR_SIZE` multiplied by a random number within 0 and 1). Each star should have a unique identifier.
  - Implement a function to destroy a star by its ID.
  - Use `useEffect` to set up an interval that adds a new star to space every 2.5 seconds.
  - Ensure that you properly clean up the interval to avoid memory leaks and ensure performance efficiency.
  - Render `Star` for each star.
- Implement a `Star` component that positions the star and allows user interaction.
  - Take its ID, position, and a callback function to destroy the star on the user click.
  - Position the star. (Hint: you can use `style={{left: position.x, top: position.y}}` and don't forget to use absolute positioning.)
  - Use `useRef` to manage focus on individual stars on the first render. Add some effect when it is focused, such as adding a shadow. (Hint: To make a `div` focusable, you need to add `tabIndex="0"` to it.)
  - Handle click events on stars to destroy them, removing them from the state in the `Space` component and thus from the viewport.

Happy coding!

## Starter Code 🌱

Either use your cleaned-up "Hello, World!" application from the Vite exercise or create a new project using Vite as the starter code.
