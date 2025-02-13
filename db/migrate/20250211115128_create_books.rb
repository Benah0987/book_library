class CreateBooks < ActiveRecord::Migration[7.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :isbn
      t.boolean :available
      t.string :image_url

      t.timestamps
    end
  end
end
