var data = [
    {
      "type": "sunburst",
      "labels":["ny","ny","ny","ny","ny","ny","nj","nj","nj","nj","nj","nj"],
      "parents":["2015","2015","2015","2016","2016","2016","2015","2015","2015","2016","2016","2016"],
      "leaf":["arson","violent crime","robbery","arson","violent crime","robbery","arson","violent crime","robbery","arson","violent crime","robbery"],
      "values":[23,45,65,12,34,56,76,2,57,99,56,23],
      "leaf": {"opacity": 0.4},
      "marker": {"line": {"width": 2}},
      "branchvalues": 'total'
    }];
    
    var layout = {
      "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
    };
    console.log("hello");
    
    Plotly.newPlot('myDiv', data, layout)
    
    // myPlot = document.getElementById("myDiv");


var data = [{
  type: "sunburst",
  labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
  parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
  values:  [10, 14, 12, 10, 2, 6, 6, 4, 4],
  outsidetextfont: {size: 20, color: "#377eb8"},
  leaf: {opacity: 0.4},
  marker: {line: {width: 2}},
}];

var layout = {
  margin: {l: 0, r: 0, b: 0, t: 0},
  width: 500,
  height: 500
};


Plotly.newPlot('myDiv', data, layout);