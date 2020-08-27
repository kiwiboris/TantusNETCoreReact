using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPNETReactTest2.ViewModels;
using System.Text;

namespace ASPNETReactTest2.Models
{
    public class StudentDataAccessLayer
    {
        TantusTestDBContext db = new TantusTestDBContext();

        public IEnumerable<Students> GetStudentsAndTheirCourses()
        {
            try
            {
                return db.Students.Include(student => student.StudentsCourses).ThenInclude(s => s.Course).AsNoTracking().ToList();
            }
            catch
            {
                throw;
            }
        }

        public IEnumerable<StudentsVM> GetAllStudents()
        {
            List<StudentsVM> listStudents = new List<StudentsVM>();

            IEnumerable<Students> allStudents = GetStudentsAndTheirCourses();

            foreach (Students student in allStudents)
            {
                ICollection<StudentsCourses> scColl = student.StudentsCourses;
                AddNewStudentEntry(listStudents, student, scColl);
            }

            return listStudents;
        }

        public IEnumerable<StudentsVM> GetStudentsTakingAnyCourses()
        {
            List<StudentsVM> listStudents = new List<StudentsVM>();

            IEnumerable<Students> allStudents = GetStudentsAndTheirCourses();

            foreach (Students student in allStudents)
            {
                ICollection<StudentsCourses> scColl = student.StudentsCourses;
                if (scColl.Count > 0)
                {
                    AddNewStudentEntry(listStudents, student, scColl);
                }
            }

            return listStudents;
        }

        public IEnumerable<StudentsVM> GetStudentsTakingMoreThanThreeCourses()
        {
            List<StudentsVM> listStudents = new List<StudentsVM>();

            IEnumerable<Students> allStudents = GetStudentsAndTheirCourses();
            foreach (Students student in allStudents)
            {
                ICollection<StudentsCourses> scColl = student.StudentsCourses;
                if (scColl.Count > 3)
                {
                    AddNewStudentEntry(listStudents, student, scColl);
                }
            }

            return listStudents;
        }

        public IEnumerable<StudentsVM> GetStudentsTakingThreeOrFewerCourses()
        {
            List<StudentsVM> listStudents = new List<StudentsVM>();

            IEnumerable<Students> allStudents = GetStudentsAndTheirCourses();
            foreach (Students student in allStudents)
            {
                ICollection<StudentsCourses> scColl = student.StudentsCourses;
                if (scColl.Count <= 3)
                {
                    AddNewStudentEntry(listStudents, student, scColl);
                }
            }

            return listStudents;
        }

        private static void AddNewStudentEntry(List<StudentsVM> listStudents, Students student, ICollection<StudentsCourses> scColl)
        {
            listStudents.Add(new StudentsVM()
            {
                StudentName = student.StudentName,
                NumCourses = scColl.Count,
                CoursesTaken = scColl.Count == 0 ? "None": GetCommaSeparatedListOfCourses(scColl)
            });
        }

        static string GetCommaSeparatedListOfCourses(ICollection<StudentsCourses> scColl)
        {
            int i = 0;
            StringBuilder coursesStr = new StringBuilder();
            foreach (StudentsCourses sc in scColl)
            {
                if (i > 0)
                {
                    coursesStr.Append(", ");
                }
                coursesStr.Append(sc.Course.CourseName);
                i++;
            }

            return coursesStr.ToString();
        }
      
    }
}
