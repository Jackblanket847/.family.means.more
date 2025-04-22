class Family
  attr_accessor :name, :participants

  def initialize(name)
    @name = name
    @participants = []
  end
end
