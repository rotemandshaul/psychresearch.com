import * as React from "react"
import { Container } from "react-bootstrap"
import { Link } from "react-scroll"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"

import "bootstrap/dist/css/bootstrap.min.css"
import "../../style/main.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <footer className="footer navbar-static-bottom">
        <Container>
          <span className="back-to-top">
            <Link to="top" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </span>
          <p>Email: info@psychresearch.com</p>
          <p>© {new Date().getFullYear()} Psychedelic Research Consultants </p>
          <hr />
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
