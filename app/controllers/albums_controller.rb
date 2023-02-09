class AlbumsController < ApplicationController
    def index
        albums = Album.all 
        render json: albums, status: :ok
    end

    def create
        album = @current_user.albums.create!(album_params)
        render json: album, status: :created
    end

    private

    def album_params
        params.permit(:title)
    end

end
