import React from "react";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
//Import Pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Nav from "./components/Nav";
import Collection from "./pages/Collection";
//Router
import { Switch, Route } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
    return (
        <SimpleReactLightbox>
            <div className="App">
                <GlobalStyle />
                <Nav />
                <AnimatePresence exitBeforeEnter>
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/gallery" exact>
                            <Gallery />
                        </Route>
                        <Route path="/gallery/:id" exact>
                            <Collection />
                        </Route>
                    </Switch>
                </AnimatePresence>
            </div>
        </SimpleReactLightbox>
    );
}

export default App;
