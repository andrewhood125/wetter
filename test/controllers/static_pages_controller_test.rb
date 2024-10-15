require "test_helper"

class StaticPagesControllerTest < ActionDispatch::IntegrationTest
  test "home" do
    get "/"
    assert_equal 200, status
  end
end
