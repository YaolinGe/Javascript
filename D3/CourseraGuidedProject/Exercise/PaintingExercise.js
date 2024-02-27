let body = d3.select("body");
let width = 748;
let height = 748;

let svg = body.append("svg").attr("width", width).attr("height", height);

svg
.append("rect")
.attr("x", 0)
.attr("y", 0)
.attr("width", width)
.attr("height", height)
.attr("fill", "#add8e6")

svg
.append("rect")
.attr("x", 0)
.attr("y", 450)
.attr("width", width)
.attr("height", height)
.attr("fill", "#008000")

svg
.append("circle")
.attr("cx", 130)
.attr("cy", 130)
.attr("r", 60)
.attr("fill", "#FFa500")
.attr("stroke-width", 2)
.attr("stroke", "#ffea00")

svg 
.append("rect")
.attr("x", 450)
.attr("y", 350)
.attr("width", 200)
.attr("height", 250)
.attr("fill", "#a52a2a")

svg 
.append("rect")
.attr("x", 475)
.attr("y", 500)
.attr("width", 50)
.attr("height", 100)
.attr("fill", "#000000")

svg
.append("circle")
.attr("cx", 482)
.attr("cy", 550)
.attr("r", 3)
.attr("fill", "#ffffff")

svg 
.append("rect")
.attr("x", 550)
.attr("y", 420)
.attr("width", 70)
.attr("height", 70)
.attr("fill", "#000000")
.attr("stroke-width", 2)
.attr("stroke", "#ffffff")

svg 
.append("rect")
.attr("x", 400)
.attr("y", 350)
.attr("width", 300)
.attr("height", 40)
.attr("fill", "#000000")
