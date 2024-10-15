// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

Radar.initialize('prj_test_pk_1703d6ed83e93d2c61f21dd3521a213d666e78f3')
const autocomplete = document.querySelector('#autocomplete-address')
const addressInput = document.querySelector('#address-input') 

addressInput.addEventListener('keyup', () => {
        Radar.autocomplete({
          query: addressInput.value,
          limit: 10
        })
        .then((result) => {
                const { addresses } = result
                autocomplete.innerHTML = ''
                addresses.forEach(address => {
                        autocomplete.insertAdjacentHTML('beforeend', `<div><a href="weather?zip=${address.postalCode}&address=${address.formattedAddress}">${address.formattedAddress}</a></div>`)
                })
        })
        .catch((err) => {
                console.error(err)
        })
});
