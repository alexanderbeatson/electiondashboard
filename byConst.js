function buildDropdowns(){
  var years = Object.keys(elect);
  var houses = Object.keys(elect[years[0]]);

  var dropdownDiv = d3.select('.dropdown');
  
  dropdownDiv.append('select')
    .attr('class', 'year')
    .attr('name', 'year')
    .selectAll('option')
    .data(years)
    .enter()
    .append('option')
    .attr('value', function(d) { return d;})
    .text(function(d) { return d.slice(2);});
  
  var houseNameTranslate = {
      'amyotha' : 'Amyotha',
      'pyithu' : 'Pyithu',
      'sr' : 'State/Region'
  };
    
  dropdownDiv.append('select')
    .attr('class', 'house')
    .attr('name', 'house')
    .selectAll('option')
    .data(houses)
    .enter()
    .append('option')
    .attr('value', function(d) { return d;})
    .text(function(d) { return houseNameTranslate[d];});
}
