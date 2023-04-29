'use strict';

/**
 * popularity controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::popularity.popularity');
