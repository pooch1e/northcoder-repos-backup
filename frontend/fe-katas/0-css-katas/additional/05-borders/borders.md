# Borders

Borders allow us to navigate the different elements and content on a page without us even realising they are doing so! They are really powerful design tools!

## CSS Syntax:

There are many ways in which we can style using borders, and we are going to take a look at a few of them here before getting stuck into the kata.

```css
.flag {
  border: solid;
}
```

This is the most basic CSS syntax available to us for styling borders. By default, CSS will set the width and colour of our border if we use this basic syntax. The colour will be set to black.

---

```css
.flag {
  border: dotted red;
}
```

Here, we are being a little bit more specific and specifying a style and a colour for our border. This width will still be set to a default value by CSS.

---

```css
.flag {
  border: 1px solid black;
}
```

In this syntax, we are adding specificity to each part of our border. We have set a `border-width`, `border-style` and `border-color`.

---

> NB - you could also use three individual selectors instead of the shorthand in the above example. See in the example below:

```css
.flag {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

---

CSS will also allow you the option of interchanging which choice of colour designation you would like to use, as well as allowing you to interchange measurement units.

```css
.flag {
  border-width: 0.4rem;
  border-style: solid;
  border-color: #3f3f3f;
}
```

```css
.flag {
  border-width: 1em;
  border-style: dotted;
  border-color: rgb(34, 132, 89);
}
```

> These are also valid ways for designing and styling borders.

---

### Border Radius:

We can also use `border-radius` to style an element's outer border edge!

Using border, we can add a specific amount of radius to each corner using a single value, or if we choose, target each corner individually.

```html
<div class="circle"></div>
```

```css
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
```

The above is a common way in which we can target all corners - an effective way to make a circle, for example! Below is a way in which we can be more specific with our values for each corner:

```html
<div class="shape"></div>
```

```css
.shape {
  width: 150px;
  height: 300px;
  border-radius: 10px 2rem 5% 40px;
}
```

> Note how we can use different unit values when creating our borders. General consensus would be to stick to one though, as it makes for much cleaner and easier to understand code.
