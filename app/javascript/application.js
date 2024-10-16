import Radar from 'radar-sdk-js'


Radar.initialize('prj_test_pk_1703d6ed83e93d2c61f21dd3521a213d666e78f3')
const autocomplete = document.querySelector('#autocomplete-address')
const addressInput = document.querySelector('#address-input') 

if(addressInput) {
  addressInput.addEventListener('keyup', () => {
    Radar.autocomplete({ query: addressInput.value, limit: 10 })
      .then((result) => { 
        const { addresses } = result
        autocomplete.innerHTML = ''
        addresses.forEach(address => {
        autocomplete.insertAdjacentHTML('beforeend', `
        <div>
          <a href="weather?zip=${address.postalCode}&address=${address.formattedAddress}">${address.formattedAddress}</a>
        </div>
        `)
      })
    })
  })
}
