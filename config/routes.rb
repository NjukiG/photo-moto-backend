Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  
  get "/users", to: "users#index"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  resources :albums, only: [:index, :create]
  resources :photos, only: [:index, :create, :show, :update, :destroy]
end
