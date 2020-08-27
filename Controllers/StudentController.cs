using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ASPNETReactTest2.Models;
using ASPNETReactTest2.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASPNETReactTest2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        StudentDataAccessLayer objStudent = new StudentDataAccessLayer();

        [HttpGet]
        [Route("Index")]
        public IEnumerable<Students> Index()
        {
            return objStudent.GetStudentsAndTheirCourses();
        }

        [HttpGet]
        [Route("TakingMoreThanThreeCourses")]
        public IEnumerable<StudentsVM> TakingMoreThanThreeCourses()
        {
            return objStudent.GetStudentsTakingMoreThanThreeCourses();
        }

        [HttpGet]
        [Route("TakingThreeOrFewerCourses")]
        public IEnumerable<StudentsVM> TakingThreeOrFewerCourses()
        {
            return objStudent.GetStudentsTakingThreeOrFewerCourses();
        }

        [HttpGet]
        [Route("TakingAnyCourses")]
        public IEnumerable<StudentsVM> TakingAnyCourses()
        {
            return objStudent.GetStudentsTakingAnyCourses();
        }

        [HttpGet]
        [Route("All")]
        public IEnumerable<StudentsVM> All()
        {
            return objStudent.GetAllStudents();
        }

    }
}
