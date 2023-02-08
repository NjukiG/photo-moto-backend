class Photo < ApplicationRecord
    validates :title, presence: true
    belongs_to :album
end
