Rails.application.routes.draw do
  # Books
  resources :books, only: [:index, :show]

  # Borrowing & Returning Books with a clean URL
  post "/books/:id/borrow", to: "borrowings#create", as: "borrow_book"
patch "/books/:id/return", to: "borrowings#update", as: "return_book"

  # Authentication (Explicit Signup/Login Routes)
  post '/signup', to: 'users#create'  # Explicit signup route
  post '/login', to: 'sessions#create' # Login
  delete '/logout', to: 'sessions#destroy' # Logout

  get '/current_user', to: 'sessions#show'

  # Root path
  root 'books#index'
end
