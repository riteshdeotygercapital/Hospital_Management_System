﻿namespace HMS.Server.Models
{
    public class Patient
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Email {  get; set; }
        public string? Password { get; set; }
        public string? Illness { get; set; }
    }
}
