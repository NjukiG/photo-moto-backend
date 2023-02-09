class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title

  belongs_to :user
  has_many :photos
end
