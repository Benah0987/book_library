Rails.application.routes.draw do
  # Books
  resources :books, only: [:index, :show] do
    member do
      post 'borrow', to: 'borrowings#create'   # Borrow a book
      post 'return', to: 'borrowings#return_book' # Return a book
    end
  end

  # Authentication (Explicit Signup/Login Routes)
  post '/signup', to: 'users#create'  # Explicit signup route
  post '/login', to: 'sessions#create' # Login
  delete '/logout', to: 'sessions#destroy' # Logout

  get '/current_user', to: 'sessions#show'


  # Root path
  root 'books#index'
end
