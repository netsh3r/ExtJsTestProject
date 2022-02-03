using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HornsAndHoves.Models
{
    public class Agency
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public string FirstName { get; set; }
        public string Partonymic { get; set; }
        public string City { get; set; }
        public string Inn { get; set; }
        public string Kpp { get; set; }
        public string Ogrn { get; set; }
        public string Bik { get; set; }
        public int EmployeeCount { get; set; }
    }
}