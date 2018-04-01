// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { version } from './version';

export const environment = {
  production: false,
  deployUrl: './',
  tileBaseUrl: 'https://tiles.evictionlab.org/',
  evictorsRankingDataUrl: './assets/MOCK_EVICTORS.csv',
  // tslint:disable-next-line:max-line-length
  cityRankingDataUrl: 'https://s3.amazonaws.com/eviction-lab-tool-data/data/rankings/cities-rankings.csv',
  stateRankingDataUrl: 'https://s3.amazonaws.com/eviction-lab-tool-data/data/rankings/states-rankings.csv',
  usAverageDataUrl: 'https://s3.amazonaws.com/eviction-lab-tool-data/data/avg/us.json',
  // tslint:disable-next-line:max-line-length
  outliersDataUrl: 'https://s3.amazonaws.com/eviction-lab-tool-data/data/cutoffs/99-percentile.json',
  mapboxApiKey: 'pk.' +
    'eyJ1IjoiZXZpY3Rpb24tbGFiIiwiYSI6ImNqYzJoNzVxdzAwMTMzM255dmsxM2YwZWsifQ.' +
    '4et5d5nstXWM5P0JG67XEQ',
  mapboxCountyUrl: 'https://s3.amazonaws.com/eviction-lab-tool-data/data/search/counties.csv',
  downloadBaseUrl: 'https://exports-dev.evictionlab.org',
  minYear: 2000,
  maxYear: 2016,
  rankingsYear: 2015,
  appVersion: version + '-dev',
  siteNav: [
    { url: '/', langKey: 'NAV.HOME' },
    { url: '/map', langKey: 'NAV.MAP' },
    { url: '/#/evictions', langKey: 'NAV.RANKINGS' },
    { url: '/about', langKey: 'NAV.ABOUT' },
    { url: '/why-eviction-matters', langKey: 'NAV.PROBLEM' },
    { url: '/methods', langKey: 'NAV.METHODS' },
    { url: '/help-faq', langKey: 'NAV.HELP' },
    { url: '/updates', langKey: 'NAV.UPDATES' }
  ],
  footerNav: [
    { url: '/', langKey: 'NAV.HOME' },
    { url: '/map', langKey: 'NAV.MAP' },
    { url: '/#/evictions', langKey: 'NAV.RANKINGS' },
    { url: '/about', langKey: 'NAV.ABOUT' },
    { url: '/why-eviction-matters', langKey: 'NAV.PROBLEM' },
    { url: '/methods', langKey: 'NAV.METHODS' },
    { url: '/help-faq', langKey: 'NAV.HELP' },
    { url: '/updates', langKey: 'NAV.UPDATES' },
    { url: '/contact-us', langKey: 'NAV.CONTACT_US' },
    { url: '/get-the-data', langKey: 'NAV.GET_DATA' },
    { url: '/data-merge', langKey: 'NAV.DATA_MERGE' }
  ]
};
