// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

function buildTable(tableData) {
    tableData.forEach((ufoReport) => {
        var row = tbody.append("tr");
        Object.defineProperties(ufoReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
    });
 });     
}

var filters = {}
function applyFilters( {
    
})