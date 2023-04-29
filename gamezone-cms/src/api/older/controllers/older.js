'use strict';

/**
 * older controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::older.older');
