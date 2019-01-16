import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {I18n} from '@lingui/react'
import {t} from '@lingui/macro'

const SeoComponents = (props) => {
    const {  title, description } = props;
    return (
        <Helmet 
                title={title||"Verkkosivut"}
                titleTemplate="%s - Casper Väresmaa"
                meta={[
                { charset: 'utf-8' },
                {
                    'http-equiv': 'X-UA-Compatible',
                    content: 'IE=edge',
                },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'description',
                    content: description||'Teen upeita verkkosivuja ja suorituskykyisiä React.js web-sovelluksia',
                },


                
                ]}
            />
    );
};

SeoComponents.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default SeoComponents;


export const SeoWithI18n = (props) => {

    return (
        <I18n>
          {({i18n}) => (
            <SeoComponents
            title={i18n._(props.title)}
            description={i18n._(t`${props.description}`)}
            />
          )}
         </I18n>
    );
};

