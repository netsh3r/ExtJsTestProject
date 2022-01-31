using System.Web.Mvc;

namespace HornsAndHoves.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}