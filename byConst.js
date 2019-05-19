var data = yearInfo['2015'];


function buildDropdowns(){
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
    
  dropdownDiv.append('select')
    .attr('class', 'state')
    .attr('id','constState')
    .attr('name', 'state')
    .attr('onchange','stateChange()')
    .selectAll('option')
    .data(states)
    .enter()
    .append('option')
    .attr('value', function(d) { return d;})
    .text(function(d) { return d;});    
    
  dropdownDiv.append('select')
    .attr('class', 'consti')
    .attr('id','const')
    .attr('name', 'consti')
    .attr('onchange','constChange()')
    .selectAll('option')
    .data(consts)
    .enter()
    .append('option')
    .attr('value', function(d) { return d;})
    .text(function(d) { return d;});  
    
    
    tabulate(constTable ,["name_st","const_code","const_name","candidare_name.my","party_name.en","votes.total_valid"]);
}
/*
function constSelected() {
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

*/
//---------------------------------------------------------------
function stateChange() {
    
}
//---------------------------------------------------------------
function constChange() {
    ddConstSelect = document.getElementById("const").value;
    constLoc = [];
    j = 0;
    for (var i = 0; i < NewStateData.length; i++) {
        if(NewStateData.map(x => x.const_name)[i] == ddConstSelect) {
        constLoc[j] = i;
        j++;
    }
}
    constTable = [];
    for (var i = 0; i <constLoc.length; i++) {
    constTable [i] = NewStateData[constLoc[i]];
}
    tabulate(constTable ,["name_st","const_code","const_name","candidare_name.my","party_name.en","votes.total_valid"]);
}
//---------------------------------------------------------------
function tabulate(data, columns) {
       d3.select("#constTable").text('');
		var table = d3.select('#constTable').append('center').append('table')
		var thead = table.append('thead')
		var	tbody = table.append('tbody');

		// append the header row
		thead.append('tr')
		  .selectAll('th')
		  .data(columns).enter()
		  .append('th')
		    .text(function (column) { return column; });

		// create a row for each object in the data
		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

		// create a cell in each row for each column
		var cells = rows.selectAll('td')
		  .data(function (row) {
		    return columns.map(function (column) {
		      return {column: column, value: row[column]};
		    });
		  })
		  .enter()
		  .append('td')
		    .text(function (d) { return d.value; });

	  return table;
	}
//---------------------------------------------------------------































