class BooksController < ApplicationController
  skip_before_action :verify_authenticity_token  # Disable CSRF for API requests

  def index
    books = Book.all
    render json: books
  end

  def show
    book = Book.find(params[:id])
    render json: book
  end

  def create
    book = Book.find(params[:id])
    # Add borrowing logic here
    render json: { message: "Book borrowed successfully!" }, status: :created
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Book not found" }, status: :not_found
  end

  private

  def book_params
    params.permit(:title, :author, :isbn, :image_url)
  end
end
