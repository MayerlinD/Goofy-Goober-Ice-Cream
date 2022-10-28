const RESOURCE_PATH = '/ggicecream'
const viewController = {
  index(req, res, next){
    res.render('ggicecream/Index', res.locals.data)
  },
  show(req, res, next){
    res.render('ggicecream/Show', res.locals.data)
  },
  edit(req, res, next){
    res.render('ggicecream/Edit', res.locals.data)
  },
  newView(req, res, next){
    res.render('ggicecream/New')
  },
  redirectHome(req, res, next){
    res.redirect(RESOURCE_PATH)
  },
  redirectShow(req, res, next){
    const pokemonId = req.params.id || res.locals.data.ggicecream._id
    res.redirect(RESOURCE_PATH + `/${res.locals.data.ggicecream.id}`)
  }
}

module.exports = viewController