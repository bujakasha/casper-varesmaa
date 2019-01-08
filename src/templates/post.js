import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Layout from "../components/layout"


class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout location={this.props.location}>
        <div className="container col-md-10 pt-4 px-md-5">
             <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
             <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content    
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`