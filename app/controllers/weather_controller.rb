class WeatherController < ApplicationController
  def zip
    @address = address_params[:address]
    @postal_code = address_params[:zip]
    @cached = true
    @weather = Rails.cache.fetch(@postal_code, expires_in: 30.minutes) do
      @cached = false
      WeatherApi.call(@postal_code)
    end
  end

  private

  def address_params
    params.permit(:address, :zip)
  end
end
