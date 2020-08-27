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
exports.StudentData = exports.StudentComponent = void 0;
var React = require("react");
var StudentComponent = /** @class */ (function (_super) {
    __extends(StudentComponent, _super);
    function StudentComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { studentList: [], loading: true, sectionTitle: 'All Students' };
        return _this;
    }
    StudentComponent.prototype.fetchBasedOnDisplayInfo = function (url) {
        var _this = this;
        fetch(url)
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                console.log(response.text);
                throw new Error('Something went wrong...');
            }
        })
            .then(function (data) {
            _this.setState({ studentList: data, loading: false });
        });
    };
    StudentComponent.prototype.componentDidMount = function () {
        if (this.props.displayInfo === 'takingMoreThan3Courses') {
            this.setState({ sectionTitle: 'Students with more than 3 courses' });
            this.fetchBasedOnDisplayInfo('api/Student/TakingMoreThanThreeCourses');
        }
        else if (this.props.displayInfo === 'taking3OrFewerCourses') {
            this.setState({ sectionTitle: 'Students with 3 courses or fewer' });
            this.fetchBasedOnDisplayInfo('api/Student/TakingThreeOrFewerCourses');
        }
        else if (this.props.displayInfo === 'takingAnyCourses') {
            this.setState({ sectionTitle: 'Students with any courses' });
            this.fetchBasedOnDisplayInfo('api/Student/TakingAnyCourses');
        }
        else {
            this.setState({ sectionTitle: 'All Students' });
            this.fetchBasedOnDisplayInfo('api/Student/All');
        }
    };
    StudentComponent.prototype.render = function () {
        var contents = this.state.loading
            ? React.createElement("p", null,
                React.createElement("em", null, "Loading..."))
            : this.renderStudentTable(this.state.studentList);
        return React.createElement("div", null,
            React.createElement("h3", { style: { backgroundColor: "lightgreen" } }, this.state.sectionTitle),
            contents);
    };
    StudentComponent.prototype.GetRowForStudent = function (student) {
        if (student.numCourses > 0) {
            return (React.createElement("tr", { key: student.studentName },
                React.createElement("td", null),
                React.createElement("td", null, student.studentName),
                React.createElement("td", null, student.numCourses),
                React.createElement("td", null, student.coursesTaken)));
        }
        else {
            return (React.createElement("tr", { key: student.studentName, style: { color: "red" } },
                React.createElement("td", null),
                React.createElement("td", null, student.studentName),
                React.createElement("td", null, student.numCourses),
                React.createElement("td", null, student.coursesTaken)));
        }
    };
    // Returns the HTML table to the render() method.  
    StudentComponent.prototype.renderStudentTable = function (studentList) {
        var _this = this;
        return React.createElement("table", { className: 'table' },
            React.createElement("thead", null,
                React.createElement("tr", { style: { backgroundColor: "lightblue" } },
                    React.createElement("th", null),
                    React.createElement("th", null, "Student"),
                    React.createElement("th", null, "Number of Courses"),
                    React.createElement("th", null, "Courses"))),
            React.createElement("tbody", null, studentList.map(function (student) { return _this.GetRowForStudent(student); })));
    };
    return StudentComponent;
}(React.Component));
exports.StudentComponent = StudentComponent;
var StudentData = /** @class */ (function () {
    function StudentData() {
        this.studentName = "";
        this.numCourses = 0;
        this.coursesTaken = "";
    }
    return StudentData;
}());
exports.StudentData = StudentData;
//# sourceMappingURL=Students.js.map