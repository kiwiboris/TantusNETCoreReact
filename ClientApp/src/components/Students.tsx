import * as React from 'react';
import { RouteComponentProps } from 'react-router';

//interface IStudentProps extends RouteComponentProps<{}> {
//interface IStudentProps {
//    displayInfo: string;
//}
interface IStudentDataState {
    studentList: StudentData[];
    loading: boolean;
    sectionTitle: string;
}
export class StudentComponent extends React.Component<any, IStudentDataState> {
    constructor(props: any) {
        super(props);

        this.state = { studentList: [], loading: true, sectionTitle: 'All Students' };  
    }

    fetchBasedOnDisplayInfo(url: string) {
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json() as Promise<StudentData[]>;
                } else {
                    console.log(response.text);
                    throw new Error('Something went wrong...');
                }
            })
            .then(data => {
                this.setState({ studentList: data, loading: false });
            });
    }

    componentDidMount() {
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
    }
    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderStudentTable(this.state.studentList);
        return <div>
            <h3 style={{ backgroundColor: "lightgreen" }}>{this.state.sectionTitle}</h3>
            {contents}
        </div>;
    }

    private GetRowForStudent(student: StudentData) {
        if (student.numCourses > 0) {
            return (
                <tr key={student.studentName}>
                    <td></td>
                    <td>{student.studentName}</td>
                    <td>{student.numCourses}</td>
                    <td>{student.coursesTaken}</td>
                </tr>
            );
        }
        else {
            return (
                <tr key={student.studentName} style={{ color: "red" }}>
                    <td></td>
                    <td>{student.studentName}</td>
                    <td>{student.numCourses}</td>
                    <td>{student.coursesTaken}</td>
                </tr>
                );
        }
    }
    // Returns the HTML table to the render() method.  
    private renderStudentTable(studentList: StudentData[]) {
        return <table className='table'>
            <thead>
                <tr style={{ backgroundColor: "lightblue" }} >
                    <th></th>
                    <th>Student</th>
                    <th>Number of Courses</th>
                    <th>Courses</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map(student => this.GetRowForStudent(student)) }
            </tbody>
        </table>;
    }
}
export class StudentData {
    studentName: string = "";
    numCourses: number = 0;
    coursesTaken: string = "";
}