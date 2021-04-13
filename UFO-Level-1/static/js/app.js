// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
function buildTable(tableData) {
    tableData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        
}