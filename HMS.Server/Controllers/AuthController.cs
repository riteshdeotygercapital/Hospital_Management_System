using HMS.Server.Data;
using HMS.Server.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;

namespace HMS.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public AuthController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        [HttpPost("login/Patient")]
        public async Task<IActionResult> Login([FromBody] Patient login)
        {
            var user = await _unitOfWork.Patients.GetUserByEmailAsync(login.Email);

            if (user == null || user.Password != login.Password)
            {
                return Unauthorized();
            }



            return Ok("Login Successful");
        }
        [HttpPost("login/Doctor")]
        public async Task<IActionResult> Login([FromBody] Doctor login)
        {
            var user = await _unitOfWork.Doctor.GetUserByEmailAsync(login.Email);

            if (user == null || user.Password != login.Password)
            {
                return Unauthorized();
            }



            return Ok("Login Successful");
        }
    }



}
