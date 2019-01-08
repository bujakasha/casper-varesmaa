import React from 'react'
import '../_leave_contact.scss'
import Input from '../../input'
import {Textarea} from '../../input'
import LoadingBtn from '../../loading_btn'
import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'

const validate = data => {
  let errors = {}
  if (!data.viesti) {
    errors = {
      ...errors,
      viesti: 'Lisää viesti',
    }
  }
  if (!data.nimi) {
    errors = {
      ...errors,
      nimi: 'Lisää nimi',
    }
  }
  if (
    !data.email ||
    !data.email.match(
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
    )
  ) {
    errors = {
      ...errors,
      email: 'Sähköposti ei ole kelvollinen',
    }
  }
  return errors
}

class MessageForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      viesti: null,
      puhelin: null,
      email: null,
      nimi: null,
      loading: false,
    }
  }
  sendForm = event => {
    this.setState({loading: true}, () => {
      setTimeout(() => {
        const errors = validate(this.state)
        if (errors && errors !== {}) {
          this.setState({errors, loading: false})
        } else {
          this.setState({loading: false})
        }
      }, 400)
    })

    event.preventDefault()
    event.stopPropagation()
  }

  onChange = event => {
    console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  onChangeInputField = (name, value) => {
    console.log(name, value)
    this.setState({
      [name]: value,
    })
  }

  render() {
    const {nimi, viesti, puhelin, email, errors, loading} = this.state
    return (
      <form className="lomake " onSubmit={this.sendForm}>
        <I18n>
          {({i18n}) => (
            <>
              <div className="form-row">
                <div className="col-md-5  col-lg-6 pr-md-4 pr-lg-5 px-0 mb-4">
                  <Textarea
                    label={i18n._(t`input_viesti`)}
                    name="viesti"
                    rows="4"
                    value={viesti}
                    onChange={this.onChange}
                    placeholder={i18n._(t`input_viesti_placeholder`)}
                    error={errors && errors.viesti}
                    errorMsg={i18n._(t`input_viesti_error`)}
                    inputStyle={{maxWidth: '300px'}}
                  />
                </div>

                <div className=" col-md-6 ">
                  <Input
                    label="Nimi"
                    name="nimi"
                    value={nimi}
                    onChange={this.onChange}
                    placeholder="Kirjoita nimesi"
                    error={errors && errors.nimi}
                    errorMsg="Lisää nimesi"
                    inputStyle={{maxWidth: '300px'}}
                  />

                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.onChange}
                    placeholder={i18n._(t`input_email_placeholder`)}
                    error={errors && errors.email}
                    errorMsg={i18n._(t`input_email_error`)}
                    inputStyle={{maxWidth: '600px'}}
                  />
                </div>
              </div>

              <div className="col-md-12 px-0 d-md-flex justify-content-between mt-5">
                <LoadingBtn
                  type="submit"
                  label={i18n._(t`btn_viesti`)}
                  className="btn-secondary  bt-block px-5 btn-simple"
                  isLoading={loading}
                  onClick={this.sendForm}
                />
                <button
                  type="button"
                  className="btn btn-simple mt-4 mt-md-0"
                  onClick={this.props.closeModal}
                >
                  <Trans id="btn_soittopyynto" />
                </button>
              </div>
            </>
          )}
        </I18n>
      </form>
    )
  }
}

export default MessageForm

/*

 {!errors&&!errors!=={}?
      <p
      style={{maxWidth:'400px'}}
       className="border  border-danger px-3 py-1 text-danger">
      Korjaa virheet</p>:null}
      
      
      
      */
