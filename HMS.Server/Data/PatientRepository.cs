using HMS.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace HMS.Server.Data
{
    public class PatientRepository: Repository<Patient>, IPatientRepository
    {
        public PatientRepository(HMSServerDbContext context) : base(context) {
        }
        public async Task<Patient> GetUserByEmailAsync(string email)
        {
            return await _context.Patients.SingleOrDefaultAsync(u => u.Email == email);
            
        }
    }
}
