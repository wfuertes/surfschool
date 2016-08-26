class Api::UsersController < ApplicationController
    
    def index
        respond_with User.all
    end

    def create
        if @user.present?
            render nothing: true, status: :conflict
        else
            @user = User.new
            @user.assign_attributes(@json['user'])
            if @user.save
                render json: @user
            else
                render nothing: true, status: :bad_request
            end
        end
    end

end