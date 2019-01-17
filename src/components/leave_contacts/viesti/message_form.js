import React from 'react'
import '../_leave_contact.scss'
import Input from '../../input'
import Textarea from '../../input/textarea'
import LoadingBtn from '../../loading_btn'
import { I18n} from '@lingui/react'
import {t} from '@lingui/macro'
import {postForm} from '../../../utils/form_request'
import { navigate } from "gatsby"

class MessageForm extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      viesti: null,
      email: null,
      nimi: null,
      loading: false,
    }
  }

  sendForm = event => {
    this.setState({loading: true}, () => {
      postForm(this.state, 'Viesti').then(res => {
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

  onChange = event => {

    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  onChangeInputField = (name, value) => {
    this.setState({
      [name]: value,
    })
  }

  render() {
    const {nimi, viesti, email, errors, loading} = this.state
    return (
      <form className="lomake" onSubmit={this.sendForm} style={{maxWidth:'800px'}}>
        <I18n>
          {({i18n}) => (
            <>
      
              <div className="row">
                  <Textarea
                    outerClassName="col-lg-6"
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

                <div className=" col-lg-6 ">
                  <Input
                    label="Nimi"
                    name="nimi"
                    value={nimi}
                    onChange={this.onChange}
                    placeholder=""
                    error={errors && errors.nimi}
                    errorMsg={i18n._(t`input_nimi_placeholder`)}
                  />

                  <Input
                    label={i18n._(t`input_email`)}
                    name="email"
                    type="email"
                    value={email}
                    outerClassName={" mt-lg-4 pt-lg-1"}
                    onChange={this.onChange}
                    error={errors && errors.email}
                    errorMsg={i18n._(t`input_email_error`)}
                  />
                </div>
            

              <div className="col-md-12 mt-3 mt-sm-4 pt-sm-2">
                <LoadingBtn
                  type="submit"
                  label={i18n._(t`btn_viesti`)}
                  className="btn-secondary px-5 btn-simple"
                  isLoading={loading}
                  onClick={this.sendForm}
                />
              </div>
              </div>
            </>
          )}
        </I18n>
      </form>
    )
  }
}

export default MessageForm
