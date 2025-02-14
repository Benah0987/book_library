# Clear existing data
Book.destroy_all

# Seed Books
books = [
  { title: "The Pragmatic Programmer", author: "Andrew Hunt & David Thomas", isbn: "978-0201616224", image_url: "https://example.com/pragmatic.jpg" },
  { title: "Clean Code", author: "Robert C. Martin", isbn: "978-0132350884", image_url: "https://example.com/cleancode.jpg" },
  { title: "You Don’t Know JS", author: "Kyle Simpson", isbn: "978-1491904244", image_url: "https://example.com/ydkjs.jpg" },
  { title: "Eloquent JavaScript", author: "Marijn Haverbeke", isbn: "978-1593279509", image_url: "https://example.com/eloquentjs.jpg" },
  { title: "Design Patterns", author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides", isbn: "978-0201633610", image_url: "https://example.com/designpatterns.jpg" },
  { title: "Refactoring", author: "Martin Fowler", isbn: "978-0201485677", image_url: "https://example.com/refactoring.jpg" },
  { title: "The Mythical Man-Month", author: "Frederick P. Brooks Jr.", isbn: "978-0201835953", image_url: "https://example.com/mythicalman.jpg" },
  { title: "Code Complete", author: "Steve McConnell", isbn: "978-0735619678", image_url: "https://example.com/codecomplete.jpg" },
  { title: "Introduction to the Theory of Computation", author: "Michael Sipser", isbn: "978-1133187790", image_url: "https://example.com/theorycomp.jpg" },
  { title: "Working Effectively with Legacy Code", author: "Michael Feathers", isbn: "978-0131177055", image_url: "https://example.com/legacycode.jpg" }
]

books.each do |book|
  Book.create!(book)
end

puts "✅ Seeded #{Book.count} books!"
