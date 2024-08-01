using Microsoft.EntityFrameworkCore;

namespace HMS.Server.Data
{
    public class Repository<TEntity>: IRepository<TEntity> where TEntity:class
    {
        protected readonly HMSServerDbContext _context;
        protected readonly DbSet<TEntity> _dbset;

        public Repository(HMSServerDbContext context) { 
            _context = context;
            _dbset = _context.Set<TEntity>();
        }

        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
           return await _dbset.ToListAsync();
        }

        public async Task<TEntity> GetByIdAsync(int id) {
            return await _dbset.FindAsync(id);
        }

        public async Task AddAsync(TEntity entity)
        {
            await _dbset.AddAsync(entity);
        }
        public async Task<TEntity> UpdateAsync(TEntity entity)
        {
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return entity;
        }
        public void DeleteAsync(TEntity entity)
        {
            _dbset.Remove(entity);
        }
    }
}
