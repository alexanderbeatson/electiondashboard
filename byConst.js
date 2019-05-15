function buildDropdowns {
  var years = Object.keys(elect);
  var houses = Object.keys(elect[years[0]]);

  var dropdownDiv = d3.select('.dropdown')
    .append('select')
    .attr('class', 'year')
    .attr('name', 'year')
    .selectAll('option')
    .data(years)
    .enter()
    .append('option')
    .value(function(d) { return d;})
    .text(function(d) { return d;});

  dropdownDiv.append('select')
    .attr('class', 'house')
    .attr('name', 'house')
    .selectAll('option')
    .data(houses)
    .enter()
    .append('option')
    .value(function(d) { return d;})
    .text(function(d) { return d;});
}
