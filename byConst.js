function buildDropdowns(){
  var years = Object.keys(elect);
  var houses = Object.keys(elect[years[0]]);
  var dropdownDiv = d3.select('#dropdown').append('center');
  
  dropdownDiv.append('select')
    .attr('class', 'year')
    .attr('id','constYear')
    .attr('name', 'year')
    .attr('onchange','yearChange()')
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
    .attr('id','constHouse')
    .attr('name', 'house')
    .attr('onchange','houseChange()')
    .selectAll('option')
    .data(houses)
    .enter()
    .append('option')
    .attr('value', function(d) { return d;})
    .text(function(d) { return houseNameTranslate[d];});
    
    
}

function constSelected() {
    /*
    year4const = document.getElementById("constYear").value;
    house4const = document.getElementById("constHouse").value;
    constSelect = document.getElementById("constSelect").value;*/
    d3.select('#constTable').text(year4const);
    d3.select('#constTable')
        .append('center')
        .append('h3')
        .append('table')
        .selectAll('tr');
}

function houseChange() {
    house4const = document.getElementById("constHouse").value;
    return constSelected();
};
function yearChange() {
    year4const = document.getElementById("constYear").value;
    return constSelected();
};




