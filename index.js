'use strict'

/**
 * Module exports.
 * @public
 */

module.exports = armor

/**
 * Configure armor to handle requests
 *
 * @param {Object} options
 * @return {Function} middleware
 */
function armor (options) {
  return function protect (req, res, next) {
    next()
  }
}
