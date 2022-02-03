using HornsAndHoves.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web.Mvc;

namespace HornsAndHoves.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult List()
        {
            return Json(GetJsonAgency(), JsonRequestBehavior.AllowGet);
        }

        public ActionResult GetSingle(int id)
        {
            return Json(GetJsonAgency(id), JsonRequestBehavior.AllowGet);
        }

        public List<Agency> GetJsonAgency(int id = 0)
        {
            List<Agency> agencies = new List<Agency>();

            using (StreamReader r = new StreamReader("C:/tests/ffoms/HornsAndHoves/HornsAndHoves/agencies.json"))
            {
                string json = r.ReadToEnd();
                agencies = JsonConvert.DeserializeObject<List<Agency>>(json);
            }

            if (id > 0)
            {
                return agencies.Where(x => x.Id == id).ToList();
            }

            return agencies;
        }
    }
}