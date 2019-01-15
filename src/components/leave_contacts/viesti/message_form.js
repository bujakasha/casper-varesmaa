import React from 'react'
import '../_leave_contact.scss'
import Input from '../../input'
import {Textarea} from '../../input'
import LoadingBtn from '../../loading_btn'
import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'
import {postForm} from '../../../utils/form_request'
import { Link } from 'gatsby'
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
    const {nimi, viesti, message, email, errors, loading} = this.state
    const { homelink } = this.props;
    return (
      <form className="lomake " onSubmit={this.sendForm}>
        <I18n>
          {({i18n}) => (
            <>
      
              <div className="form-row px-md-2">
                <div className="col-lg-6 pr-lg-4 pr-lg-5 px-0 mb-4">
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
              </div>

              <div className="col-md-12 px-0 d-lg-flex text-center justify-content-between mt-5">
                <LoadingBtn
                  type="submit"
                  label={i18n._(t`btn_viesti`)}
                  className="btn-secondary  bt-block px-5 btn-simple"
                  isLoading={loading}
                  onClick={this.sendForm}
                />
                <Link
                replace
                  to={homelink+'soittopyynto'}
                  className="btn btn-simple mt-4 mt-md-0"
                >
                  <Trans id="btn_soittopyynto" />
                </Link>
              </div>
            </>
          )}
        </I18n>
      </form>
    )
  }
}

export default MessageForm
