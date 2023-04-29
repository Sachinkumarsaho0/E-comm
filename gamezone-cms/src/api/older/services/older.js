'use strict';

/**
 * older service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::older.older');
