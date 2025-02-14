# Clear existing data
Book.destroy_all

# Seed Books
books = [
  { title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", isbn: "978-0201616224", image_url: "https://imgs.search.brave.com/fgxmNEX0OJye6DpfXZ3N3Vq2KxiBTHoUvp-H5waxBbk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZWNvZGVjYW1w/Lm9yZy9uZXdzL2Nv/bnRlbnQvaW1hZ2Vz/L3NpemUvdzIwMDAv/MjAyMC8wMS81MW56/OVJPdW9ITC0xLmpw/Zw" },
  { title: "Clean Code", author: "Robert C. Martin", isbn: "978-0132350884", image_url: "https://imgs.search.brave.com/f26yMz5DhmYS35c88QpSjUGAMWOhxjKgsrefCZdZTSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YXVnbWVudGVkbWlu/ZC5kZS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8wNC9jbGVh/bi1jb2RlLWZlYXR1/cmUuanBn" },
  { title: "You Don’t Know JS", author: "Kyle Simpson", isbn: "978-1491904244", image_url: "https://imgs.search.brave.com/2eQe6bQxqViZgvOsFVeetyGaQxhhseVwOnyOAJorgtI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZWFs/dG91Z2hjYW5keS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMTIveW91LWRv/bnQta25vdy1qcy15/ZXQtZ2V0dGluZy1z/dGFydGVkLWJlc3Qt/d2ViLWRldmVsb3Bl/ci1ib29rcy5qcGc" },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", isbn: "978-1593279509", image_url: "https://imgs.search.brave.com/QByS6n0SEIiEiFZZQMZ9clXGTcrTlzdnPj6HPWww8uI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bGFwYWJvb2tzLmNv/bS9hc3NldHMvaW1h/Z2VzL2Vsb3F1ZW50/amF2YXNjcmlwdC5q/cGc" },
  { title: "Design Patterns", author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides", isbn: "978-0201633610", image_url: "https://imgs.search.brave.com/Vi1ib-d4xpsXd88H_CuIMvtzGVbDT3kddoVE3JR0qc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qb3Vy/bmFsZGV2Lm55YzMu/Y2RuLmRpZ2l0YWxv/Y2VhbnNwYWNlcy5j/b20vMjAxOS8wOC9n/YW5ncy1vZi1mb3Vy/LWRlc2lnbi1wYXR0/ZXJucy1ib29rLnBu/Zw" },
  { title: "Refactoring", author: "Martin Fowler", isbn: "978-0201485677", image_url: "https://imgs.search.brave.com/j7AGDFhka5rnXUQGelVMByfTTz0iDxh9n71ZtGRgQEA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZWZh/Y3RvcmluZy5jb20v/cmVmYWN0Mi5qcGc" },
  { title: "The Mythical Man-Month", author: "Frederick P. Brooks Jr.", isbn: "978-0201835953", image_url: "https://imgs.search.brave.com/8yA736pGA2H3yh0g7AB4u0mhTSvgHtjPW6WtlRLLQ04/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcy/Lm9kLWNkbi5jb20v/SW1hZ2VUeXBlLTEw/MC8wMjkzLTEvJTdC/Q0UxNTlCMEItQkY3/NS00N0U1LUI1RUEt/QzA4NTkzRjk5NUU3/JTdESU1HMTAwLkpQ/Rw" },
  { title: "Code Complete", author: "Steve McConnell", isbn: "978-0735619678", image_url: "https://imgs.search.brave.com/K23J8LcjKWTMhSOBR62FlnfthCEE9rDpT5gfMq0pjrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vRURD/MjFBRjczNDU1QUVG/MzBEOEUzMjgzMEI0/N0UzQ0Q0QTFGNkZE/MS5qcGVn" },
  { title: "Introduction to the Theory of Computation", author: "Michael Sipser", isbn: "978-1133187790", image_url: "https://imgs.search.brave.com/L-diwk11p-_I4ulFd3x1L-Wre4KqDW_MDpTL5IhDU5w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vMTE1/RTFBMkU0MzY1NUNG/NDQyMDUzMTZFMkIz/RkExNDJENzQyQjMy/Qy5qcGVn" },
  { title: "Working Effectively with Legacy Code", author: "Michael Feathers", isbn: "978-0131177055", image_url: "https://imgs.search.brave.com/j-wLwKeAfOdpfqlAOE9chyWf5KS9qytXiCsf-NJGdRk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvX2FQ/VlBBZlhfYkNjRF9T/STBTR1FUT0JvQnJv/QVJtQWpjX1N4RjEw/R3RLay5qcGc_YXV0/bz13ZWJwJnM9YjEx/ZDRjZmFiMjk5NjAw/ZGYxMjdmNjk2NTU5/ZWU5MzA5MjYwYjhm/ZQ" }
]

books.each do |book|
  Book.create!(book)
end

puts "✅ Seeded #{Book.count} books!"
