class SessionsController < ApplicationController
    skip_before_action :authorize_request, only: [:create]
  
    def create
      user = User.find_by(email: params[:email])
  
      if user&.authenticate(params[:password])
        token = JsonWebToken.encode(user_id: user.id)
        render json: { user: user, token: token }, status: :ok
      else
        render json: { error: 'Invalid credentials' }, status: :unauthorized
      end
    end
  
    def destroy
      render json: { message: 'Logged out successfully' }, status: :ok
    end
  
    def show
      render json: { user: @current_user }
    end
  end
  