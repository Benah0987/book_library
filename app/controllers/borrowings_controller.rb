class BorrowingsController < ApplicationController
  before_action :authorize_request
  before_action :set_book, only: [:create, :return_book]

  def create
    if @book.available
      borrowing = @current_user.borrowings.create(book: @book, due_date: 2.weeks.from_now, returned: false)
      @book.update(available: false)

      render json: { message: "Book borrowed successfully", borrowing: borrowing }, status: :ok
    else
      render json: { error: "Book is already borrowed" }, status: :unprocessable_entity
    end
  end

  def borrowed_books_count
    count = @current_user.borrowings.where(returned: false).count
    render json: { borrowed_books: count }, status: :ok
  end


  def return_book
    borrowing = @current_user.borrowings.find_by(book: @book, returned: false)

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
  rescue ActiveRecord::RecordNotFound
    render json: { error: "Book not found" }, status: :not_found
  end

  def authorize_request
    header = request.headers['Authorization']
    token = header.split(' ').last if header

    begin
      decoded = JsonWebToken.decode(token)
      @current_user = User.find_by(id: decoded[:user_id])
    rescue JWT::DecodeError, ActiveRecord::RecordNotFound
      @current_user = nil
    end

    render json: { error: "Unauthorized" }, status: :unauthorized unless @current_user
  end
end
