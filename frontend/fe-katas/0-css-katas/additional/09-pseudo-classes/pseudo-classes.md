# Pseudo-classes

Sometimes, elements need to change their style or behaviour depending on their current state. For example, we may want a text link to have a different colour when we've already visited that link before. Or, perhaps we have a button that changes colour when we hover over it.

In CSS, we achieve this using **pseudo-classes**. Pseudo-classes are keywords that we add to CSS selectors in order to specify their look or behaviour in a particular state.

> "Pseudo" is pronounced "_syoo_-doh" or "_soo_-doh".

Here we'll show you three common examples, but there are [many pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) to choose from.

---

## :hover

The `:hover` pseudo-class selects an element when the mouse cursor is over it.

```css
.button {
  background-color: #0099ff;
}

.button:hover {
  background-color: #00ff99;
}
```

> As you might have guessed, `:hover` doesn't work on mobile or tablet devices. These devices don't have cursors with which you can hover over elements.

## :disabled

The `:disabled` pseudo-class provides conditional styling to HTML elements that can usually receive user input, but that have been given the "disabled" attribute in the HTML so that they can no longer receive input.

Have you ever filled out a web form and noticed that the "Submit" button was "greyed-out" until all the fields have been filled in? That's `:disabled` at work.

```css
.button {
  background-color: #0099ff;
}

.button:disabled {
  background-color: #999999;
}
```

## :focus

The `:focus` pseudo-class is used for styling an element that is currently targeted by the keyboard or activated by the mouse. That could mean that it's been clicked on with a cursor, tapped on if it's on a mobile device, or selected with the Tab key.

`:focus` can be incredibly useful when addressing accessibility concerns. [This is a great resource](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) for designing useful focus indicators.

By default, an element that has been brought into focus will have a "focus ring" around it. In many of the most common browsers, this will look like a blue border with slightly rounded corners.
