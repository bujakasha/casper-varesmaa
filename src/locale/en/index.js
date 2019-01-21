const catalogs = {
  ...require('./global.json'),
  ...require('./seo.json'),
  ...require('./etusivu.json'),
  ...require('./contact_form.json'),
  ...require('./my_works.json'),
  ...require('./tilaa.json'),
  ...require('./ansioluettelo.json'),
  ...require('./tietoa.json'),
}

exports.default = catalogs
