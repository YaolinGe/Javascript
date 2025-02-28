# CSS notes
- I should use `my-file.html` instead of `my_file.html` to optimize for Google Search Engine.
- Browser reads code from top to bottom, so javascript should be in the bottom if it needs to affect the title in the top.
- `fix` to fix the background image even though I am scrolling.
- `scroll` to let it scroll so that I can move away it.
- `max-width` is used to make sure the browser has the compatible scrolling when it is small screen size.
`direction: rtl;` to change the direction from right to left.
`unicode-bidi: bidi-override` to start from the opposite direction of reading text.
`text-decoration` can be used to highlight some texts here and there.
`text-transform` to transform all letters to uppercase or lowercase.
`white-space: nowrap` to remove auto wrapping so the line gets extremely long.
`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=fire">` can add fire effect to the font.
`<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia&effect=neon|outline|emboss|shadow-multiple">` can separate several effects.
`Font Awesome Icons` or `Bootstrap Icons` or `Google Icons`
`<i class="material-icons">cloud</i>` to create icons for the typed text.
`a:hover` must come after `a:link` and `a:visited`.
`a:active` must come after `a:hover`.
`display: none; ` to hide without deleting the elements.
`visibility: hidden; ` to hide, but layout is still there.
`z-index` to show stack order of an element, but only work on positioned elements.
`overflow` to justify the element when overflow happens.
`clear: left` can push the second element below the previous element which is a `float` element to force it to be at some specific location.
- There are many different ways to align the content according to my wish, so double check which one is the best!
`p:first-child` to select the first child of the selected element.
`q:lang(no)` defines special rules for different languages.
`target="_parent"` is primarily used with hyperlinks `<a>` element. So parent means it will open the new window inside the current frame, `target="_blank"` will open a new browser tab.
`[title~="flower"]` attribute `title` include `flower` inside the name.
`tooltip` to show extra information when user moves the mouse over the selected text.
`tooltip` arrow is made of a square but with no content inside, also the size needs to be small. It can have animation as well.
`css masking` can be a useful tool to produce images that are interesting.
`box-sizing: border-box; ` this makes the weight and height to be inclusive of the padding and border.
`*{box-sizing: border-box;}` to make all the elements to be the same style with `box-sizing` elements.
 


## Online IDE platforms
glitch
codepen
jsbin
jsfiddle


## Visualization for plots
![Plot](https://insights.datylon.com/stories?tags=_Line)
![Plot2](https://www.dataviz-inspiration.com/)
![P3](https://xeno.graphics/)
![P4](https://flourish.studio/examples/)
