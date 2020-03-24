import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./layoutComponents"
import { Helmet } from "react-helmet";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet>
          <link rel="stylesheet" href="https://use.typekit.net/mye5mca.css" />
        </Helmet>
        <GlobalStyle />
        <MainWrapper>
          <main>{children}</main>
        </MainWrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
