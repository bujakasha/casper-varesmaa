import React from 'react'
import {Trans} from '@lingui/react'
import BgZoom from '../components/bg_zoom'
import Layout from '../components/layout'
import { langFromPath } from '../i18n-config'
/*

              <br />

              <Link to="/" className="btn btn-link d-flex align-items-center">
                {' '}
                <FontAwesomeIcon
                  icon={['fal', 'long-arrow-left']}
                  size="1x"
                  transform="grow-3s"
                  className="mr-2"
                />{' '}
                <Trans id="takaisin_kotisivulle" />
              </Link>
               */
const AnsioluetteloPage = props => {
  const profileImage = props.data.profileImage2 && props.data.profileImage2.childImageSharp
    const activeLang = langFromPath(props.location.pathname)
    const koulutusData = activeLang&&activeLang==='en'&&props.data.cvEnKoulutus.edges || props.data.cvKoulutus.edges
    const kokemusData = activeLang&&activeLang==='en'&&props.data.cvEnKokemus.edges || props.data.cvKokemus.edges
    const taidotData = activeLang&&activeLang==='en'&&props.data.cvEnTaidot.edges || props.data.cvTaidot.edges
  return (
    <Layout location={props.location}>
      <div className="container col-md-10 pt-4">
        <div className="d-none justify-content-end">
          <a href="#" className="text-dark">
            Lataa tiedostona
          </a>
        </div>

        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 d-none d-md-block">
            <BgZoom
              className="profile_image"
              delay={100}
              img={profileImage && profileImage.fluid}
            />
          </div>
          <div lassName="col">
            <div className="px-3 mt-4">
              <h1 className="font-weight-bold">Casper Väresmaa</h1>
              <h5 className="text-muted">
                <Trans id="ansioluettelo_page_apuotsikko" />
              </h5>

              <br />

              <div className="px-2">
                <div>
                  <p className="mb-0">
                    <small>
                      <Trans id="Sähköposti" />
                    </small>
                  </p>
                  <p>casper.varesmaa@gmail.com</p>
                </div>

                <div>
                  <p className="mb-0">
                    <small>
                      <Trans id="Puhelin" />
                    </small>
                  </p>
                  <p>+358 4535 35813</p>
                </div>

                <div>
                  <p className="mb-0">
                    <small>
                      <Trans id="Kotisivu" />
                    </small>
                  </p>
                  <p>www.casper-varesmaa.fi</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="container col-md-10 pt-4 mt-5">
        <div>
          <h4 className="font-weight-bold">
            <Trans id="Koulutus" />
          </h4>
          <hr />
          {koulutusData&&koulutusData.length?
            koulutusData.map((item, i)=>(
              <ResumeSection key={item.node.id} {...item.node} />
            )):null}

   
        </div>
      </div>

      <div className="container col-md-10 pt-4 mt-5">
        <div>
          <h4 className="font-weight-bold">
            <Trans id="Kokemus" />
          </h4>
          <hr />
          {kokemusData&&kokemusData.length?
            kokemusData.map((item, i)=>(
              <ResumeSection key={item.node.id} {...item.node} />
            )):null}
         
        </div>
      </div>

      <div className="container col-md-10 pt-4 mt-5">
        <div>
          <h4 className="font-weight-bold">
            <Trans id="Osaaminen" />
          </h4>
          <hr />
          <div className="row">
          {taidotData&&taidotData.length?
            taidotData.map((item, i)=>(
              <ExprerienceSection key={item.node.id} {...item.node} />
            )):null}
        </div>
        </div>
      </div>
    </Layout>
  )
}

export default AnsioluetteloPage

const ResumeSection = ({ajankohta, otsikko, toimija, teksti}) => {
  return (
    <div className="col-12 col-lg-10 py-4">
      <div className="row">
        <div className="col-md-3">
          <p className="text-muted">{ajankohta} </p>
        </div>
        <div className="col-md">
          <h5 className="font-weight-bold">{otsikko}</h5>
          <h6 className="text-primary"> {toimija} </h6>
          <p>{teksti}</p>
        </div>
      </div>
    </div>
  )
}

const ExprerienceSection = ({ajankohta, otsikko, toimija, teksti}) => {
  return (
    <div className="col-md-6 py-4">
      <div className="row">
        <div className="col-md">
          <h5 className="font-weight-bold">{otsikko}</h5>
          <p>{teksti}</p>
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    profileImage: file(relativePath: {regex: "/kuvaaa.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    profileImage2: file(relativePath: {regex: "/dun.jpg/"}) {
      childImageSharp {
        fluid(maxWidth: 1600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    cvKoulutus: allAnsioluetteloXlsxKoulutus {
      edges {
        node {
          id
          teksti
          toimija
          otsikko
          ajankohta
        }
      }
    }
    cvEnKoulutus: allAnsioluetteloXlsxEnKoulutus {
      edges {
        node {
          id
          teksti
          toimija
          otsikko
          ajankohta
        }
      }
    }
    cvKokemus: allAnsioluetteloXlsxKokemus{
      edges {
        node {
          id
          teksti
          toimija
          otsikko
          ajankohta
        }
      }
    }
    cvEnKokemus: allAnsioluetteloXlsxEnKokemus{
      edges {
        node {
          id
          teksti
          toimija
          otsikko
          ajankohta
        }
      }
    }
    cvTaidot: allAnsioluetteloXlsxTaidot {
      edges {
        node {
          id
          teksti
          otsikko
        }
      }
    }
    cvEnTaidot: allAnsioluetteloXlsxEnTaidot {
      edges {
        node {
          id
          teksti
          otsikko
        }
      }
    }
  }
`
/*
       <ResumeSection
            ajankohta="20.7.2017 - 30.12.2018"
            otsikko="Liiketalouden perustutkinto / Merkonomi"
            toimija="Suomen Liikemiesten Kauppaopisto"
            teksti="Suoritin Merkonomi tutkinnon Suomen Liikemiesten Kauppaopistossa pasilassa, suuntauksena Talous ja toimistopalvelut. Opintojen aikana suoritin kolme työharjoittelua palkanlaskenta yritys Silta Oy, Stockmann tavaratalo ja Ravintola-alan yritys Fonda Oy."
          />

          <ResumeSection
            ajankohta="20.7.2017 - 30.12.2018"
            otsikko="Ylioppilastutkinto"
            toimija="Töölön aikuislukio"
            teksti="Opiskelin ylioppilaaksi Töölön yhteykoulun aikuislukiossa. Opintoni suunniteltiin tukemaan Merkonomi tutkintoa. Kirjoitin matematiikan, äidinkielen, englannin ja yhteiskuntaopin."
          />
 <ResumeSection
            ajankohta="20.7.2017 - 30.12.2018"
            otsikko="Sup-lauta vuokraus"
            toimija="SUP - Finland"
            teksti=""
          />

          <ResumeSection
            ajankohta="20.7.2017 - 30.12.2018"
            otsikko="Fonda Oy"
            toimija="Fonda Oy"
            teksti="Opiskelin ylioppilaaksi Töölön yhteykoulun aikuislukiossa. Opintoni suunniteltiin tukemaan Merkonomi tutkintoa. Kirjoitin matematiikan, äidinkielen, englannin ja yhteiskuntaopin."
          />

            <p className="p-small d-flex justify-content-end"><small>Päivitetty: 20.12.2018</small></p>


                <ExprerienceSection
              otsikko="Front-end kehittäjä"
              teksti="Teen näyttäviä verkkosivuja ja saumattomia käyttökokemuksia. Testaan sivut projektin tarpeiden mukaan eri selaimissa."
            />

            <ExprerienceSection
              otsikko="Backend kehittäjä"
              teksti="Teen suorituskykyisiä ja turvallisia node.js verkkopalveluita ja rajapintoja.  "
            />

            <ExprerienceSection
              otsikko="Microsoft office"
              teksti="Käytän sujuvasti sovelluksia word, powerpoint ja word toimistotyössä. "
            />

            <ExprerienceSection
              otsikko="Photoshop, Lightroom ja Illustrator"
              teksti="Valokuvien, logojen ja graafisten elementtien vaativa käsittely verkkosivuille, mainoksiin ja sosiaaliseen mediaan.  "
            />

'            */
