webpackJsonp([0],{

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(5);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(259);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page3 = function (_React$Component) {
    _inherits(Page3, _React$Component);

    function Page3() {
        _classCallCheck(this, Page3);

        return _possibleConstructorReturn(this, (Page3.__proto__ || Object.getPrototypeOf(Page3)).apply(this, arguments));
    }

    _createClass(Page3, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'appContent' },
                'page3'
            );
        }
    }]);

    return Page3;
}(_react2.default.Component);

exports.default = Page3;

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(260);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(105)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./style.less", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./style.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(104)(false);
// imports


// module
exports.push([module.i, ".appContent {\n  color: #FFF;\n  width: 60%;\n  height: 400px;\n  background-color: #888;\n  border: 1px solid #FFF;\n  padding: 20px 40px;\n  margin: 10px auto;\n}\n", ""]);

// exports


/***/ })

});