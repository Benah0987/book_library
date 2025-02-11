Rails.application.routes.draw do
  resources :books, only: [:index, :show]

  # Authentication
  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Borrowing
  post '/books/:id/borrow', to: 'borrowings#create', as: 'borrow_book'
  post '/books/:id/return', to: 'borrowings#return_book', as: 'return_book'

  root 'books#index'
end
