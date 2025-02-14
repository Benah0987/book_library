Rails.application.routes.draw do
  # Books
  resources :books, only: [:index, :show]

  # Borrowing & Returning Books with a clean URL
  post '/borrow/:id', to: 'borrowings#create', as: 'borrow_book'   # Borrow a book
  post '/return/:id', to: 'borrowings#return_book', as: 'return_book' # Return a book

  # Authentication (Explicit Signup/Login Routes)
  post '/signup', to: 'users#create'  # Explicit signup route
  post '/login', to: 'sessions#create' # Login
  delete '/logout', to: 'sessions#destroy' # Logout

  get '/current_user', to: 'sessions#show'

  # Root path
  root 'books#index'
end
