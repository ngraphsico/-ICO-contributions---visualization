var options = {
  cutoutPercentage: 80,
  animation: {
    easing: 'easeOutQuint'
  },
  animateScale: true,

  responsive:false,
  maintainAspectRatio: false,
  tooltips: {
    enabled: false
  },
  events: []

};

var chartsico = [{
  id: "ETH",
  values: [55, 45]
}, {
  id: "BTC",
  values: [35, 65]
}, {
  id: "LTC",
  values: [10, 90]
}



];

var offset = 0;

var _loop = function _loop(chartico) {
  var canvas = document.querySelector("#" + chartico.id);
  if (!canvas) {
    return "continue";
  }

  var ctx = canvas.getContext('2d');

  setTimeout(function () {
    var chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: chartico.values,
          backgroundColor: ['#6F3BFF' ]

        }]
      },
      options: options
    });
  }, offset);

  offset += 250;
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = chartsico[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var chartico = _step.value;

    var _ret = _loop(chartico);

    if (_ret === "continue") continue;
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
