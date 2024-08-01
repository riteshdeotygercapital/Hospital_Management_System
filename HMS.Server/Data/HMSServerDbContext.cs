using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using HMS.Server.Models;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using System.Data;

namespace HMS.Server.Data
{
    public class HMSServerDbContext : DbContext
    {
        public HMSServerDbContext (DbContextOptions<HMSServerDbContext> DbContextOptions)
            : base(DbContextOptions)
        {
        }

        public DbSet<Doctor> Doctor { get; set; } 
        public DbSet<Patient> Patients { get; set; } 

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Patient>().HasData(
                new Patient { Id = 1, Email = "patient@gmail.com", Password = "Passcode1"}
                );
            modelBuilder.Entity<Doctor>().HasData(
                new Doctor { Id = 1, Email = "doctor@gmail.com", Password = "Passcode1" }
                );
        }
        
    }
}
