const RESOURCE_PATH = '/goober'
const viewController = {
    home(req, res, next) {
        res.render('goober/Home', res.locals.data)
    },
    index(req, res, next) {
        res.render('goober/Index', res.locals.data)
    },
    show(req, res, next) {
        res.render('goober/Show', res.locals.data)
    },
    edit(req, res, next) {
        res.render('goober/Edit', res.locals.data)
    },
    newView(req, res, next) {
        res.render('goober/New')
    },
    redirectHome(req, res, next) {
        res.redirect(RESOURCE_PATH)
    },
    redirectShow(req, res, next) {
        const gooberId = req.params.id || res.locals.data.goober._id
        res.redirect(RESOURCE_PATH + `/${res.locals.data.goober.id}`)
    }
}

module.exports = viewController