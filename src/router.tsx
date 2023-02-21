import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { About } from "./components/about";
import { TheArticle } from "./components/anarticle";
//import Article from "./components/article";
import { Contact } from "./components/contact";
import { Home } from "./components/home";

export const Router= createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                path:'/',
                element: <Home/>,
                index:true
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/article',
                element: <TheArticle/>
            }         
        ]
    }
])