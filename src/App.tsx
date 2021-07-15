import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Loader, Landing } from "./components";
import { Home, NotFound } from "./containers";

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Landing>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Landing>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
