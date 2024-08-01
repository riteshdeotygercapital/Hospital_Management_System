using HMS.Server.Models;
namespace HMS.Server.Data
{
    public interface IDoctorRepository: IRepository<Doctor>
    {
        Task<Doctor> GetUserByEmailAsync(string email);
    }
}
