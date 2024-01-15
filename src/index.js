import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./REACTROUTER/Routes/Root";
import ErrorPage from "./REACTROUTER/Routes/Error-page";
import Contact, { loader as contactLoader } from "./REACTROUTER/Routes/contact";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

//React Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "/contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
    ],
  },
]);
//CLient API: graphQL
const client = new ApolloClient({
  uri: "https://api.spacex.land/graphql/",
  cache: new InMemoryCache(),
});

//REDUX

//State

//Action

//Reducer

//Dispatch
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
