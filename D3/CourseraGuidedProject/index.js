// let h1 = d3.select("h1");
// console.log(h1);

// let p = d3.selectAll("p");
// p.attr("style", "color: red");

// let newP = d3
//   .select(".Main")
//   .append("p")
//   .attr("style", "color: orange")
//   .text("This is new paragraph");

// let body = d3.select("body");
// let width = 300;
// let height = 300;

// let svg = body.append("svg").attr("width", width).attr("height", height);

// // svg
// //   .append("circle")
// //   .attr("cx", 50)
// //   .attr("cy", 40)
// //   .attr("r", 10)
// //   .attr("fill", "yellow")
// //   .attr("stroke", "orange");

// // svg.append("rect").attr("x", 0)
// //     .attr("y", height/2)
// //     .attr("width", width)
// //     .attr("height", height/2)
// //     .attr("fill", "blue")

// let data = [1, 2, 3, 4, 6, 10];
// let circles = d3.select("svg").selectAll("circle").data(data).enter().append("circle").attr("cx", function(d, i){return i * 20 + 20}).attr("cy", 30).attr("r", function(d){return d})
// let circles = d3.selectAll("circle"); 
// circles.data(data).attr("cx", (d, i) => i * 20).attr("cy", 10).attr("r", (d) => d);
// console.log(circles); 

// let circle = svg.append("circle"); 
// circle.data(data); 
// console.log(circle); 

// let index = 0; 
// data.forEach((e) => {
//   let circle = svg
//     .append("circle")
//     .attr("cx", 20 * index + 20)
//     .attr("cy", 20)
//     .attr("fill", "red")
//     .attr("r", e);
//   index += 1;
// });
// console.log("hello")

let body = d3.select("body");
let width = 300;
let height = 300;

let svg = body.append("svg").attr("width", width).attr("height", height);

// d3.json("./Dataset/data.json").then(function(data){
//   console.log(data); 
// })

console.log("hello")

let data = [
  {"name": "john", "grade": 32},
  {"name": "jane", "grade": 45},
  {"name": "joe", "grade": 59},
  {"name": "jill", "grade": 78},
  {"name": "jack", "grade": 90}
]

svg.selectAll("rect").data(data).enter().append("rect")
                  .attr("x", 0)
                  .attr("y", (d, i) => i * 18 + 10)
                  .attr("width", (d) => d.grade * 5)
                  .attr("height", 15)
                  .attr("fill", "orange")

svg.selectAll("text").data(data).enter().append("text")
                  .attr("x", 5)
                  .attr("y", (d, i) => i * 18 + 20)
                  .text(d=>d.name)
                  .attr("font-size", "10px")