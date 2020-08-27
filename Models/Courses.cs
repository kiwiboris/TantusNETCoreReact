using System;
using System.Collections.Generic;

namespace ASPNETReactTest2.Models
{
    public partial class Courses
    {
        public Courses()
        {
            StudentsCourses = new HashSet<StudentsCourses>();
        }

        public int CourseId { get; set; }
        public string CourseName { get; set; }

        public virtual ICollection<StudentsCourses> StudentsCourses { get; set; }
    }
}
