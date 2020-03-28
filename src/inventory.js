window.Inventory = {
  allSizes: (function(small, large) {
    var sizes = [];
    for (var i = small; i <= large; i++) {
      sizes.push(i);
      sizes.push(i + 0.5);
    }

    return sizes;
  })(7, 12),

  allColors: ['red', 'blue', 'green', 'purple', 'brown'],


  byColor: {
    "red" : ["7", "7.5", "8", "8.5"],
    "blue" : ["7", "7.5", "8", "8.5"],
    "brown" : ["8", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"],
    "purple" : ["9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"],
    "green" : ["8", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5"]
  }
};