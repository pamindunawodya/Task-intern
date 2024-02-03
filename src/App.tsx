import  React from "react";
import Header from "./layout/header";
import Footer from "./layout/footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./views/signup";

interface Props{

}

interface State{

}


class App extends React.Component<Props, State>{
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | Iterable<React.ReactNode> | React.ReactPortal | boolean | any | null | undefined {
        return(
        <div>
            <BrowserRouter>
                <Header/>

                <Routes>
                   <Route path={"/"}element={<Signup/>}></Route>
                </Routes>

                <Footer/>
            </BrowserRouter>

        </div>
        );
    }
}
export default App;