const catalogs = {
  ...require('./global.json'),
  ...require('./ansioluettelo.json'),
  ...require('./etusivu.json'),
  ...require('./seo.json'),
  ...require('./tilaa.json'),
  ...require('./contact_form.json'),
  ...require('./my_works.json'),
  ...require('./tietoa.json'),
}

exports.default = catalogs
