import React from "react";
import Todo from "./Component/Todo";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Todo />
            <Footer/>
        </>
    )
}

export default App;