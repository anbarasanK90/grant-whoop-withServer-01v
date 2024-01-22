import './App.css';
import React, { useContext } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Copyright from "./components/copyright";
import Coveragereport from "./components/coverageReport";
import MainPage from "./components/mainPage";
import UserDetailsContext from './context/context';
import ErrorBoundary from './components/errorboundary'

function App() {
  // const {mainPageNave} = useContext(UserDetailsContext)
  const contextValue= useContext(UserDetailsContext);
  return (
    <ErrorBoundary>
      <div className="App">
        {contextValue.userDetails?.mainPageNave == false && <MainPage />}
        
        {contextValue.userDetails?.mainPageNave == true && 
        <section className='CoverageReportSection'>
          <Coveragereport/>
        </section>}
        <footer className='customFooter_section'>
          <Copyright />
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
