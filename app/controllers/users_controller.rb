class UsersController < ApplicationController
    
    skip_before_action :authorize, only: [:create]

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

    # def show
    #     user = User.find_by(id: session[:user_id])
    #     render json: user
    # end

    def index
        users = User.all
        render json: users
      end

    private

    def user_params
        params.permit(:name, :username, :email, :password, :password_confirmation,)
    end
end
