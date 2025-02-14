User.create(name: "Test User", email: "test@example.com", password: "password")
Book.create(title: "1984", author: "George Orwell", isbn: "1234567890", available: true)
Book.create(title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "0987654321", available: true)

Book.destroy_all  # Clears existing books to avoid duplicates

books = [
  { title: "1984", author: "George Orwell", isbn: "1234567890", available: true, image_url: "https://imgs.search.brave.com/bF_PZc9ihCeXnW6ltpWXaeRDulOumJBdayjBlvBtkw8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg2Lzll/Lzc2Lzg2OWU3Njg0/NWQ1ZGMyODA2Y2Zm/YWI3NmVhNWU4NDNj/LmpwZw" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "0987654321", available: true, image_url: "https://imgs.search.brave.com/j1W9ihXPW7Vlh-a68_DE1aerpM9S1hUvAuLDWaicags/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vNTdD/QjA1MjQ2M0M2RDUw/NDVEREQ5OTZFQ0FE/NzkwNjRGQkUzMDUx/Ni5qcGVn" },
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", isbn: "9780201616224", available: true, image_url: "https://imgs.search.brave.com/Vw6rhjjVlz7D4dslwka7ToVim1XESH3AYFuIi5Ems-o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFhMURZYWVjWkwu/anBn" },
  { title: "Clean Code", author: "Robert C. Martin", isbn: "9780132350884", available: true, image_url: "https://imgs.search.brave.com/v_M6I5WyyKgISuLIgEYUCuOApHWqOly5EqGkUTaX91o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sZWFy/bmluZy5vcmVpbGx5/LmNvbS9saWJyYXJ5/L2NvdmVyLzk3ODAx/MzYwODMyMzgvMjUw/dy8.jpeg" },
  { title: "Eloquent Ruby", author: "Russ Olsen", isbn: "9780321584106", available: true, image_url: "https://imgs.search.brave.com/LUWfd1CYHI1-yQgwvWFyf9ztCT1_0kNW7WQSUK2uoL0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vNEQ4/NzU1N0U3RTlCNjkw/M0JGRjQwNjg4RkRF/RTFGQzcwRTdDNEI2/Qy5qcGVn" },
  { title: "The road to React", author: "Kyle Simpson", isbn: "9781491904244", available: true, image_url: "https://imgs.search.brave.com/jDYXtvqKnZh0wk7EJA3AQzdZgjHCYvRUeGoCgXbocjQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxdm5kUlhnQmdM/LmpwZw" },
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford", isbn: "9780596517748", available: true, image_url: "https://imgs.search.brave.com/Utyg2HcS_n3ZndlE6JhyX7JbwHtkVCTR5e6GJlxm_j8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vODE2/NjRBNjIzRkJCRjU2/QTgzMzc1ODY4M0Q5/QjM5OUVDNTFGNDY3/OS5qcGVn" },
  { title: "Ruby on Rails Tutorial", author: "Michael Hartl", isbn: "9780134598627", available: true, image_url: "https://imgs.search.brave.com/OQY2eoCNGBYfPiMcBfIzXWbTteESDRFcWefcOMwO8dE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sZWFy/bmluZy5vcmVpbGx5/LmNvbS9saWJyYXJ5/L2NvdmVyLzk3ODAx/MzgwNTAwNjEvMjUw/dy8.jpeg" },
  { title: "Design Patterns", author: "Erich Gamma", isbn: "9780201633610", available: true, image_url: "https://imgs.search.brave.com/Vi1ib-d4xpsXd88H_CuIMvtzGVbDT3kddoVE3JR0qc8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9qb3Vy/bmFsZGV2Lm55YzMu/Y2RuLmRpZ2l0YWxv/Y2VhbnNwYWNlcy5j/b20vMjAxOS8wOC9n/YW5ncy1vZi1mb3Vy/LWRlc2lnbi1wYXR0/ZXJucy1ib29rLnBu/Zw" },
  { title: "Refactoring", author: "Martin Fowler", isbn: "9780201485677", available: true, image_url: "https://imgs.search.brave.com/dlpzyMgbmb1V1k6u2lH9tIwCK4MWs6H06sr5AW4ddjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnRo/cmlmdGJvb2tzLmNv/bS9hcGkvaW1hZ2Vo/YW5kbGVyL20vNUQw/NUI5QkU2MjczQjAw/N0ZGMjUwOEE0MTBF/NzMzMkEyQUY0MjND/Ni5qcGVn" }
]

books.each do |book|
  Book.create!(book)
end

puts "✅ 10 books added successfully!"
