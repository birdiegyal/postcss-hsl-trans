var postcss = require("postcss"),
  color = require("color");

module.exports = postcss.plugin("postcss-rgb-plz", function (opts) {
  var isValidHex = function (hex) {
    // if it's not 3 or 6 digits, drop it.
    if (hex.length - 1 !== 3 && hex.length - 1 !== 6) return false;
    else return true;
  };

  return function (css) {
    css.walkDecls(function (decl) {
      var val = decl.value;
      if (val) {
        //  create a list of hexes in a given value
        var hexes = val.match(/#\w{3,6}/g);
        //  as long as there actually are hexes...
        if (hexes && hexes.length > 0) {
          //  where we're going to store our new val
          var newVal = val;
          // ...we loop through them and replace them with the rgb string
          hexes.forEach(function (hex) {
            if (isValidHex(hex))
              var { h, s, l } = color(hex).hsl();
            newVal = newVal.replace(hex, `${h} ${s}% ${l}%`);
          });
          decl.value = newVal;
        }
      }
    });
  };
});
