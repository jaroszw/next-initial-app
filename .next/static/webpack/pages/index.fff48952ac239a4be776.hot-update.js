webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: HomePage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ "./components/meetups/MeetupList.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");


var _jsxFileName = "D:\\BIURO\\ASIDE\\PRJ\\next-initial-app\\pages\\index.js",
    _this = undefined;




var DUMMY_MEETUPS = [{
  id: "m1",
  title: "A first Meetup",
  image: "https://f4fcdn.eu/wp-content/uploads/2019/10/Odessa2000ST.jpg",
  address: "Some addres 5, somecity",
  description: "This is a first meetup"
}, {
  id: "m2",
  title: "A second Meetup",
  image: "https://www.ebrdgreencities.com/assets/Uploads/bb1d68f6d4/lviv-625.png",
  address: "Some addres 5, somecity",
  description: "This is a second meetup"
}, {
  id: "m3",
  title: "A third Meetup",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%D0%92%27%D1%97%D0%B7%D0%BD%D0%B0_%28%D0%9D%D0%B0%D0%B4%D0%B1%D1%80%D0%B0%D0%BC%D0%BD%D0%B0%29_%D0%B1%D0%B0%D1%88%D1%82%D0%B0_%D0%B7%D0%B0%D0%BC%D0%BA%D1%83_%D0%9B%D1%83%D1%86%D1%8C%D0%BA.jpg/1200px-%D0%92%27%D1%97%D0%B7%D0%BD%D0%B0_%28%D0%9D%D0%B0%D0%B4%D0%B1%D1%80%D0%B0%D0%BC%D0%BD%D0%B0%29_%D0%B1%D0%B0%D1%88%D1%82%D0%B0_%D0%B7%D0%B0%D0%BC%D0%BA%D1%83_%D0%9B%D1%83%D1%86%D1%8C%D0%BA.jpg",
  address: "Some addres 5, somecity",
  description: "This is a third meetup"
}];
var HomePage = function HomePage() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: "Hello World"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      meetups: DUMMY_MEETUPS
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, _this);
};
_c = HomePage;
/* harmony default export */ __webpack_exports__["default"] = (HomePage);

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNwQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsZ0JBRlQ7QUFHRUMsT0FBSyxFQUFFLCtEQUhUO0FBSUVDLFNBQU8sRUFBRSx5QkFKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQURvQixFQVFwQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsaUJBRlQ7QUFHRUMsT0FBSyxFQUNILHdFQUpKO0FBS0VDLFNBQU8sRUFBRSx5QkFMWDtBQU1FQyxhQUFXLEVBQUU7QUFOZixDQVJvQixFQWdCcEI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGdCQUZUO0FBR0VDLE9BQUssRUFDSCxrY0FKSjtBQUtFQyxTQUFPLEVBQUUseUJBTFg7QUFNRUMsYUFBVyxFQUFFO0FBTmYsQ0FoQm9CLENBQXRCO0FBMEJPLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDNUIsc0JBQ0UscUVBQUMsaUVBQUQ7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsc0VBQUQ7QUFBWSxhQUFPLEVBQUVOO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQU1ELENBUE07S0FBTU0sUTtBQVNFQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZmY0ODk1MmFjMjM5YTRiZTc3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVldHVwTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0XCI7XHJcblxyXG5jb25zdCBEVU1NWV9NRUVUVVBTID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJBIGZpcnN0IE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9mNGZjZG4uZXUvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTAvT2Rlc3NhMjAwMFNULmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlcyA1LCBzb21lY2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGZpcnN0IG1lZXR1cFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwibTJcIixcclxuICAgIHRpdGxlOiBcIkEgc2Vjb25kIE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly93d3cuZWJyZGdyZWVuY2l0aWVzLmNvbS9hc3NldHMvVXBsb2Fkcy9iYjFkNjhmNmQ0L2x2aXYtNjI1LnBuZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlcyA1LCBzb21lY2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHNlY29uZCBtZWV0dXBcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0zXCIsXHJcbiAgICB0aXRsZTogXCJBIHRoaXJkIE1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi8xLzFlLyVEMCU5MiUyNyVEMSU5NyVEMCVCNyVEMCVCRCVEMCVCMF8lMjglRDAlOUQlRDAlQjAlRDAlQjQlRDAlQjElRDElODAlRDAlQjAlRDAlQkMlRDAlQkQlRDAlQjAlMjlfJUQwJUIxJUQwJUIwJUQxJTg4JUQxJTgyJUQwJUIwXyVEMCVCNyVEMCVCMCVEMCVCQyVEMCVCQSVEMSU4M18lRDAlOUIlRDElODMlRDElODYlRDElOEMlRDAlQkEuanBnLzEyMDBweC0lRDAlOTIlMjclRDElOTclRDAlQjclRDAlQkQlRDAlQjBfJTI4JUQwJTlEJUQwJUIwJUQwJUI0JUQwJUIxJUQxJTgwJUQwJUIwJUQwJUJDJUQwJUJEJUQwJUIwJTI5XyVEMCVCMSVEMCVCMCVEMSU4OCVEMSU4MiVEMCVCMF8lRDAlQjclRDAlQjAlRDAlQkMlRDAlQkElRDElODNfJUQwJTlCJUQxJTgzJUQxJTg2JUQxJThDJUQwJUJBLmpwZ1wiLFxyXG4gICAgYWRkcmVzczogXCJTb21lIGFkZHJlcyA1LCBzb21lY2l0eVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIHRoaXJkIG1lZXR1cFwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICAgIDxoMT5IZWxsbyBXb3JsZDwvaDE+XHJcbiAgICAgIDxNZWV0dXBMaXN0IG1lZXR1cHM9e0RVTU1ZX01FRVRVUFN9IC8+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=