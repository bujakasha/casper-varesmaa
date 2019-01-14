export const postForm = (state, tyyppi) => {
  var formData = new FormData()
  formData.append('_to', 'casper.varesmaa@gmail.com')

  state.nimi && formData.append('nimi', state.nimi)
  state.ajankohta && formData.append('ajankohta', state.ajankohta)
  state.tunti && formData.append('tunti', state.tunti)
  state.viesti && formData.append('viesti', state.viesti)
  state.email && formData.append('email', state.email)
  state.puhelin && formData.append('puhelin', state.puhelin)
  state.pvm && formData.append('pvm', state.pvm)
  tyyppi && formData.append('tyyppi', tyyppi)

  const data = new URLSearchParams(formData)

  return fetch(
    'https://16wbbjjjf0.execute-api.eu-west-1.amazonaws.com/dev/?format=json',
    {
      method: 'POST',
      body: data,
    }
  )
    .then(response => {
      return response.json()
    })
    .then(res => {
      if (res.statusCode === 200) {
        console.log(res)
        return res
      } else {
        console.log('error soittopyyntö form ', res)
        return {err: true, message: res.message, body: res.body}
      }
    })
}
