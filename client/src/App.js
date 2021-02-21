import Home from "./pages/Home";
import Product from "./pages/Product";
import Result from "./pages/Result";
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query'
import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from "use-shopping-cart";
import { Toaster } from 'react-hot-toast'
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const stripePromise = loadStripe('pk_test_a3jPwDxZY7BixLRkPZth4CFl')

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider
        mode="checkout-session"
        stripe={stripePromise}
        currency="USD"
      >
        <BrowserRouter>
          <Navbar />
          <Toaster position="bottom-center" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/result" component={Result} />
            <Route path="/:productId" component={Product} />
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App;
