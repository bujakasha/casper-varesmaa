import React from 'react'
import PropTypes from 'prop-types'
import DateInput from './date_input'
import LoadingBtn from '../../loading_btn'
import Input from '../../input'
import dateFnsFormat from 'date-fns/format'
import FormattedInput from '@buttercup/react-formatted-input'
import {postForm} from '../../../utils/form_request'
import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'
import { validateSoittopyynto, getNextWeekday, telPattern, telPatternFin} from '../../../utils/forms'
import 'rc-input-number/assets/index.css'

const FORMAT = 'D/M/YYYY'

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ajankohta: getNextWeekday(),
      tunti: '13:00',
      puhelin: '+(358)',
      loading: false,
    }
  }

  sendForm = event => {
    this.setState({loading: true}, () => {
      console.log({
        ...this.state,
        times: null,
        pvm: dateFnsFormat(this.state.ajankohta, FORMAT, {locale: 'fi'}),
      })
      postForm(
        {
          ...this.state,
          pvm: dateFnsFormat(this.state.ajankohta, FORMAT, {locale: 'fi'}),
        },
        'Soittopyyntö'
      ).then(res => {
        if (res.err) {
          this.setState({
            message: (!res.body && res.message) || null,
            errors: res.body,
            loading: false,
          })
        } else {
          this.setState({loading: false, errors: {}})
          this.props.changeView(null, 3)
        }
      })
    })

    event.preventDefault()
    event.stopPropagation()
  }

  onBlur=(event)=>{
    /*
    const errors = validateSoittopyynto({[event.target.name]:event.target.value})
    if(errors){
      this.setState({errors: errors})
    }*/
  }
  onChangeInputField = (name,value) => {
    this.setState({
      [name]:value,
    })
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onPuhelinChange = event => {
    let value = (event.target && event.target.value) || event
    this.setState({
      puhelin: value,
    })
  }

  render() {
    const {
      ajankohta,
      email,
      tunti,
      nimi,
      puhelin,
      errors,
      loading,
    } = this.state
    return (
      <form className="lomake" onSubmit={this.sendForm}>
        <I18n>
          {({i18n}) => (
            <>
              <div className="col-12 px-0">
                <div className="row ">
                  <div className="col-lg-6 justify-content-left d-flex flex-wrap">
                    <div className="form-group mb-md-0">
                      <label className="mb-1">
                        <Trans id="input_ajankohta" />
                      </label>
                      <DateInput
                        value={ajankohta}
                        tunti={tunti}
                        onChange={this.onChangeInputField}
                        error={errors && errors.pvm||errors && errors.tunti}
                        errorMsg={i18n._(t`input_nimi_ajankohta`)}
                      />
                    </div>

                    <Input
                      label="Nimi"
                      name="nimi"
                      onBlur={this.onBlur}
                      outerClassName=" mt-lg-4 pt-lg-1"
                      value={nimi}
                      onChange={this.onChange}
                      placeholder={'    ' || i18n._(t`input_nimi_placeholder`)}
                      error={errors && errors.nimi}
                      errorMsg={i18n._(t`input_nimi_error`)}
                    />
                  </div>
                  <div className="col-lg-5  justify-content-center d-flex d-lg-block flex-wrap">
                    <Input
                       label={i18n._(t`input_email`)}

                      name="email"
                      onBlur={this.onBlur}
                      type="email"
                      value={email}
                      onChange={this.onChange}
                      error={errors && errors.email}
                      errorMsg={i18n._(t`input_email_error`)}
                    />

                    <div className="form-group mt-lg-4 pt-lg-2">
                      <label for="exampleInputEmail1">
                        <Trans id="input_puhelin" />
                      </label>
                      <FormattedInput
                        className={
                          'sw-input noFocus noBorder form-control form-control-sm  ' +
                          ((errors && errors.puhelin && ' is-invalid') || '')
                        }
                        label={i18n._(t`input_puhelin`)}
                        format={
                          (puhelin &&
                            puhelin.match(/(^\+\(0|^0)/) &&
                            telPatternFin) ||
                          telPattern
                        }
                        onBlur={this.onBlur}
                        value={puhelin}
                        name="puhelin"
                        onChange={this.onPuhelinChange}
                        placeholder=""
                      />
                      {errors && errors.puhelin ? (
                        <div className="invalid-feedback">
                          {errors.puhelin && i18n._(t`input_error`)}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 d-lg-flex text-center justify-content-between mt-5">
                <LoadingBtn
                  type="submit"
                  label={i18n._(t`btn_soittopyynto`)}
                  className="btn-secondary  bt-block px-5 btn-simple"
                  isLoading={loading}
                  onClick={this.sendForm}
                />

                <button
                  type="button"
                  className="btn btn-simple mt-4 mt-md-0"
                  onClick={this.props.changeView.bind(this, null, 1)}
                >
                  <Trans id="btn_viesti" />
                </button>
              </div>
            </>
          )}
        </I18n>
      </form>
    )
  }
}

ContactForm.propTypes = {
  closeModal: PropTypes.func.isRequired,
}

export default ContactForm

function spliceSlice(str, index, count, add) {
  // We cannot pass negative indexes directly to the 2nd slicing operation.
  if (index < 0) {
    index = str.length + index
    if (index < 0) {
      index = 0
    }
  }

  return str.slice(0, index) + (add || '') + str.slice(index + count)
}

/*

   <Input
                        label="puhelin"
                        name="puhelin"
                        className="noBorder"
                        value={formatPhoneNumber(puhelin)}
                        onChange={this.onPuhelinChange}
                        error={errors && errors.puhelin}
                        errorMsg={i18n._(t`input_nimi_error`)}
                        inputStyle={{maxWidth: '300px'}}
                        inputStyle={{maxWidth: !nimi&&'240px'||'300px'}}
                        />

    <NumericInput
                    className={
                      'date-whole noFocus form-contro ' +
                      ((errors && errors.tunti && ' is-invalid') || '')
                    }
                    min={9}
                    max={tunti>21?2200:22}
                    value={tunti}
                    format={this.format}
                    style={false}
                    onChange={val => this.onChangeInputField('tunti', val)}
                  />


                  <InputMask mask="+(999)" maskChar={null}
  value={puhelin} onChange={this.onPuhelinChange}>
    {(inputProps) => 
     <Input
     name="puhelin"
     {...inputProps}
     className="noBorder"
     inputStyle={{maxWidth: !nimi&&'240px'||'300px'}}
     />}
  </InputMask>

                    <NumberFormat
                      name="puhelin"
                      value={puhelin}
                      className={
                        ' w-100 form-control form-control-sm sw-input noBorder datewhole noFocus ' +
                        ((errors && errors.puhelin && 'is-invalid') || '')
                      }
                      onChange={this.onChange}
                      format="+(###) ### ### ###"
                      mask="_"
                    />


const validate = data => {
  let errors = {}
  if (!data.nimi) {
    errors = {
      ...errors,
      nimi: 'Lisää nimesi',
    }
  }
  if (!data.ajankohta) {
    errors = {
      ...errors,
      ajankohta: 'Lisää päivämäärä',
    }
  }
  if (!data.tunti) {
    errors = {
      ...errors,
      tunti: 'Lisää tarkempi aika',
    }
  }
  if (
    !data.puhelin ||
    !`${data.puhelin}`.match(/^\+[(]\d{3}[)]\s\d{3} \d{3} \d{3}/g)
  ) {
    errors = {
      ...errors,
      puhelin: 'Puhelinnumero ei ole kelvollinen',
    }
  }
  return errors&&errors!=={}&&errors||false
}
*/
