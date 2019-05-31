function yearPage () {
    d3.select('#yearButtons').text('');
    var land = d3.select('#yearButtons').append('center').append('table');

land.append('tr').style("background-color","white")
    .text('General election : ')
    .selectAll('th')
    .data(['2010','2015']).enter()
    .append('th').append('button')
    .style('line-height','0')
    .classed('button',true)
    .text(function (d) {
                    return d;
                })
    .on('click',function (d) {
                    yearSelect = d;
                    return yearInformation(), visualize();
                });


land.append('tr').text('By election : ')
    .selectAll('th')
    .data(['2012','2017','2018']).enter()
    .append('th').append('button')
    .style('line-height','0')
    .classed('button',true)
    .text(function(d){
                    return d;
                })
    .on('click',function(d){
                    yearSelect = d;
                    return yearInformation(), visualize();
                });
    return yearInformation();
}




function yearInformation () {
    d3.select('#yearInfo').text("");
    d3.select('#yearInfo')
        .append("center")
        .append('h3')
        .append('table')
        .append('tr')
        .style('background-color','white')
        .selectAll('th')
        .data(['Year-', yearSelect]).enter()
        .append('th')
        .style('text-align','center')
        .text(function (d) {return d;});
    
    var yrTable = d3.select('#yearInfo')
        .append('center')
        .append('table');
    var yrTableVar = yrTable.selectAll('td')
        .data(['Held on','Available seats','President']).enter()
        .append('tr')
        .style('background-color','white')
        .style('font-weight','bold')
        .text (function (d){return d;})
        .append('td')
        .text(function(d) {
            return yearInfo[yearSelect][0][d];
        });
    /*yrTableVar.selectAll('th')
        .data([0]).enter()
        .append('th')
        .text(function(){return yearInfo[yearSelect];});*/
    
}










