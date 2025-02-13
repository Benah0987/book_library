class Book < ApplicationRecord
  validates :title, :author, :isbn, presence: true
  validates :isbn, uniqueness: true
  
  has_many :borrowings
  
  # Ensure `available` is always true or false
  validates :available, inclusion: { in: [true, false] }

  # Allow storing an image URL
  validates :image_url, presence: true
end
