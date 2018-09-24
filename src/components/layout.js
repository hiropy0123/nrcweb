import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'
import './layout.css'

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
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'みことばの基準を回復する教会。レベチャは愛知県春日井市高蔵寺にある、プロテスタントのキリスト教会。 祈りと聖書のみことばと主を賛美することを第一とする祈りの家。 イエスの愛を宣べ伝え、すべてをささげて主に従う、キリストの弟子を建て上げる教会' },
            { name: 'format-detection', content: 'telephone=no' },
            { name: 'robots', content: 'noindex, nofollow' },
          ]}
        >
          <html lang="ja" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
