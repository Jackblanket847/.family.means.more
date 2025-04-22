function formatDate(date) {
    return date.toISOString().split('T')[0];
}

module.exports = { formatDate };

module Helpers
  def format_date(date)
    date.strftime('%Y-%m-%d')
  end
end
