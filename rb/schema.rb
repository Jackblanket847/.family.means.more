ActiveRecord::Schema.define do
  create_table :families do |t|
    t.string :name
    t.timestamps
  end

  create_table :participants do |t|
    t.string :name
    t.references :family, foreign_key: true
    t.timestamps
  end
end
