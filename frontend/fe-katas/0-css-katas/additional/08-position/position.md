# Position

Positioning is one of the most powerful tools available to us in CSS and when you come to designing websites and mobile apps. It is something that will become part of your everyday arsenal of creative tools.

In this kata, we are going to look at three types of positioning (but there are more for you to look up in your own time!).

---

## Relative positioning

We use `position:relative` when we want to position something relative to its normal position.

Relative positioning works alongside directional properties: `top`, `bottom`, `left` and `right`. Adding length values to these properties (e.g. `10px`, `2rem` etc.) allows us to place the element exactly where we need it to be.

For example, adding `right: 10px;` will move this element ten pixels away from the right edge of its normal position. This might seem confusing at first - `right: 10px;` moves our element to the _left_ instead of the _right_ - but it might help to think of this property as declaring **the distance away from the named edge**.

```css
.box {
  position: relative;
}
```

---

## Absolute positioning

We use `position:absolute` when we want to position an element relative to its parent element.

If none of its parent elements has an attribute of `position: relative`, then by default the element will absolutely position itself to `0, 0` (**top left**) of the `body` element in the HTML, before applying any values from directional properties.

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
.parent {
  width: 400px;
  height: 400px;
  position: relative;
}

.child {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 30px;
  left: 30px;
}
```

<img src="./css-example.png" alt="box sizing after" width="400"/>

In the example above, the left image shows the default positioning of the **child** element when setting its position to **absolute**. The right image shows how the square changes position when the `top` and `left` properties are each set to 30px.

---

## Fixed positioning

We use `position:fixed` when we want to position an element relative to the browser window, _regardless of the scroll position of the page_.

One of the most common uses of this styling is to fix the header of your website to the top of the page, keeping it constantly visible, whilst the rest of the page has normal scrolling functionality. It gives the appearance of the page content moving behind the header as you scroll.

```css
.box {
  position: fixed;
}
```
