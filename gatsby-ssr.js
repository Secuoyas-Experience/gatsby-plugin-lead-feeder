"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var _oneline = _interopRequireDefault(require("oneline"));

var _jsxFileName = "/Users/hisco/repos/@sqy/gatsby-plugin-lead-feeder/src/gatsby-ssr.js";

const onRenderBody = ({
  setPostBodyComponents
}, {
  key
}) => {
  setPostBodyComponents([/*#__PURE__*/_react.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: (0, _oneline.default)`
        (function(){
          window.ldfdr = window.ldfdr || {};
          (function(d, s, ss, fs){
            fs = d.getElementsByTagName(s)[0];
            function ce(src){
              var cs  = d.createElement(s);
              cs.src = src;
              setTimeout(function(){fs.parentNode.insertBefore(cs,fs)}, 1);
            }
            ce(ss);
          })(document, 'script', 'https://sc.lfeeder.com/lftracker_${key}.js');
        })();`
    },
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  })]);
};

exports.onRenderBody = onRenderBody;