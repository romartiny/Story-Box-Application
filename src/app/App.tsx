import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom"
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import React, {Suspense} from "react";

const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}> About</Link>
      {/*<Suspense fallback={<div>Loading...</div>}>*/}
      {/*  <Routes>*/}
      {/*    <Route path={'/about'} element={<AboutPage />} />*/}
      {/*    <Route path={'/'} element={<MainPage />} />*/}
      {/*  </Routes>*/}
      {/*</Suspense>*/}

      <AppRouter />
    </div>
  );
}

export default App;
