import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layouts"

class IndexComponent extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Img
          css={{ top: 0, left: 0, right: 0, zIndex: -1 }}
          style={{ position: `absolute` }}
          fluid={this.props.data.file.childImageSharp.fluid}
        />
      </Layout>
    )
  }
}

export default IndexComponent

export const query = graphql`
  query FrontPageQuery {
    file(relativePath: { regex: "/camera/" }) {
      childImageSharp {
        fluid(maxWidth: 1500, rotate: 180) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
