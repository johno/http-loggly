# http-loggly

Log http requests and responses to [loggly](https://loggly.com).

#### installation

```bash
npm i -S http-loggly
```

#### usage

```sh
LOGGLY_TOKEN=123
LOGGLY_SUBDOMAIN=foobar
LOGGLY_TAG=awesome
```

```javascript
const { send } = require('micro')
const log = require('http-loggly')

module.exports = async (req, res) => {
  log(req, res)

  send(res, 200, 'Yay')
}
```

#### related

- Based off of [`http-ndjson`](https://github.com/yoshuawuyts/http-ndjson)

#### license

MIT

#### contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by John Otander ([@4lpine](https://twitter.com/4lpine)).

***

> This package was initially generated with [yeoman](http://yeoman.io) and the [p generator](https://github.com/johnotander/generator-p.git).
