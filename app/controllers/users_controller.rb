class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entity
        end
    end


    def show
        render json: @current_user
    end

    private

    def user_params
        params.permit(:name, :username, :email, :password, :password_confirmation,)
    end
end
