class BorrowingsController < ApplicationController
    before_action :set_book, only: [:create, :return_book]
    before_action :require_login
  
    def create
      if @book.available
        borrowing = current_user.borrowings.create(book: @book, due_date: 2.weeks.from_now, returned: false)
        @book.update(available: false)
  
        render json: { message: "Book borrowed successfully", borrowing: borrowing }, status: :ok
      else
        render json: { error: "Book is already borrowed" }, status: :unprocessable_entity
      end
    end
  
    def return_book
      borrowing = current_user.borrowings.find_by(book: @book, returned: false)
  
      if borrowing
        borrowing.update(returned: true)
        @book.update(available: true)
        render json: { message: "Book returned successfully" }, status: :ok
      else
        render json: { error: "No record of borrowing found" }, status: :unprocessable_entity
      end
    end
  
    private
  
    def set_book
      @book = Book.find(params[:id])
    end
  
    def require_login
      unless current_user
        render json: { error: "You must be logged in" }, status: :unauthorized
      end
    end
  
    def current_user
      @current_user ||= User.find_by(id: session[:user_id])
    end
  end
  