"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentsDashboard = void 0;
var React = require("react");
var Students_1 = require("./Students");
var StudentsDashboard = /** @class */ (function (_super) {
    __extends(StudentsDashboard, _super);
    function StudentsDashboard(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { showAll: false, showAllTakingCourses: false };
        _this.handleAllClick = _this.handleAllClick.bind(_this);
        _this.handleAllTakingCoursesClick = _this.handleAllTakingCoursesClick.bind(_this);
        return _this;
    }
    StudentsDashboard.prototype.handleAllClick = function () {
        this.setState({ showAll: !this.state.showAll });
    };
    StudentsDashboard.prototype.handleAllTakingCoursesClick = function () {
        this.setState({ showAllTakingCourses: !this.state.showAllTakingCourses });
    };
    StudentsDashboard.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("button", { className: "btn btn-primary", onClick: this.handleAllClick },
                this.state.showAll ? "Hide All Students" : "Show All Students",
                " "),
            "\u00A0",
            React.createElement("button", { className: "btn btn-primary", onClick: this.handleAllTakingCoursesClick }, this.state.showAllTakingCourses ? "Hide Students Taking Any Courses" : "Show Students Taking Any Courses"),
            React.createElement("p", null),
            React.createElement("h1", null, "Student Courses"),
            React.createElement("p", null),
            React.createElement(Students_1.StudentComponent, { displayInfo: "takingMoreThan3Courses" }),
            React.createElement(Students_1.StudentComponent, { displayInfo: "taking3OrFewerCourses" }),
            this.state.showAll && React.createElement(Students_1.StudentComponent, null),
            this.state.showAllTakingCourses && React.createElement(Students_1.StudentComponent, { displayInfo: "takingAnyCourses" })));
    };
    return StudentsDashboard;
}(React.Component));
exports.StudentsDashboard = StudentsDashboard;
//# sourceMappingURL=StudentsDashboard.js.map