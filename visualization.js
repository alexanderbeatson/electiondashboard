function visualize() {
    d3.select("#Viz").text("");
    yrData = candidateData [yearSelect];
    var yearViz = d3.select("#Viz").append('center').append('table').append('tr');
    //Bar chart
    
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 400 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;
// set the ranges
    var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
    var y = d3.scaleLinear()
          .range([height, 0]); 
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
    var svg = yearViz.append('td').append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    x.domain(yrData.map(function(d) { return d.partyAbb; }));
    y.domain([0, d3.max(yrData, function(d) { return d.candidates; })]);
    
      svg.selectAll("rect")
        .data(yrData)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", function(d) { return x(d.partyAbb); })
        .attr("width", x.bandwidth())
        .attr("y", function(d) { return y(d.candidates); })
        .attr("height", function(d) { return height - y(d.candidates); });

    
    // add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

  // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));

    
    
    
    //Parliamentry Chart
    
    var parli = yearViz.append('td').append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
};