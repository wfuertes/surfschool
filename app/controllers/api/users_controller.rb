class Api::UsersController < ApplicationController
    skip_before_filter :verify_authenticity_token
    
    def index
        respond_with User.all
    end

    def create
        data = JSON.parse request.body.string

        @user = User.new
        @user.assign_attributes(data)
        if @user.save
            render json: @user
        else
            render nothing: true, status: :bad_request
        end
    end

end