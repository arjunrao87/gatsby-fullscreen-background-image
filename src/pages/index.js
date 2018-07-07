import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../layouts"

class IndexComponent extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
      <div>
        <Img
          style={{ top: 0, left: 0, right: 0, zIndex: -1 , position: `absolute` }}
          fluid={this.props.data.file.childImageSharp.fluid}
        />
        </div>
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
