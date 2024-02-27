// let h1 = d3.select("h1");
// console.log(h1);

// let p = d3.selectAll("p");
// p.attr("style", "color: red");

// let newP = d3
//   .select(".Main")
//   .append("p")
//   .attr("style", "color: orange")
//   .text("This is new paragraph");

let body = d3.select("body");
let width = 300;
let height = 300;

let svg = body.append("svg").attr("width", width).attr("height", height);
svg
  .append("circle")
  .attr("cx", 50)
  .attr("cy", 40)
  .attr("r", 10)
  .attr("fill", "yellow")
  .attr("stroke", "orange");

svg.append("rect").attr("x", 0)
    .attr("y", height/2)
    .attr("width", width)
    .attr("height", height/2)
    .attr("fill", "blue")