class Api::UsersController < ApplicationController
    respond_to :json
    
    def index
        @users = [{:name => "Willian", :idade => 32}]
        respond_with @users
    end
end
