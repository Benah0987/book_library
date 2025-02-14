class BooksController < ApplicationController
  def index
    books = Book.all
    render json: books
  end

  def show
    book = Book.find(params[:id])
    render json: book
  end

  def borrow
    book = Book.find(params[:id])
    
    # Add borrowing logic here (e.g., mark as borrowed, associate with a user)
    if book.update(borrowed: true)  # Assuming a `borrowed` column exists
      render json: { message: "Book borrowed successfully!", book: book }, status: :ok
    else
      render json: { error: book.errors.full_messages }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Book not found" }, status: :not_found
  end

  private

  def book_params
    params.permit(:title, :author, :isbn, :image_url)
  end

  private

def set_book
  @book = Book.find(params[:book_id])
rescue ActiveRecord::RecordNotFound
  render json: { error: "Book not found" }, status: :not_found
end

end
