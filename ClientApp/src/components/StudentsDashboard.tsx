import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { StudentComponent } from './Students';

interface IStudentsDashboard {
    showAll: boolean;
    showAllTakingCourses: boolean
}
export class StudentsDashboard extends React.Component<any, IStudentsDashboard> {
    constructor(props: any) {
        super(props);
        this.state = { showAll: false, showAllTakingCourses: false };

        this.handleAllClick = this.handleAllClick.bind(this);
        this.handleAllTakingCoursesClick = this.handleAllTakingCoursesClick.bind(this);

    }

    handleAllClick() {
        this.setState({ showAll: !this.state.showAll });
    }

    handleAllTakingCoursesClick() {
        this.setState({ showAllTakingCourses: !this.state.showAllTakingCourses });
    }

    render() {
        return (<div>
            <button className="btn btn-primary" onClick={this.handleAllClick}>{this.state.showAll ? "Hide All Students" : "Show All Students"} </button>
            &nbsp;
            <button className="btn btn-primary" onClick={this.handleAllTakingCoursesClick}>{this.state.showAllTakingCourses ? "Hide Students Taking Any Courses" : "Show Students Taking Any Courses"}</button>
            <p />
            <h1>Student Courses</h1>
            <p />
            <StudentComponent displayInfo="takingMoreThan3Courses" />
            <StudentComponent displayInfo="taking3OrFewerCourses" />
            { this.state.showAll  && <StudentComponent /> }
            { this.state.showAllTakingCourses && <StudentComponent displayInfo="takingAnyCourses" /> }
        </div>);
    }
}