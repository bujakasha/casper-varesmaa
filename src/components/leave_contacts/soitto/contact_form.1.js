import React from 'react'
import PropTypes from 'prop-types'
import LoadingBtn from '../../loading_btn'
import dateFnsFormat from 'date-fns/format'
import FormattedInput from '@buttercup/react-formatted-input'
import {postForm} from '../../../utils/form_request'
import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'
import { navigate } from "gatsby"


import Input from '../../input'
import DateInput from './date_input'


import { getNextWeekday, telPattern, telPatternFin} from '../../../utils/forms'
//import 'rc-input-number/assets/index.css'

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
          navigate(this.props.homelink+'valmis')
        }
      })
    })

    event.preventDefault()
    event.stopPropagation()
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
    const { homelink='/' } = this.props;
    return (
      <form className="lomake" onSubmit={this.sendForm}>
        <I18n>
          {({i18n}) => (
            <>
              <div className="col-12 px-0" style={{maxWidth:'800px'}}>
                <div className="row ">
                  <div className="col-lg-6 justify-content-center d-md-inline-block d-flex flex-wrap">
                    <div className="form-group mb-md-0">
                      <label className="mb-1">
                        <Trans id="input_ajankohta" />
                      </label>
                      <DateInput
                        labelTransId="input_ajankohta"
                        ajankohta={ajankohta}
                        tunti={tunti}
                        outerClassName="col-lg-6"
                        onChange={this.onChangeInputField}
                        error={(errors && errors.pvm)||(errors && errors.tunti)}
                        errorMsg={i18n._(t`input_nimi_ajankohta`)}
                      />
                    </div>

                    <Input
                      label="Nimi"
                      name="nimi"
                      onBlur={this.onBlur}
                      outerClassName="mt-lg-4 pt-lg-0"
                      value={nimi}
                      onChange={this.onChange}
                      placeholder={'    ' || i18n._(t`input_nimi_placeholder`)}
                      error={errors && errors.nimi}
                      errorMsg={i18n._(t`input_nimi_error`)}
                    />
                  </div>
                  <div className="col-lg-5 justify-content-center d-md-inline-block d-flex flex-wrap">
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
                      <label htmlFor="phone_input">
                        <Trans id="input_puhelin" />
                      </label>
                      <FormattedInput
                        className={
                          'sw-input noFocus noBorder form-control form-control-sm  ' +
                          (((errors && errors.puhelin) && ' is-invalid') || '')
                        }
                        label={i18n._(t`input_puhelin`)}
                        format={
                          (puhelin &&
                            puhelin.match(/(^\+\(0|^0)/) &&
                            telPatternFin) ||
                          telPattern
                        }
                        id="phone_input"
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

/*

       <Link
                replace
                  to={homelink+'viesti'}
                  className="btn btn-simple mt-4 mt-md-0"
                >
                  <Trans id="btn_viesti" />
                </Link>*/
