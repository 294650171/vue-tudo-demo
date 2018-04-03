const serverRender = require('./server-render')
const Router = require('koa-router')
const VueServerRender = require('vue-server-renderer')
const clientManifest = require('../../dist/vue-ssr-client-manifest.json')

module.exports = async (ctx) => {
  await serverRender(ctx)
}