import React from 'react'
import PropTypes from 'prop-types'

import '../_leave_contact.scss'
import DateInput from '../date_input'
import startOfTomorrow from 'date-fns/start_of_tomorrow'
import isWeekend from 'date-fns/is_weekend'
import addDays from 'date-fns/add_days'
import addHours from 'date-fns/add_hours'
import InputMask from 'react-input-mask';

import LoadingBtn from '../../loading_btn'
import Input from '../../input'

import 'rc-input-number/assets/index.css'
import NumericInput from 'react-numeric-input'
import NumberFormat from 'react-number-format'
import { postSoittopyynto } from '../../../utils/form_request'
import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'
//import TimeInput from 'react-time-input';

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
  return errors
}

const getNextWeekday = () => {
  let nextDay = startOfTomorrow()
  if (isWeekend(nextDay)) {
    nextDay = addDays(nextDay, 1)
  }
  if (isWeekend(nextDay)) {
    //nextDay = addDays(nextDay, 1)
  }
  return nextDay;
  return addHours(nextDay, 13)
}
class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      ajankohta: getNextWeekday(),
      tunti: 13,
      puhelin: '+(358) ',
      loading: false,
    }
  }

  sendForm = event => {
    this.setState({loading: true}, () => {
      postSoittopyynto(this.state)
      this.setState({loading: false})
      //.then(res=>{
     //   this.setState({loading: false})
     // })
     /*
      setTimeout(() => {
        const errors = validate(this.state)
        if (errors && errors !== {}) {
          this.setState({errors, loading: false})
        } else {
          this.setState({loading: false})
        }
      }, 400)*/
    })

    event.preventDefault()
    event.stopPropagation()
  }

  onChange = event => {
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

  numberWithCommas = x => {
    return x
  }
  format = num => {
    if(num.match(/\d\d:/)){
      return num
    }
    return ` ${num}:00`
  }

  render() {
    const {ajankohta, tunti, nimi, puhelin, errors, loading} = this.state
    return (
      <form className="lomake" onSubmit={this.sendForm}>
        <I18n>
          {({i18n}) => (
            <>
              <div className="form-row">
                <div className="col-5 col-md-5 col-lg4 col-lg-5 pr-md-4 pr-lg-5 px-0 mb-4">
                  <p className="mb-1">
                    <Trans id="input_ajankohta" />
                  </p>
                  <DateInput
                    value={ajankohta}
                    onChange={this.onChangeInputField}
                  />
                </div>

                <div className="col-5 col-md-3 col-lg-2 form-group px-0">
                  <label className="mb-0" for="">
                    <Trans id="input_tunti" />
                  </label>
                <NumericInput
                    className={
                      'date-whole noFocus form-contro' +
                      ((errors && errors.tunti && 'is-invalid') || '')
                    }
                    min={9}
                    max={tunti>21?2200:22}
                    value={tunti}
                    format={this.format}
                    style={false}
                    onChange={val => this.onChangeInputField('tunti', val)}
                  />
                   
                  
                  
                 
                  {errors && errors.tunti ? (
                    <div className="invalid-feedback">{errors.tunti}</div>
                  ) : null}
                </div>
              </div>

              <div className="form-row">
                <div className="col-md-4 col-lg-5 ">

             

                  <Input

                    label="Nimi"
                    name="nimi"
                    value={nimi}
                    onChange={this.onChange}
                    placeholder={"    "||i18n._(t`input_nimi_placeholder`)}
                    error={errors && errors.nimi}
                    errorMsg={i18n._(t`input_nimi_error`)}
                    inputStyle={{maxWidth: '300px'}}
                    inputStyle={{maxWidth: !nimi&&'240px'||'300px'}}
                  />
                </div>

                <div className="col-md-5">
                  <div className="form-group  pr-lg-5">
                    <label for="exampleInputEmail1">
                      <Trans id="input_puhelin" />
                    </label>
                  
                    <NumberFormat
                      name="puhelin"
                      value={puhelin}
                      className={
                        ' w-100 form-control form-control-sm sw-input datewhole noFocus ' +
                        ((errors && errors.puhelin && 'is-invalid') || '')
                      }
                      onChange={this.onChange}
                      format="+(###) ### ### ###"
                      mask="_"
                    />
                    {errors && errors.puhelin ? (
                      <div className="invalid-feedback">
                        {errors.puhelin && i18n._(t`input_error`)}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="col-md-12 px-0 d-md-flex justify-content-between mt-5">
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
                  onClick={this.props.closeModal}
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
