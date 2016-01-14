exports.config = {
  directConnect: true,
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['../test/ilx_spec.js'],
  
    params: {
        arizonaDiamond: '11ec5000-0000-4555-a302-000000000305',
        arizonaGold: '11ec5000-0000-4555-a302-000000000306',
        arizonaSilver: '11ec5000-0000-4555-a302-000000000307',
        californiaDiamond: '11ec5000-0000-4555-a302-000000000311',
        californiaGold: '11ec5000-0000-4555-a302-000000000312',
        californiaSilver: '11ec5000-0000-4555-a302-000000000313',
        californiaEthics: '11ec5000-0000-4555-a302-000000000383',
        floridaGold: '11ec5000-0000-4555-a302-000000000290',
        floridaSilver: '11ec5000-0000-4555-a302-000000000291',
        georgiaDiamond: '11ec5000-0000-4555-a302-000000000317',
        georgiaGold: '11ec5000-0000-4555-a302-000000000318',
        georgiaSilver: '11ec5000-0000-4555-a302-000000000319',
        illinoisDiamond: '11ec5000-0000-4555-a302-000000000082',
        illinoisGold: '11ec5000-0000-4555-a302-000000000083',
        illinoisSilver: '11ec5000-0000-4555-a302-000000000084',
        kansasDiamond: '11ec5000-0000-4555-a302-000000000067',
        kansasGold: '11ec5000-0000-4555-a302-000000000132',
        kansasSilver: '11ec5000-0000-4555-a302-000000000375',
        massachusettsDiamond: '11ec5000-0000-4555-a302-000000000323',
        massachusettsGold: '11ec5000-0000-4555-a302-000000000324',
        massachusettsSilver: '11ec5000-0000-4555-a302-000000000325',
        missouriDiamond: '11ec5000-0000-4555-a302-000000000062',
        missouriGold: '11ec5000-0000-4555-a302-000000000063',
        missourSilver: '11ec5000-0000-4555-a302-000000000064',
        newyorkDiamond: '11ec5000-0000-4555-a302-000000000062',
        newyorkGold: '11ec5000-0000-4555-a302-000000000063',
        newyorkSilver: '11ec5000-0000-4555-a302-000000000064',
        pennsylvaniaDiamond: '11ec5000-0000-4555-a302-000000000368',
        pennsylvaniaGold: '11ec5000-0000-4555-a302-000000000369',
        pennsylvaniaSilver: '11ec5000-0000-4555-a302-000000000370',
        texasDiamond: '11ec5000-0000-4555-a302-000000000294',
        texasGold: '11ec5000-0000-4555-a302-000000000303',
        texasSilver: '11ec5000-0000-4555-a302-000000000304',
        virginiaDiamond: '11ec5000-0000-4555-a302-000000000138',
        virginiaGold: '11ec5000-0000-4555-a302-000000000139',
        virginiaSilver: '11ec5000-0000-4555-a302-000000000140',
        washingtonDiamond: '11ec5000-0000-4555-a302-000000000379',
        washingtonGold: '11ec5000-0000-4555-a302-000000000358',
        washingtonSilver: '11ec5000-0000-4555-a302-000000000380',
        wisconsinDiamond: '11ec5000-0000-4555-a302-000000000362',
        wisconsinGold: '11ec5000-0000-4555-a302-000000000363',
        wisconsinSilver: '11ec5000-0000-4555-a302-000000000364'
  },
  
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
