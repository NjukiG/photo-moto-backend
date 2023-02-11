class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :album_id

  belongs_to :album
end
