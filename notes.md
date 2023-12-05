# Notes for javascript

## Intro to javascript
- `<script src="/path/to/scripts.js"></script>` to add path to many javascripts files that are in a separate folder.
- `src` is specified, then the script content is ignored.
- `<script src="file.js"></script>
<script>
  alert(1);
</script>` to show two different ways of adding javascript to a page.
- `use strict` should be on the top of the file.
- `use strict` is a directive that indicates that the code should be executed in "strict mode", thus only modern style is allowed.
- `camelCase` for constants which are not known prior the execution.
- `CAPITAL_LETTERS` for constants which are known prior the execution. Hard-coded values.
- `null` does not mean a null pointer, but rather do nothing, empty etc.
- `undefined` is values not assigned.
- `typeof ` gets the type of the operand.
- `prompt(title, [default])` shows that `[]` is optional, but not required.
- `confirm(question); ` ask the question and have two buttons.
- `alert('1' + 2)` will output `12` as `string` forces the other number to be converted to a string too. This happens only with `+`, but not `-`, `/`, `*` or any other operators.
- `===` to conduct the strict equality check.
- `null == undefined` is correct, but not other variants.
- `alert(null || undefined || 0)` will show the last value if all of them are falsy. 
- `alert(1 && 5)` returns 5, and `&&` returns the first falsy value. 
- `&&` has higher precedence than `||`
- `!!` can be used to convert a value to boolean value from string or other types. 
- `!` has the highest precedence, so it will be executed first. 
- `??` returns the first defined value. 
- `for(;;)` creates an infinite loop. 
- `return; ` will give undefined for the function. 


#### String
- `backticks` are used to make strings connect with each other.


stop at 2.4 variable
