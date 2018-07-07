# gatsby-fullscreen-background-image

A gatsby template to have a static site with a fullscreen image

## Graphiql query

```
fragment GatsbyImageSharpFluid on ImageSharpFluid {
  base64
  aspectRatio
  src
  srcSet
  sizes
}

query FrontPageQuery {
  file(relativePath: {regex: "/camera/"}) {
    childImageSharp {
      fluid(maxWidth: 1500, rotate: 180) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}

```