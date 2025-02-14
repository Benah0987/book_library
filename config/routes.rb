Rails.application.routes.draw do
  # Books
  resources :books, only: [:index, :show] do
    post 'borrow', to: 'borrowings#create'  # Borrow a book
    post 'return', to: 'borrowings#return_book' # Return a book
  end

  # Borrowings
  get '/borrowings/borrowed_books_count', to: 'borrowings#borrowed_books_count'  # Fix missing route

  # Authentication
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/current_user', to: 'sessions#show'

  resources :books, only: [:index, :show] do
    member do
      post :borrow, to: "borrowings#create"
      patch :return, to: "borrowings#return_book"
    end
  end

  get "borrowed_books_count", to: "borrowings#borrowed_books_count"

  get "/books/:id/borrowing_status", to: "borrowings#borrowing_status"


  # Root path
  root 'books#index'
end
