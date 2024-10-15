require "test_helper"

class WeatherControllerTest < ActionDispatch::IntegrationTest
  test "weather forecast" do
    get "/weather?zip=97035"
    assert_equal 200, status
  end
end
