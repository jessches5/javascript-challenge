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
function applyFilters() {

    var inputElement = d3.select(this).select("input");
    var elementValue = inputElement.property("value");
    var selectedID = inputElement.attr("id");
    
    if (elementValue) {
        filters[selectedID] = elementValue;
    }
    else {
        delete filters[selectedID];
    }

filterTable()
}

// listener
d3.selectAll(".filter").on("change", applyFilters);

// Complete the event handler function for the form
function filterTable() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
}