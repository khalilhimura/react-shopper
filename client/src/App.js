import Home from "./pages/Home";
import Product from "./pages/Product";
import Result from "./pages/Result";
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/result" component={Result} />
        <Route path="/:productId" component={Product} />
      </Switch>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App;
