import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '708bfd41fda24b989e3f0788dc603f82',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Traveling Van Problem',
  domain: 'travelingvanproblem.com',
  author: 'Traveling Van Problem',

  // open graph metadata (optional)
  description: 'Blog & Guidebook about traveling with a camper van in Europe 🚚 🇪🇺',

  // social usernames (optional)
  //twitter: 'vanproblem',
  github: 'travelingvanproblem',
  //linkedin: 'fisch2',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  instagram: 'travelingvanproblem', // optional instagram username
  youtube: 'TravelingVanProblem', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  reddit: 'TravelingVanProblem', // optional reddit username

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  navigationStyle: 'custom',
  // navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Guidebook',
      pageId: 'dcf8bd01dfa04a20b2fe93d1cad3d59d'
    },
    {
      title: 'About',
      pageId: '9f31b4bc3e8e43f095bff906ce1c67ac'
    }
  ]
})
