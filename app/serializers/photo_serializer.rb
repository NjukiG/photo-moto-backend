class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :title, :album_id

  belongs_to :album
end
