class WeatherController < ApplicationController
  def zip
    @address = address_params[:address]
    @postal_code = address_params[:zip]

    # Fetch weather for this postal code
    # TODO
  end

  private

  def address_params
    params.permit(:address, :zip)
  end
end
