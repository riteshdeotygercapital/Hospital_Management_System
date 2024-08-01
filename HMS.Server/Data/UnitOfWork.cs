namespace HMS.Server.Data
{
    public class UnitOfWork:IUnitOfWork
    {
        private readonly HMSServerDbContext _context;

        private IPatientRepository _patient;
        private IDoctorRepository _doctor;

        public UnitOfWork(HMSServerDbContext context)
        {
            _context = context;
        }

        public IPatientRepository Patients => _patient ??= new PatientRepository(_context);
        public IDoctorRepository Doctor => _doctor ??= new DoctorRepository(_context);


        public async Task<int> CompleteAsync()
        {
            return await _context.SaveChangesAsync();
        }
        public void Dispose() { 
            _context.Dispose();
        }

    }
}
