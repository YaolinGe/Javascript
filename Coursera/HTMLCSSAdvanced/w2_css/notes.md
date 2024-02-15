# Advanced css notes
- layout includes `flexbox` and `grid` and `boxes`. `box` has `inline` or `block`. 
- `flexbox` is a one-dimensional layout method for laying out items in rows or columns.
- `grid` is a two-dimensional layout method for laying out items in rows and columns, maybe lead to more complex layout and calculation. 
- `flexbox` suitable for small scale layout
- `grid` suitable for large scale layout

## Flexbox
- `justify-content` to adjust items on main axis. 
- `align-items` to adjust items on cross axis.
- `align-self` to adjust individual item on cross axis.
- `align-content` to pack flex lines and control over space. 
- `flex-wrap` to control items on main axis.
- `flex-direction` to change the direction of main axis.
- `flex-grow` to grow the item if there is extra space, it can only be `1` or `0` to grow or not to grow.
- `flex-shrink` to shrink the item if there is not enough space, it can only be `1` or `0` to shrink or not to shrink.
- `flex-basis` to set the initial size of the item, it can be any valid size. 
- `*` is the universal selector, it can be used to select all elements in the document.
- type `.row` to create a div with class `row` in the html file. 
- type `.label` to create a div with class `label` in the html file. 
- `flex: 1;` is equivalent to `flex:1 1 0;`

## Grid 
- `gutter` is the space between the columns, or gaps. 
- `repeat(3, 100px)` to repeat the column 3 times with 100px width.
- `grid-template-columns` to define the columns. 
- `grid-template-rows` to define the rows.
- `grid-auto-rows: measurement unit` to define the rows automatically, but fixed values for all rows.
- `grid-auto-columns` to define the columns automatically.
- `grid-template-rows: measurement units | % units | repeat()` to define the rows. 
- `grid-column: 1/ span 12;` for the item to span 12 columns starting from the first column.

## Units
- Absolute values
    - `Q` is a unit of measurement that is equal to 1/40th of a centimeter.
    - `mm` -> millimeter
    - `cm` -> centimeter -> 1cm = 37.8px = 25.2/64in
    - `in` -> inch -> 1in = 96px = 2.54cm
    - `px` -> pixel -> 1px = 1/96in = 0.26mm
    - `pt` -> point -> 1pt = 1/72in = 0.35mm
    - `pc` -> pica -> 1pc = 12pt = 1/6in = 4.2mm
- Relative values 
    - `em` -> font size of the parent where present.
    - `ex` -> x-co-ordinate or height of the font element. 
    - `ch` -> width of the font character.
    - `rem` -> font size of the root element.
    - `lh` -> line height of the element.
    - `rlh` -> line height of the root element.
    - `vw` -> 1% of the viewport's width.
    - `vh` -> 1% of the viewport's height.
    - `vmin` -> 1% of the viewport's smaller dimension.
    - `vmax` -> 1% of the viewport's larger dimension.
