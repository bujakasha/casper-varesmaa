const catalogs = {
  ...require('./global.json'),
  ...require('./seo.json'),
  ...require('./etusivu.json'),
  ...require('./modal.json'),
  ...require('./my_works.json'),
  ...require('./tilaa.json'),
  ...require('./ansioluettelo.json'),
  ...require('./faq.json'),
}

exports.default = catalogs
