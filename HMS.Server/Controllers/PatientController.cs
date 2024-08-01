using Microsoft.AspNetCore.Mvc;

namespace HMS.Server.Controllers
{
    public class PatientController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
