class CreatePredictions < ActiveRecord::Migration[8.0]
  def change
    create_table :predictions do |t|
      t.string :link
      t.datetime :target_date
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
