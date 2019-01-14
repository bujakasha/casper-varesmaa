import React, {Component} from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

class PageTemplate extends Component {
  render() {
    const currentPage = this.props.data.wordpressPage

    return (
      <Layout location={this.props.location}>
        <div className="container col-md-10 pt-4 px-md-5">
          <h1 dangerouslySetInnerHTML={{__html: currentPage.title}} />
          <div dangerouslySetInnerHTML={{__html: currentPage.content}} />
        </div>
      </Layout>
    )
  }
}
export default PageTemplate
/*
export const pageQuery = graphql`
  query($id: String!) {
    wordpressPage(id: {eq: $id}) {
      title
      content
      date(formatString: "MMMM DD, YYYY")
    }
    site {
      id
      siteMetadata {
        title
      }
    }
  }
`
*/
