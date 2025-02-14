class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.string :author, null: false
      t.string :isbn, null: false, unique: true
      t.boolean :available, default: true

      t.timestamps
    end

    add_index :books, :isbn, unique: true
  end
end
