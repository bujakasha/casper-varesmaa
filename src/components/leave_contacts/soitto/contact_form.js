import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from "gatsby"
import dateFnsFormat from 'date-fns/format'
import { I18n} from '@lingui/react'
import {t} from '@lingui/macro'

import PhoneInput from './phone_input'
import Input from '../../input'
import Textarea from '../../input/textarea'
import DateInput from './date_input'
import LoadingBtn from '../../loading_btn'

import { getNextWeekday } from '../../../utils/forms'
import { postForm } from '../../../utils/form_request'
import { generateDates } from './date_input';

const FORMAT = 'D/M/YYYY'

class SoittopyyntoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ajankohta: generateDates()[1],
      tunti: '13:00',
      puhelin: '',
      loading: false,
    }
  }

  sendForm = event => {
    this.setState({loading: true}, () => {
      postForm(this.state,
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

  onPuhelinChange = value => {
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
      <form className="lomake" style={{maxWidth:'800px'}}  onSubmit={this.sendForm}>
        <I18n>
          {({i18n}) => (
            <>
         <div className="row">


                
                 <DateInput
                  label={i18n._(t`input_ajankohta`)}
                  ajankohta={ajankohta}
                  tunti={tunti}
                  outerClassName="col-md-6  mt-sm-3"
                  onChange={this.onChangeInputField}
                  error={(errors && errors.pvm)||(errors && errors.tunti)}
                  errorMsg={i18n._(t`input_nimi_ajankohta`)}
                  />

                  <Input
                    label={i18n._(t`input_email`)}
                    name="email"
                    type="email"
                    value={email}
                    outerClassName="col-md-6  mt-sm-3"
                    onChange={this.onChange}
                    error={errors && errors.email}
                    errorMsg={i18n._(t`input_email_error`)}
                  />

              <Input
                label="Nimi"
                name="nimi"
                outerClassName="col-md-6  mt-sm-3"
                value={nimi}
                onChange={this.onChange}
                error={errors && errors.nimi}
                errorMsg={i18n._(t`input_nimi_error`)}
              />

              <PhoneInput
                value={puhelin}
                outerClassName="col-md-6  mt-sm-3"
                label={i18n._(t`input_puhelin`)}
                error={errors && errors.puhelin && i18n._(t`input_error`)}
                onChange={this.onPuhelinChange}
              />

              
             

            <div className="col-md-12 mt-3 mt-sm-4 pt-sm-2">
                <LoadingBtn
                  type="submit"
                  label={i18n._(t`btn_soittopyynto`)}
                  className="btn-secondary btnblock px-5 btn-simple"
                  isLoading={loading}
                  onClick={this.sendForm}
                />

         
              </div>
         
                <br/>
                <br/>
                <br/>
                <br/>
           
          </div>

             
            </>
          )}
        </I18n>
      </form>
    )
  }
}

export default SoittopyyntoForm

