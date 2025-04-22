class FamilyService
  def initialize
    # Initialize the service
  end

  def create_family(name)
    Family.new(name)
  end
end
