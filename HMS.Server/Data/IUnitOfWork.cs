namespace HMS.Server.Data
{
    public interface IUnitOfWork
    {
        IPatientRepository Patients { get; }
        IDoctorRepository Doctor { get; }
        
        Task<int> CompleteAsync();
    }
}
