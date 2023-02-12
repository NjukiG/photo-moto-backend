class PhotosController < ApplicationController

    def index
        photos = Photo.all
        render json: photos, status: :ok
    end

   
    # def create
    #     photo = @current_user.photos.create!(photo_params)
    #     render json: photo, status: :created
    # end


    def create
        photo = Photo.create!(photo_params)
        render json: photo, status: :created
    end

    def show
        photo = Photo.find_by(id: params[:id])
        render json: photo, status: :ok
    end

    def update
        photo = Photo.find_by(id: params[:id])
        photo.update(photo_params)
        render json: photo, status: :accepted
    end

    def destroy
        photo = Photo.find_by(id: params[:id])
        photo.destroy
        head :no_content
    end

    private

    def photo_params
        params.permit(:title, :image_url, :album_id)
    end

end
