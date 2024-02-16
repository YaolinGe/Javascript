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

## CSS selector
- `attribute selectors` 
    - `[attr=value]{}`
    - `[attr~=value]{}`
    - `[attr$=value]{}`
    - `[attr*=value]{}`
    - `[attr|=value]{}`
    - `[attr^=value]{}`
    - `a[href*="meta"]{color: red;}` to select all the links with `meta` in the `href` attribute.
- `nth-of-type` to select the nth element of the type.
    - `element:nth-of-type(n) {property:value;}`
- `nth-child` to select the nth child of the parent.
    - `element:nth-child(n) {property:value;}`
- `*` selector to select all the elements in the document.
- `h1, p{color: blue; text-align: center;}` to apply the same style to multiple elements.
- `#blog h1` are the `descendant selectors` to select the `h1` element inside the `blog` element.
- `#blog > h1` are the `child selectors` to select the `h1` element that is a direct child of the `blog` element.
- `h1 ~ p` are the `general sibling selectors` to select all the `p` elements that are siblings of the `h1` element.
- `h1 + p` are the `adjacent sibling selectors` to select the `p` element that is immediately preceded by an `h1` element.
- `pseudo-classes` such as `:hover`, `:active`, `:focus` are the most important pesudo-classes. 
- `:disabled` and `:enabled` are the pseudo-classes for the form elements, usually for buttons or input fields.
- `:checked` and `:indeterminate` are the pseudo-classes for the form elements, usually for radio buttons or checkboxes.
- `:valid` and `:invalid` are the pseudo-classes for the form elements, usually for input fields.
- `li:nth-child(odd)` to select the odd elements in the list.
- `li:nth-child(even)` to select the even elements in the list.
- `li:first-of-type` to select the first element of the type.
- `li:last-of-type` to select the last element of the type.
- `::first-letter` are pseudo-elements which are different from pseudo-classes, it can be used to style the first letter of the element.
- `::first-line` it can be used to style the first line of the element.
- `::selection` can highlight user-selected text. 
- `::marker` can be used to style the list item marker.
- `::before` and `::after` can be used to insert content before or after the element.
- `a:link` to select the unvisited links.
- `a:visited` to select the visited links.
- `LVHA` is the order of the pseudo-classes, `:link`, `:visited`, `:hover`, `:active`.
- `.alpha.beta` to select the element with both classes `alpha` and `beta`.
- `.alpha .beta` to select the element with class `beta` that
- `p.alpha` to select all alpha class elements inside the `p` element.
- `p, div` to select all `<p>` and `<div>` elements. 
- `p div` to select all `<div>` elements inside the `<p>` element.
- Descendant: `div p` to select all `<p>` elements inside the `<div>` element.
- Child: `div > p` to select all `<p>` elements that are direct children of the `<div>` element.
- Adjacent Sibling: `div + p` to select all `<p>` elements that are immediately preceded by a `<div>` element.
- General Sibling: `div ~ p` to select all `<p>` elements that are siblings of a `<div>` element.
- `[href]` to select all elements with the `href` attribute.
- `[lang="fr"]` to select all elements with the `lang` attribute set to `fr`.
- `[input~=hello]` to select all elements with the `input` attribute set to `hello`.

## Effects 
- `jquery` and `popmotion` are the libraries for the animation using javascript.
- `transform` and `transition` are the css properties for the animation.
- `@keyframes` to define the keyframe for the animation, but it needs to be used with the `animation` property.
- `animation: myanimation 3s infinite ease-in; ` to apply the animation to the element.
- `@keyframes myanimation { from{} to{}}` to define the keyframes for the animation.
- `transform: rotate(45deg) scale(1.5) translate(45px)` can stack a series of animation effect together. 
- `Preprocessor` such as `Sass` and `Scss` can be used to write the css in a more efficient way.
- `@mixin some-rules {color: blue; font-size: 12px;}` to define a mixin and then `@include some-rules;` to include the mixin in the css file.

## Error
- `skill-based error`
- `rule-based error`
- `knowledge-based error` 
    - `overspecifity` is the error that is caused by the overuse of the css selectors.
    

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
