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
  end
  