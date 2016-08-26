class ApplicationController < ActionController::Base

  API_KEY = "4b24064d-5590-4a64-916e-1a0e2dad26ce"

  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  respond_to :json, :xml 
  before_filter :authenticate_user_from_token!

  private
    def authenticate_user_from_token!
      token = request.headers["X-TOKEN"]

      if !token || (token != API_KEY)
        render nothing: true, status: :unauthorized
      end
    end
end