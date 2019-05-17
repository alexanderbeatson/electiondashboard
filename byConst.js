function buildDropdowns(){
  var years = Object.keys(elect);
  var houses = Object.keys(elect[years[0]]);
  var dropdownDiv = d3.select('#dropdown').append('center');
  
  dropdownDiv.append('select')
    .attr('class', 'year')
    .attr('id','constYear')
    .attr('name', 'year')
    .attr('onchange','constSelected')
    .selectAll('option')
    .data(years)
    .enter()
    .append('option')
    .attr('value', function(d) {return d;})
    .text(function(d) { return d.slice(2);});
  
  var houseNameTranslate = {
      'amyotha' : 'Amyotha',
      'pyithu' : 'Pyithu',
      'sr' : 'State/Region'
  };
    
  dropdownDiv.append('select')
    .attr('class', 'house')
    .attr('name', 'house')
    .attr('onchange','constSelected')
    .selectAll('option')
    .data(houses)
    .enter()
    .append('option')
    .attr('value', function(d) { return d;})
    .text(function(d) { return houseNameTranslate[d];});
    
    
}

function constSelected () {
    year4const = document.getElementById("constYear").value;
    house4const = document.getElementById("constHouse").value;
    constSelect = document.getElementById("constSelect").value;
    d3.select('#constTable').text("");
    d3.select('#constTable')
        .append('center')
        .append('h3')
        .append('table')
        .selectAll('tr')
}



