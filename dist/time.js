'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimeTab = function (_React$Component) {
    _inherits(TimeTab, _React$Component);

    function TimeTab() {
        _classCallCheck(this, TimeTab);

        return _possibleConstructorReturn(this, (TimeTab.__proto__ || Object.getPrototypeOf(TimeTab)).apply(this, arguments));
    }

    _createClass(TimeTab, [{
        key: 'render',
        value: function render() {
            var date = new Date();
            return React.createElement(
                'div',
                null,
                date.toLocaleTimeString()
            );
        }
    }]);

    return TimeTab;
}(React.Component);

function getDate() {
    ReactDOM.render(React.createElement(TimeTab, null), document.getElementById('time-open'));
}

setInterval(getDate, 1000);