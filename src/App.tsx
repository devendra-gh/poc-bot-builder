import { Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Loader, Layout } from "./components";
import { Home, NotFound } from "./containers";

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
