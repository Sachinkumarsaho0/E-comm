'use strict';

/**
 * popularity service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popularity.popularity');
