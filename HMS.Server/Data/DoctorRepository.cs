using HMS.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace HMS.Server.Data
{
    public class DoctorRepository:Repository<Doctor>, IDoctorRepository
    {
      
            public DoctorRepository(HMSServerDbContext context) : base(context)
            {
            }
            public async Task<Doctor> GetUserByEmailAsync(string email)
            {
                return await _context.Doctor.SingleOrDefaultAsync(u => u.Email == email);

            }
        
    }
}
