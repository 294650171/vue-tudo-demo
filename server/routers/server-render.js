const ejs = require('ejs')

module.exports = async (ctx, renderer, template) => {
  ctx.headers['Content-type'] = 'text/html'

  const context = { url: ctx.path }

  try {
    const appString = renderer.renderToString(context)

    const html = ejs.render(template, {
      appString,
      style: context.renderStyles(),
      scripts: context.renderScripts()
    })

    ctx.body = html
    /* code */
  } catch (err) {
    console.log(`render error` ,err)
    throw err
   }

}