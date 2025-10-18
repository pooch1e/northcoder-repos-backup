# Grid

Similarly to `flex`, CSS Grid works by having a parent element with a `display` property of `grid`. This parent will define rows and columns into which all of its children can be placed. These children will also need grid-specific properties to define which of the parent's rows and columns they will fit into. This is done by using row / column numbers or named `areas` of the grid.

## Useful grid parent properties

- [display: grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout): sets an element to be a grid (or inline-grid) that its children will fit into.
- [grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns): defines the number and size of the columns in the grid.
- [grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows): defines the number and size of the rows in the grid, e.g.

```css
grid-template-columns: 100px auto 100px;
grid-template-rows: 20vh auto;
```

This layout has 3 columns and 2 rows. The left and right columns are fixed to 100px wide and the middle column takes the remaining space. There are 2 rows, the first takes 20% of the viewport height and the second row takes all remaining space.

- [grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas): names areas of the grid that children can occupy. For the above layout, these areas can be named `header`, `nav`, `content` and `aside`.

```css
grid-template-areas:
  "header header header"
  "nav content aside";
```

Here, the `header` spans the whole first row with the others taking the columns underneath.

Each new string represents a row, and the columns are space separated. Areas can span as many rows / columns as you like to make your preferred layout.

## Useful grid child properties

Unlike `flex`, you will have to set some child properties to give the children their places in the grid. By default, children will take the next available grid "cell", which is rarely what we want. They can be positioned explicitly with:

- [grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column): defines which columns the element will take up.
- [grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row): defines which rows the element will take up.

```css
grid-column: 1 / 3;
grid-row: 1 / 4;
```

In a 4 x 4 grid, the above element spans columns 1 -> 2 and rows 1 -> 3. The end row and column are not inclusive.

- [grid-area](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area): defines a named grid area for the element to occupy. This must exist in the parent grid or it will be ignored.

In the above grid layout, an element can take up the whole first row by specifying the grid area of `header`.

```css
grid-area: header;
```

> Note that this property has no quotation marks around `header`, which is notably different from a JS string.
