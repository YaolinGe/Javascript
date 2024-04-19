const canvas = document.getElementById('test');
const ctx = canvas.getContext('2d');


ctx.beginPath();
ctx.moveTo(50, 50); 
ctx.lineTo(200, 200); 
ctx.stroke();

let fruits = ['Apple', 'Orange', 'Mango']
d3.select(".d3_fruit")
.selectAll("p")
.data(fruits)
.join('p')
.attr('class', 'd3_fruit')
.text((d) => d)

d3.select("body")
  .append("svg")
    .attr("width", 960)
    .attr("height", 400)
  .append("g")
    .attr("transform", "translate(10,10)")
  .append("rect")
    .attr("width", 20)
    .attr("height", 40);

// const element = document.querySelectorAll('p');
// element.forEach((el) => {
//     console.log(el); 
//   el.style.color = 'red';
// });

const data = [1, 2, 3, 4, 5]; 

d3.select("body")
.selectAll("p")
.data(data)
.enter()
.append("p")
.text((d) => d); 


// Original method chaining
d3.select("body")
  .append("svg")
    .attr("width", 960)
    .attr("height", 400)
  .append("g")
    .attr("transform", "translate(10,10)")
  .append("rect")
    .attr("width", 20)
    .attr("height", 40);
