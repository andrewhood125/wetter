# Wetter (Weather)

Wetter is a simple microsite designed to accept your address as an input and
fetch the weather for that location. It does a couple of neat things under the
hood, like caching responses. 

## Address Input

While the weather is fetched using a postal code. The address input is free
form in order to allow the greatest level of flexibility. This means we need to
be able to parse an address and extract out the postal code from it. We rely on
a service called Radar to provide autocompletion and structured address data.
This happens on the frontend client and provides real-time updates as they type
an address.

## Live Weather

The current weather and forecast data is fetched from an online service called
weatherapi.com. When a user clicks an address the postal code for that address
is used to look for a cached weather data response.

# Development

This microsite leverages Rails ecosystem whenever possible.

- Dartsass is used to manage stylesheets. They can be found in
  `app/assets/stylesheets`.
- The out-of-the-box `bin/dev` is used to boot a server as well as dartsass to
  watch for stylesheet changes.
- The default testing framework is leveraged to keep our app healthy and give
  us confidence in changes we make.
- The server side keys are encrypted using Rails credentials.
- The caching mechanism is generic through `Rails.cache` and can be configured
  to be backed by many different providers.
- GitHub Workflows also provided out-of-the-box by `rails new`
- Rubocop for linting and keeping things pretty.

## Getting Started

It should be as easy as `bin/setup` followed by a `bin/dev`. Then you'll be
ready to start hammering away! .. you are starting with tests right?

## Methodology

KISS! Instead of defining our models for existing things like addresses or
weather. Since we're relying on outside services for address autocomplete and
weather forecasts, we also rely on them for our model. This allows the
microsite to be as thin as possible while still accomplishing all the goals we
set out to accomplish. More code is more maintenance! 


# Radar (Address Autocompletion)

The Radar Web SDK is leveraged, and documentation can be found here: https://radar.com/documentation/sdk/web#search 

If you would like to see all the query params and response object you can find the api documentation here: https://radar.com/documentation/api#search

# Weather API

The Realtime API provided by Weather API is used to get weather data. You can find more information about this endpoint here: https://www.weatherapi.com/docs/#apis-realtime

A API Explorer is also provided which allows you to tinker with query params and see live responses and can be found here: https://www.weatherapi.com/api-explorer.aspx
