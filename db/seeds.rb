User.create(name: "Test User", email: "test@example.com", password: "password")
Book.create(title: "1984", author: "George Orwell", isbn: "1234567890", available: true)
Book.create(title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "0987654321", available: true)

Book.destroy_all  # Clears existing books to avoid duplicates

books = [
  { title: "1984", author: "George Orwell", isbn: "1234567890", available: true, image_url: "https://example.com/1984.jpg" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "0987654321", available: true, image_url: "https://example.com/to-kill-a-mockingbird.jpg" },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", isbn: "9780201616224", available: true, image_url: "https://example.com/pragmatic-programmer.jpg" },
  { title: "Clean Code", author: "Robert C. Martin", isbn: "9780132350884", available: true, image_url: "https://example.com/clean-code.jpg" },
  { title: "Eloquent Ruby", author: "Russ Olsen", isbn: "9780321584106", available: true, image_url: "https://example.com/eloquent-ruby.jpg" },
  { title: "You Don't Know JS", author: "Kyle Simpson", isbn: "9781491904244", available: true, image_url: "https://example.com/ydkjs.jpg" },
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford", isbn: "9780596517748", available: true, image_url: "https://example.com/js-good-parts.jpg" },
  { title: "Ruby on Rails Tutorial", author: "Michael Hartl", isbn: "9780134598627", available: true, image_url: "https://example.com/rails-tutorial.jpg" },
  { title: "Design Patterns", author: "Erich Gamma", isbn: "9780201633610", available: true, image_url: "https://example.com/design-patterns.jpg" },
  { title: "Refactoring", author: "Martin Fowler", isbn: "9780201485677", available: true, image_url: "https://example.com/refactoring.jpg" }
]

books.each do |book|
  Book.create!(book)
end

puts "✅ 10 books added successfully!"
