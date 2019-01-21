import React from 'react'
import {Trans, I18n} from '@lingui/react'
import {t} from '@lingui/macro'
import CollapseBar from '../components/collapse_bar'
import {graphql} from 'gatsby'
import SeoComponent from '../components/seo_component'

class TietoaSivu extends React.Component {
  state = {
    activeTab: null,
  }

  toggleTab = index => {
    const activeTab = this.state.activeTab
    if (activeTab && activeTab === index) {
      this.setState({activeTab: null})
    } else {
      this.setState({activeTab: index})
    }
  }

  render() {
    const {activeTab} = this.state
    const {
      faqTilaus,
      faqEnTilaus,
      faqRekry,
      faqEnRekry,
      faqOther,
      faqEnOther,
    } = this.props.data

    const activeLang = this.props.lang

    const tilausData =
      (activeLang && activeLang === 'en' && faqEnTilaus.edges) ||
      faqTilaus.edges
    const rekryData =
      (activeLang && activeLang === 'en' && faqEnRekry.edges) || faqRekry.edges
    const otherData =
      (activeLang && activeLang === 'en' && faqEnOther.edges) || faqOther.edges
    return (
      <main>
        <I18n>
          {({i18n}) => (
            <>
              <SeoComponent
                title={i18n._(t`tietoa_page_title`)}
                description={i18n._(t`tietoa_page_description`)}
              />
              <div className="container col-md-10 pt-4 page_minheight">
                <div className="row">
                  <div className="col px-md-5">
                    <div className="mt-4 col-12 px-0">
                      <h1 className="font-weight-bold">
                        <Trans id="tietoa_page_otsikko" />
                      </h1>

                      <h5 className="text-muted">
                        <Trans id="tietoa_page_otsikko_apu" />
                      </h5>
                      <br />
                      <br />
                      <div className="" style={{minHeight: '300px'}}>
                        {tilausData
                          ? tilausData.map((item, i) => (
                              <CollapseBar
                                key={item.node.id}
                                title={item.node.title}
                                isOpen={activeTab === i + 10}
                                toggle={this.toggleTab.bind(this, i + 10)}
                              >
                                <p>{item.node.teksti}</p>
                              </CollapseBar>
                            ))
                          : null}
                        <br />
                        <br />
                        {rekryData
                          ? rekryData.map((item, i) => (
                              <CollapseBar
                                key={item.node.id}
                                title={item.node.title}
                                isOpen={activeTab === i + 20}
                                toggle={this.toggleTab.bind(this, i + 20)}
                              >
                                <p>{item.node.teksti}</p>
                              </CollapseBar>
                            ))
                          : null}
                        <br />
                        <br />
                        {otherData
                          ? otherData.map((item, i) => (
                              <CollapseBar
                                key={item.node.id}
                                title={item.node.title}
                                isOpen={activeTab === i + 30}
                                toggle={this.toggleTab.bind(this, i + 30)}
                              >
                                <p>{item.node.teksti}</p>
                              </CollapseBar>
                            ))
                          : null}

                        <br />
                        <br />
                      </div>
                      <p className="col-md-8 px-0">
                        <Trans id="tietoa_page_teksti" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </I18n>
      </main>
    )
  }
}
export default TietoaSivu

export const query = graphql`
  query {
    faqTilaus: allFaqXlsxFaqTilaus {
      edges {
        node {
          id
          title
          teksti
        }
      }
    }

    faqRekry: allFaqXlsxFaqRekry {
      edges {
        node {
          id
          title
          teksti
        }
      }
    }
    faqOther: allFaqXlsxFaqOther {
      edges {
        node {
          id
          title
          teksti
        }
      }
    }

    faqEnTilaus: allFaqXlsxEnTilaus {
      edges {
        node {
          id
          title
          teksti
        }
      }
    }

    faqEnRekry: allFaqXlsxEnRekry {
      edges {
        node {
          id
          title
          teksti
        }
      }
    }
    faqEnOther: allFaqXlsxEnOther {
      edges {
        node {
          id
          title
          teksti
        }
      }
    }
  }
`
