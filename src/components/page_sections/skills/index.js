import React from 'react'
import {Trans} from '@lingui/react'
import PropTypes from 'prop-types'

const SkillsSection = () => (
  <div className="container">
    <div className="col-md-11 offset-md-1 text-center text-md-left">
      <div className="col-12 px-0 px-md-3 col-md-6 mb-5 ">
        <h3 className="font-weight-bold">
          {' '}
          <Trans id="tech_stack_otsikko" />{' '}
        </h3>
      </div>
      <div className="row ">
        <Section
          title="Front-end"
          teksti="HTML, CSS, SCSS, Bootstrap, Javascript, ES6, React, GatsbyJS, TypeScript"
        />
        <Section
          title="Back-end"
          teksti="NodeJS, PHP, NGINX, Apache, Express, Serverless, MongoDB, PostgreSQL, MySQL"
        />
        <Section
          title="CMS"
          teksti="Drupal, Wordpress, Contentfull, Netlify CMS"
        />
        <Section
          title="Cloud Services"
          teksti="Amazon Web Services, Digitalocean, Cloudflare"
        />
        <Section
          i18n={true}
          title="Web Kartat"
          teksti="MapboxGL, Leaflet, Google Maps API, OpenStreetMap"
        />

        <Section
          i18n={true}
          title="Kuvat & Web Grafiikka"
          teksti="Photoshop, Illustrator, Lightroom"
        />
      </div>
    </div>
  </div>
)

export default SkillsSection

const Section = ({title, i18n, teksti}) => (
  <div className="col-md-6 py-3">
    <div className="col-md-11">
      {i18n ? (
        <h2 className="h4">
          {' '}
          <strong>
            <Trans id={title} />
          </strong>{' '}
        </h2>
      ) : (
        <h2 className="h4">
          {' '}
          <strong>{title}</strong>{' '}
        </h2>
      )}
      <p>{teksti}</p>
    </div>
  </div>
)

Section.propTypes = {
  title: PropTypes.string,
  i18n: PropTypes.bool,
  teksti: PropTypes.string,
}
