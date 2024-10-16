class WeatherApi
  def self.call(postal_code)
    JSON.parse(Net::HTTP.get("api.weatherapi.com", "/v1/current.json?key=#{Rails.application.credentials.weather_api_key}&q=#{postal_code}&aqi=no"))
  end
end
