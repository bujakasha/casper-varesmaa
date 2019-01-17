import React from 'react'
import {Trans} from '@lingui/react'
import CollapseBar from '../components/collapse_bar'
import {graphql} from 'gatsby'
import {SeoWithI18n} from '../components/seo'
import {langFromPath} from '../i18n-config'

class FAQ extends React.Component {
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
    const { activeTab} = this.state
    const {faqTilaus,  faqEnTilaus, faqRekry, faqEnRekry,  faqOther, faqEnOther} = this.props.data
    
    const activeLang = this.props.lang

      const tilausData =
      (activeLang && activeLang === 'en' && faqEnTilaus.edges) ||
      faqTilaus.edges
      const rekryData =
        (activeLang && activeLang === 'en' && faqEnRekry.edges) ||
        faqRekry.edges
      const otherData =
        (activeLang && activeLang === 'en' && faqEnOther.edges) ||
        faqOther.edges
    return (
      <main>
         <SeoWithI18n
                title="faq_page_title"
                description="faq_page_description"
                />
        <div className="container col-md-10 pt-4 page_minheight">
          <div className="row">
            <div className="col px-md-5">
              <div className="mt-4 col-12 px-0">
                <h1 className="font-weight-bold">
                  <Trans id="faq_page_otsikko" />
                </h1>

                <h5 className="text-muted">
                  <Trans id="faq_page_otsikko_apu" />
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
                  <Trans id="faq_page_teksti" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-100 bg-liht d-none"
          style={{minHeight: '200px', marginTop: '', marginBottom: ''}}
        />
      </main>
    )
  }
}
export default FAQ

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
/*
            <p className="p-small d-flex justify-content-end"><small>Päivitetty: 20.12.2018</small></p>

'            */
