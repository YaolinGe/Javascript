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
- `label: ` to jump out from a nested function for many levels.
- ```{javascript}
describe("pow", function() {
  it("raise to n-th power", function() {
    assert.equal(pow(2, 3), 8);
    });
  });
``` to create testing functionalities, `Mocha`, `Chai`, `Sinon` different frameworks.
- `polyfills` and `transpilers` can be useful tools.


==== Most of those fundamental code are in 2.18, Javascript specials ====

#### Debugging in Chrome
- `Sources` in the tab to find all source files and elements.
- Press `ESC` to make it show console and execute commands.
- `debugger` can be added to the code to make it stop.
- split code into logical blocks to make it easier to read and clean.

#### Objects
- `let user = new Object();` to create an object.
- `let user = {};` to create an object.
- `delete user.age` to remove property from an object.
- `user.isAdmin = true; ` to add property to an object.
- `"likes birds": true; ` can be multiword property in an object.
- `user["likes birds"] = true; ` to add multiword property in an object.
- ```{javascript}
function makeUser(name, age) {
  return {
    name: name,
    age: age
  };
}``` to create an object with function.
- ```{javascript}
function makeUser(name, age) {
  return {
    name, // same as name: name
    age   // same as age: age
  };
}``` to create an object with function.
- `let obj = {for:1, let:2, return:3};` to create an object with reserved words.
- `let obj = {}; obj.__proto__ = 5; X` this will not work, as `__proto__` is a special property that must be either an object or null.
- `let user = {}; alert(user.noSuchProperty === undefined);` to check if a property exists. It means javascript can access any property, and if it does not exist, it will return `undefined`. No error will be thrown.
- `alert("blabla" in user); ` to have true or false for the existence of a property.
- `for (let key in user) alert(key);` to loop over keys in an object.
- `for (let key in user) alert(user[key]);` to loop over values in an object.
- if integers as key are used, then they will be sorted in ascending order. Others will be sorted in creation order.
- `const user = { name: "John" }; ` says that the variable `user` will always reference this object, but not the values inside the object.
- `Object.assign({}, user); ` to copy an object. It can also rewrite the object, if the property is already given.
- `let clone = structuredClone(obj); ` to copy an object recursively.
- `let user = {name:"John", age:30, sayHi(){alert(this.name);};` to reference the name inside the object.
- `this` is tricky to use and need more attention.
- `return` can be added to make it return object.
- `let user = new User;` can be used without parenthesis.
-  `user?.address` to check safely before the object is created.
- `Symbol("id").toString()` to explicitly convert symbol to string.
- `Symbol("id").description` to get the description of the symbol.

- I should move on to the D3 library to make some graphs or plots.
- How can I start building something useful.

#### String
- `backticks` are used to make strings connect with each other.



#### Notes
- `document.write()` after the page is loaded will delete the page and write the new content.
