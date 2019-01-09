import React from 'react'
import {Trans} from '@lingui/react'
import Layout from '../components/layout'
import CollapseBar from '../components/collapse_bar'
import {  graphql} from 'gatsby'

  class FAQ extends React.PureComponent {
    state = {
      activeTab: null,
    }
  
    toggleTab = (index) => {
      const activeTab = this.state.activeTab
      if(activeTab&&activeTab==index){
        this.setState({activeTab:null})
      }else{
        this.setState({activeTab: index})
      }
    }
  
    render() {
      const { showMessage, activeTab } = this.state;
      const { faqTilaus, faqRekry, faqOther } = this.props.data
  return (
    <Layout parentIsContact={showMessage} location={this.props.location}>
      <div className="container col-md-10 pt-4">
        <div className="row">
          <div className="col px-md-5">
            <div className="mt-4 col-12 px-0">
              <h1 className="font-weight-bold">
               <Trans id="faq_page_otsikko"/>
              </h1>

              <h5 className="text-muted">
              <Trans id="faq_page_otsikko_apu"/>
              </h5>
              <br />
              <br />
              <div className="" style={{minHeight:'300px'}}>
              {faqTilaus&&faqTilaus.edges?
              faqTilaus.edges.map((item,i)=>(
              <CollapseBar
                key={item.node.id}
                title={item.node.title}
                isOpen={activeTab===i+10}
                toggle={this.toggleTab.bind(this,i+10)}
              >
              <p>{item.node.teksti}</p>
              
              </CollapseBar>
              )):null}
              <br/>
              <br/>
              {faqRekry&&faqRekry.edges?
              faqRekry.edges.map((item,i)=>(
              <CollapseBar
                key={item.node.id}
                title={item.node.title}
                isOpen={activeTab===i+20}
                toggle={this.toggleTab.bind(this,i+20)}
              >
              <p>{item.node.teksti}</p>
              
              </CollapseBar>
              )):null}
               <br/>
              <br/>
              {faqOther&&faqOther.edges?
              faqOther.edges.map((item,i)=>(
              <CollapseBar
                key={item.node.id}
                title={item.node.title}
                isOpen={activeTab===i+30}
                toggle={this.toggleTab.bind(this,i+30)}
              >
              <p>{item.node.teksti}</p>
              
              </CollapseBar>
              )):null}


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
    </Layout>
  )
}
  }
export default FAQ;

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
  }
`
/*
            <p className="p-small d-flex justify-content-end"><small>Päivitetty: 20.12.2018</small></p>

'            */
