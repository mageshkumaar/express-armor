var http = require('http')
var request = require('supertest')
var armor = require('..')

describe('armor()', function () {
  before(function () {
    this.server = createServer()
  })

  it('should check server is created properly', function (done) {
    request(this.server)
      .get('/')
      .expect(200, '', done)
  })
})

function createServer (opts) {
  var _armor = armor(opts)

  return http.createServer(function (req, res) {
    _armor(req, res, function (err) {
      res.statusCode = err ? (err.status || 500) : 200
      res.end(err ? err.message : JSON.stringify(req.body))
    })
  })
}
