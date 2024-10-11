function dataIsReady(csv) {
  console.log(csv);
}

d3.csv("data/data.csv").then(dataIsReady);

// d3.select("circle")
//   .attr("cx", 100)
//   .attr("cy", 100)
//   .attr("r", 50)
//   .style("fill", "red");

// d3.select("svg")
//   .append("circle")
//   .attr("cx", 50)
//   .attr("cy", 50)
//   .attr("r", 50)
//   .style("fill", "blue");

// d3.select("svg")
//   .append("circle")
//   .attr("cx", 150)
//   .attr("cy", 150)
//   .attr("r", 50)
//   .style("fill", "green");

// d3.select("svg")
//   .attr("width", 1200)
//   .attr("height", 900);

// d3.select('circle')
//     .classed('highlighted', true);

// d3.select('circle')
//     .classed('highlighted', false);

// d3.select('div')
//     .text('Hello, world!')
//     .classed('highlighted', true)
//     .classed('item', true)
//     .classed('test1 test2', true)

let myData = [10, 40, 30];

// d3.select('g.container')
//     .selectAll("circle")
//     .data(myData)
//     .join("circle")
//     .attr("cx", (d, i) => i * 100 + 50)
//     .attr("cy", 50)
//     .attr("r", d => d)
//     .style("fill", "red");

// d3.select('g.container')
//     .selectAll('circle')
//     .data(myData)
//     .join('circle')
//     .attr('cx', function(d, i){
//         return i * 100 + 50;
//     })
//     .attr('cy', 100)
//     .attr('r', function(d){
//         return 1.25 * d;
//     })
//     .style('fill', function(d)
// {
//     if (d > 30)
//     {
//         return 'red'; 
//     }
//     return "#aaa";
// })

// d3.select('g.barchart')
//     .selectAll('rect')
//     .data(myData)
//     .join('rect')
//     .attr('width', function(d){
//         return d^2; 
//     })
//     .attr('height', 5)
//     .attr('y', function(d, i){
//         let barSpacing = 5;
//         return i * barSpacing;
//     })
//     .style('fill', function(d){
//         return '#aaa';
//     })

let myData2 = [
    {
        name: 'Paris', 
        indicator1: 9093, 
        indicator2: 13.45
    },
    {
        name: 'Tokyo', 
        indicator1: 3912, 
        indicator2: 45.41
    }, 
    {
        name: 'New York', 
        indicator1: 19481, 
        indicator2: 32.53
    }
]; 

d3.select('g.cities')
    .selectAll('circle')
    .data(myData2)
    .join('circle')
    .attr('cx', function(d){
        return 0.01 * d.indicator1; 
    })
    .attr('cy', function(d){
        return 2 * d.indicator2; 
    })
    .attr('r', function(d){
        return 5;
    })

d3.select('g.cities')
    .selectAll('text')
    .data(myData2)
    .join('text')
    .attr('x', function(d){
        return 0.01 * d.indicator1 + 10; 
    })
    .attr('y', function(d){
        return 2 * d.indicator2 + 5; 
    })
    .text(function(d){
        return d.name; 
    })
