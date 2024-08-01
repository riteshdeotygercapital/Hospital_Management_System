using HMS.Server.Models;

namespace HMS.Server.Data
{
    public interface IPatientRepository: IRepository<Patient>
    {
        Task<Patient> GetUserByEmailAsync(string email);
    }
}
