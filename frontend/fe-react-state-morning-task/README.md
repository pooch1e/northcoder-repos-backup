# fe-react-state-morning-task

This morning you'll build on what you learned yesterday about components, props, and `useState`. This short task will help solidify how to manage local state in a reusable component.

## Goal

Create a reusable `Counter` component that uses **React state** to track a number and responds to user interaction.

## Getting Started

Don't forget to fork and clone this repo and install dependencies before running the app using:

```
npm run dev
```

## File Structure

Take a look around the components:

- `App` renders the `Dashboard` component.
- `Dashboard` renders multiple `Counter` components and passes a `title` prop to each one.
- `Counter` is where you'll build the UI and logic to update the count.

## Tasks

1. Replace the hardcoded "Name of counter" with the value of the `title` prop passed into `Counter`.
2. Use `useState` to track the `count` in `Counter`.
3. Add event handlers to the `+` and `-` buttons to increment and decrement the count.
4. Prevent the count from going below 0.
5. Add a **Reset** button that sets the count back to 0.
6. Disable the `-` button when the count is 0.

## Stretch Goal

- Try extending it: could the parent component track the total count across all counters?
