
CREATE TABLE Courses (
	CourseID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	CourseName varchar(100) NOT NULL
)
GO

CREATE TABLE Students (
	StudentID int IDENTITY(1,1) NOT NULL PRIMARY KEY,
	StudentName varchar(100) NOT NULL
	) 
GO

CREATE TABLE StudentsCourses (
	StudentID int,
	CourseID int,
	CONSTRAINT students_courses_pk PRIMARY KEY (StudentID, CourseID),
	CONSTRAINT FK_student FOREIGN KEY (StudentID) REFERENCES Students(StudentID),
	CONSTRAINT FK_course FOREIGN KEY (CourseID) REFERENCES Courses(CourseID)
	)

	GO


	INSERT INTO Students VALUES ('Abraham Lincoln')
	INSERT INTO Students VALUES ('George Washington')
	INSERT INTO Students VALUES ('John Adams')
	INSERT INTO Students VALUES ('Thomas Jefferson')
	INSERT INTO Students VALUES ('James Madison')
	INSERT INTO Students VALUES ('James Monroe')

	GO

	INSERT INTO Courses VALUES ('Applied Data Science')
	INSERT INTO Courses VALUES ('Python 3 Programming')
	INSERT INTO Courses VALUES ('Introduction to C#')
	INSERT INTO Courses VALUES ('Business Analytics')
	INSERT INTO Courses VALUES ('Management')
	INSERT INTO Courses VALUES ('Information Technology')
	
	GO

	INSERT INTO StudentsCourses VALUES(1,1)
	INSERT INTO StudentsCourses VALUES(1,2)
	INSERT INTO StudentsCourses VALUES(1,3)
	INSERT INTO StudentsCourses VALUES(1,4)
	INSERT INTO StudentsCourses VALUES(1,5)
	INSERT INTO StudentsCourses VALUES(2,2)
	INSERT INTO StudentsCourses VALUES(2,3)
	INSERT INTO StudentsCourses VALUES(2,4)
	INSERT INTO StudentsCourses VALUES(2,6)
	INSERT INTO StudentsCourses VALUES(5,1)
	INSERT INTO StudentsCourses VALUES(6,2)
	INSERT INTO StudentsCourses VALUES(6,3)
	INSERT INTO StudentsCourses VALUES(6,5)

	GO