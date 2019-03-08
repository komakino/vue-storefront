(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{184:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"direct-prices-sync-with-magento"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#direct-prices-sync-with-magento","aria-hidden":"true"}},[t._v("#")]),t._v(" Direct prices sync with Magento")]),t._v(" "),s("p",[t._v("As you may observed in our architecture we're synchronizing the whole product catalog with our Elastic Search data store. There are some edge cases among industries when such kind of synchronization may lead to non-invalidated prices and stock quantity problems.")]),t._v(" "),s("p",[t._v("Regarding these challenges we've introduced a special mode which allows vue-storefront to download the prices (in)directly from CMS (Magento or other).")]),t._v(" "),s("p",[t._v("To enable real-time prices sync please do change the following lines in the "),s("code",[t._v("config/local.json")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"products"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"preventConfigurableChildrenDirectAccess"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alwaysSyncPlatformPricesOver"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clearPricesBeforePlatformSync"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"waitForPlatformSync"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"endpoint"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://localhost:8080/api/product"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("This means that each time vue-storefront is downloading the product feed from Elastic Search it will call the "),s("code",[t._v("vue-storefront-api")]),t._v(" unified proxy method to get the prices in real time from Magento.")]),t._v(" "),s("p",[t._v("To use this feature you should also modify "),s("code",[t._v("config/local.json")]),t._v(" within your "),s("code",[t._v("vue-storefront-api")]),t._v(" installation:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[t._v("\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tax"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultCountry"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"defaultRegion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"calculateServerSide"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alwaysSyncPlatformPricesOver"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\t  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[s("em",[t._v("Important note")]),t._v(": As to use the dynamic Magento2 prices sync you should restore the database using "),s("code",[t._v("npm run restore")]),t._v(" within the "),s("code",[t._v("vue-storefront-api")]),t._v(" or re-run "),s("code",[t._v("mage2vuestorefront")]),t._v(' product sync, because a "id" field has been added to the '),s("code",[t._v("configurable_children")]),t._v(" products and it's required for the prices sync")])])}],!1,null,null,null);r.options.__file="direct-prices-sync.md";e.default=r.exports}}]);