"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Countdown = function (_React$Component) {
  _inherits(Countdown, _React$Component);

  function Countdown() {
    _classCallCheck(this, Countdown);

    // L'état du composant qu'on va manipuler au cours du temps
    var _this = _possibleConstructorReturn(this, (Countdown.__proto__ || Object.getPrototypeOf(Countdown)).call(this));

    _this.state = {
      // Ce qui est ecrit dans le textarea
      text: "Mon text de départ",
      isPhotoAdded: false
    };
    return _this;
  }

  _createClass(Countdown, [{
    key: "render",
    value: function render() {
      console.log("Countdown");

      return React.createElement(
        "div",
        null,
        "Toto"
      );
    }
  }]);

  return Countdown;
}(React.Component);

ReactDOM.render(React.createElement(Countdown, null), document.getElementById('test2'));