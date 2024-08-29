/**
 * @typedef {Object} Namespace
 * @property {string} name
 * @property {string} href
 */

/**
 * @typedef {Object} FeatureType
 * @property {string} name
 * @property {string} nativeName
 * @property {Namespace} namespace
 * @property {string} title
 * @property {Object} keywords
 * @property {string[]} keywords.string
 * @property {string} srs
 * @property {Object} nativeBoundingBox
 * @property {number} nativeBoundingBox.minx
 * @property {number} nativeBoundingBox.maxx
 * @property {number} nativeBoundingBox.miny
 * @property {number} nativeBoundingBox.maxy
 * @property {Object} latLonBoundingBox
 * @property {number} latLonBoundingBox.minx
 * @property {number} latLonBoundingBox.maxx
 * @property {number} latLonBoundingBox.miny
 * @property {number} latLonBoundingBox.maxy
 * @property {string} latLonBoundingBox.crs
 * @property {string} projectionPolicy
 * @property {boolean} enabled
 * @property {Object} metadata
 * @property {Object[]} metadata.entry
 * @property {Object} store
 * @property {string} store['@class']
 * @property {string} store.name
 * @property {string} store.href
 */

/** @type {FeatureType} */
export const featureType = {
  name: "",
  nativeName: "",
  namespace: {
    name: "",
    href: ""
  },
  title: "",
  keywords: {
    string: []
  },
  srs: "",
  nativeBoundingBox: {
    minx: 0,
    maxx: 0,
    miny: 0,
    maxy: 0
  },
  latLonBoundingBox: {
    minx: 0,
    maxx: 0,
    miny: 0,
    maxy: 0,
    crs: ""
  },
  projectionPolicy: "",
  enabled: true,
  metadata: {
    entry: []
  },
  store: {
    "@class": "dataStore",
    name: "",
    href: ""
  },
  serviceConfiguration: false,
  simpleConversionEnabled: false,
  internationalTitle: "",
  internationalAbstract: "",
  maxFeatures: 0,
  numDecimals: 0,
  padWithZeros: false,
  forcedDecimal: false,
  overridingServiceSRS: false,
  skipNumberMatched: false,
  circularArcPresent: false,
  attributes: {
    attribute: {
      name: "",
      minOccurs: 0,
      maxOccurs: 1,
      nillable: true,
      binding: ""
    }
  }
};

