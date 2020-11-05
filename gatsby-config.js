module.exports = {
  siteMetadata: {
    title: 'Uniquely',
  },
  plugins: [
    `gatsby-plugin-layout`,
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'madebyrossi.com/client/wordpress',
        hostingWPCOM: false,
        protocol: 'https',
        useACF: false,
        auth: {},
        verboseOutput: false,
        excludedRoutes: [
          "**/wp/v2/users/me",
          "**/wp/v2/block-types",
          "**/wp/v2/settings",
          "**/wp/v2/themes",
          "**/wp/v2/plugins",
          "**/wp/v2/block-directory/search",
          "**/wc/store/cart/add-item",
          "**/wc/store/cart/apply-coupon",
          "**/wc/store/cart/coupons",
          "**/wc/store/cart/items",
          "**/wc/store/cart/remove-coupon",
          "**/wc/store/cart/remove-item",
          "**/wc/store/cart/update-item",
          "**/wc/store/cart/update-shipping",
          "**/wc/store/checkout",
          "**/wc-analytics/admin/notes",
          "**/wc-analytics/admin/notes/delete/all",
          "**/wc-analytics/admin/notes/undoremove",
          "**/wc-analytics/coupons",
          "**/wc-analytics/coupons/batch",
          "**/wc-analytics/customers",
          "**/wc-analytics/data",
          "**/wc-analytics/data/countries",
          "**/wc-analytics/data/download-ips",
          "**/wc-analytics/leaderboards",
          "**/wc-analytics/leaderboards/allowed",
          "**/wc-admin/marketing/recommended",
          "**/wc-admin/marketing/knowledge-base",
          "**/wc-admin/marketing/overview/activate-plugin",
          "**/wc-admin/marketing/overview/installed-plugins",
          "**/wc-admin/options",
          "**/wc-analytics/orders",
          "**/wc-analytics/orders/batch",
          "**/wc-analytics/products",
          "**/wc-analytics/products/batch",
          "**/wc-analytics/products/categories",
          "**/wc-analytics/products/categories/batch",
          "**/wc-analytics/products/reviews",
          "**/wc-analytics/products/reviews/batch",
          "**/wc-analytics/reports",
          "**/wc-analytics/reports/import",
          "**/wc-analytics/reports/import/cancel",
          "**/wc-analytics/reports/import/delete",
          "**/wc-analytics/reports/import/status",
          "**/wc-analytics/reports/import/totals",
          "**/wc-analytics/reports/products",
          "**/wc-analytics/reports/variations",
          "**/wc-analytics/reports/products/stats",
          "**/wc-analytics/reports/revenue/stats",
          "**/wc-analytics/reports/orders",
          "**/wc-analytics/reports/orders/stats",
          "**/wc-analytics/reports/categories",
          "**/wc-analytics/reports/taxes",
          "**/wc-analytics/reports/taxes/stats",
          "**/wc-analytics/reports/coupons",
          "**/wc-analytics/reports/coupons/stats",
          "**/wc-analytics/reports/stock",
          "**/wc-analytics/reports/stock/stats",
          "**/wc-analytics/reports/downloads",
          "**/wc-analytics/reports/downloads/stats",
          "**/wc-analytics/reports/customers",
          "**/wc-analytics/reports/customers/stats",
          "**/wc-analytics/taxes",
          "**/wc-analytics/taxes/batch",
          "**/wc-admin/themes",
          "**/wc-admin/plugins/install",
          "**/wc-admin/plugins/active",
          "**/wc-admin/plugins/installed",
          "**/wc-admin/plugins/activate",
          "**/wc-admin/plugins/connect-jetpack",
          "**/wc-admin/plugins/request-wccom-connect",
          "**/wc-admin/plugins/finish-wccom-connect",
          "**/wc-admin/plugins/connect-paypal",
          "**/wc-admin/plugins/connect-wcpay",
          "**/wc-admin/plugins/connect-square",
          "**/wc-admin/onboarding/profile",
          "**/wc-admin/onboarding/tasks/import_sample_products",
          "**/wc-admin/onboarding/tasks/create_store_pages",
          "**/wc-admin/onboarding/tasks/create_homepage",
          "**/wc-admin/onboarding/themes/install",
          "**/wc-admin/onboarding/themes/activate",
          "**/wc-analytics/reports/performance-indicators",
          "**/wc-analytics/reports/performance-indicators/allowed",
          "**/wc/v1/coupons",
          "**/wc/v1/coupons/batch",
          "**/wc/v1/customers",
          "**/wc/v1/customers/batch",
          "**/wc/v1/orders",
          "**/wc/v1/orders/batch",
          "**/wc/v1/products/attributes",
          "**/wc/v1/products/attributes/batch",
          "**/wc/v1/products/categories",
          "**/wc/v1/products/categories/batch",
          "**/wc/v1/products/shipping_classes",
          "**/wc/v1/products/shipping_classes/batch",
          "**/wc/v1/products/tags",
          "**/wc/v1/products/tags/batch",
          "**/wc/v1/products",
          "**/wc/v1/products/batch",
          "**/wc/v1/reports/sales",
          "**/wc/v1/reports/top_sellers",
          "**/wc/v1/reports",
          "**/wc/v1/taxes/classes",
          "**/wc/v1/taxes",
          "**/wc/v1/taxes/batch",
          "**/wc/v1/webhooks",
          "**/wc/v1/webhooks/batch",
          "**/wc/v2/coupons",
          "**/wc/v2/coupons/batch",
          "**/wc/v2/customers",
          "**/wc/v2/customers/batch",
          "**/wc/v2/orders",
          "**/wc/v2/orders/batch",
          "**/wc/v2/products/attributes",
          "**/wc/v2/products/attributes/batch",
          "**/wc/v2/products/categories",
          "**/wc/v2/products/categories/batch",
          "**/wc/v2/products/shipping_classes",
          "**/wc/v2/products/shipping_classes/batch",
          "**/wc/v2/products/tags",
          "**/wc/v2/products/tags/batch",
          "**/wc/v2/products",
          "**/wc/v2/products/batch",
          "**/wc/v2/reports/sales",
          "**/wc/v2/reports/top_sellers",
          "**/wc/v2/reports",
          "**/wc/v2/settings",
          "**/wc/v2/shipping/zones",
          "**/wc/v2/taxes/classes",
          "**/wc/v2/taxes",
          "**/wc/v2/taxes/batch",
          "**/wc/v2/webhooks",
          "**/wc/v2/webhooks/batch",
          "**/wc/v2/system_status",
          "**/wc/v2/system_status/tools",
          "**/wc/v2/shipping_methods",
          "**/wc/v2/payment_gateways",
          "**/wc/v3/coupons",
          "**/wc/v3/coupons/batch",
          "**/wc/v3/customers",
          "**/wc/v3/customers/batch",
          "**/wc/v3/orders",
          "**/wc/v3/orders/batch",
          "**/wc/v3/products/attributes",
          "**/wc/v3/products/attributes/batch",
          "**/wc/v3/products/categories",
          "**/wc/v3/products/categories/batch",
          "**/wc/v3/products/reviews",
          "**/wc/v3/products/reviews/batch",
          "**/wc/v3/products/shipping_classes",
          "**/wc/v3/products/shipping_classes/batch",
          "**/wc/v3/products/tags",
          "**/wc/v3/products/tags/batch",
          "**/wc/v3/products",
          "**/wc/v3/products/batch",
          "**/wc/v3/reports/sales",
          "**/wc/v3/reports/top_sellers",
          "**/wc/v3/reports/orders/totals",
          "**/wc/v3/reports/products/totals",
          "**/wc/v3/reports/customers/totals",
          "**/wc/v3/reports/coupons/totals",
          "**/wc/v3/reports/reviews/totals",
          "**/wc/v3/reports",
          "**/wc/v3/settings",
          "**/wc/v3/settings/batch",
          "**/wc/v3/shipping/zones",
          "**/wc/v3/taxes/classes",
          "**/wc/v3/taxes",
          "**/wc/v3/taxes/batch",
          "**/wc/v3/webhooks",
          "**/wc/v3/webhooks/batch",
          "**/wc/v3/system_status",
          "**/wc/v3/system_status/tools",
          "**/wc/v3/shipping_methods",
          "**/wc/v3/payment_gateways",
          "**/wc/v3/data",
          "**/wc/v3/data/continents",
          "**/wc/v3/data/countries",
          "**/wc/v3/data/currencies",
          "**/wc/v3/data/currencies/current",
          "**/wccom-site/v1/installer",
          "**/wc-analytics/admin/notes/update",
          "**/wc-admin/onboarding/tasks/status"
        ],
      },
    },
    {
      resolve: '@pasdo501/gatsby-source-woocommerce',
      options: {
        api: 'madebyrossi.com/client/wordpress',
        verbose: false,
        https: true,
        api_keys: {
          consumer_key: `ck_6722af3079b88ea4e09cad8aca04ab8baacebb98`,
          consumer_secret: `cs_ca5cb573713da66ebceac4920b0336e0d586c50b`,
        },
        fields: ['products', 'products/categories', 'products/attributes'],
        query_string_auth: false,
        api_version: 'wc/v3',
        per_page: 100,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
    'gatsby-plugin-netlify',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `mulish\:300,400,400i,700,800`
        ],
        display: 'swap'
      }
    },
  ],
}
