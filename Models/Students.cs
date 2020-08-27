using System;
using System.Collections.Generic;

namespace ASPNETReactTest2.Models
{
    public partial class Students
    {
        public Students()
        {
            StudentsCourses = new HashSet<StudentsCourses>();
        }

        public int StudentId { get; set; }
        public string StudentName { get; set; }

        public virtual ICollection<StudentsCourses> StudentsCourses { get; set; }
    }
}
