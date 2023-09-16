import {Router} from './router.js'

const router = new Router();

router.add("/", "./pages/home.html")
router.add("/universo", "./pages/universo.html")
router.add("/exploracao", "./pages/exploracao.html")
router.add("/error", "./pages/error.html")

router.handle()

window.route = () => router.route();
window.onpopstate = () =>  router.handle();
