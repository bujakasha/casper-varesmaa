const catalogs = {
  ...require('./global.json'),
  ...require('./ansioluettelo.json'),
  ...require('./etusivu.json'),
  ...require('./seo.json'),
  ...require('./tilaa.json'),
  ...require('./modal.json'),
  ...require('./my_works.json'),
  ...require('./faq.json'),

}

exports.default = catalogs
