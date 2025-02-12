class SessionsController < ApplicationController
  before_action :require_login, only: [:show]
  skip_before_action :verify_authenticity_token

  # Login action
  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { message: "Login successful", user: user }, status: :ok
    else
      render json: { error: "Invalid email or password" }, status: :unauthorized
    end
  end

  # Logout action
  def destroy
    session[:user_id] = nil
    render json: { message: "Logged out successfully" }, status: :ok
  end

  # Fetch current logged-in user
  def show
    render json: { user: current_user }, status: :ok
  end

  private

  def require_login
    unless current_user
      render json: { error: "You must be logged in" }, status: :unauthorized
    end
  end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
end
