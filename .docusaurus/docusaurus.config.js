export default {
  "title": "thetaru.github.io",
  "tagline": "The tagline of my site",
  "url": "https://thetaru.github.io",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "/static/img/favicon.ico",
  "organizationName": "thetaru",
  "projectName": "thetaru.github.io",
  "themeConfig": {
    "defaultMode": "dark",
    "navbar": {
      "hideOnScroll": true,
      "title": "thetaru.github.io",
      "items": [
        {
          "to": "docs/about/AboutThisPage",
          "label": "About",
          "position": "right"
        },
        {
          "to": "docs/resume/Resume",
          "label": "Resume",
          "position": "right"
        },
        {
          "to": "docs/portfolio/Portfolio",
          "label": "Portfolio",
          "position": "right"
        }
      ]
    },
    "footer": {
      "copyright": "Copyright © thetaru.github.io",
      "style": "light",
      "links": []
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/thetaru/dev/thetaru.github.io/sidebars.js"
        },
        "theme": {
          "customCss": "/home/thetaru/dev/thetaru.github.io/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};