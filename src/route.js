import Addarticle from "./pages/add-article/add-article"
import Articlee from "./pages/article/article"
import Editarticle from "./pages/edit-article/editarticle"
import Home from "./pages/home/Home"

const Routei = [
    {path: '/' , element: <Home />},
    {path: '/addart' , element: <Addarticle />},
    {path: '/editart/:artid' , element: <Editarticle />},
    {path: '/article/:articleid' , element: <Articlee />}
]

export default Routei