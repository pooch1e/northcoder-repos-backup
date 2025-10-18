# Introduction To CSS-Selectors

## What are CSS Selectors?

> CSS Selectors allow us to specify the elements to which a set of CSS rules apply.

### Examples of CSS Selectors:

- **Type Selector** - Selects all elements that have the given element name.

```html
<p>The computer virus wasn't designed to be harmful!</p>

<p>Spacecraft run on 1970s computer coding!</p>

<p>Coding can make you a billionaire...apparently!</p>
```

CSS Syntax:

```css
p {
  letter-spacing: 2px;
}
```

---

- **ID Selector** - Selects an element based on the value of its id attribute.

```html
<div id="example_id">...content</div>
```

CSS Syntax:

```css
#example_id {
  font-size: 1rem;
}
```

---

- **Class Selector** - Selects all elements that have that class attribute.

```html
<p class="greeting">Hello! Welcome to CSS Land!</p>

<p class="greeting">Hey there! You got some style!!</p>

<p class="greeting">
  Howdy partner! If I give you 'de-sign', you know what to do!
</p>
```

CSS Syntax:

```css
.greeting {
  font-weight: bold;
}
```

---

Here are some other CSS Selectors that you can research, but there are many more that we can use when styling with CSS:

- attribute selectors
- child-selectors
