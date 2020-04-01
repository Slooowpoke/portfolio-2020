import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { GlobalStyle } from "./globalStyle"
import { MainWrapper } from "./Layout/LayoutComponents"
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
              <link rel="dns-prefetch" href="https://use.typekit.net" />
              <link rel="preconnect" href="https://use.typekit.net" />
          </Helmet>
        <GlobalStyle />
        <MainWrapper>
          <main>{children}</main>
        </MainWrapper>
      </>
    )}
  />
)

export default Layout
