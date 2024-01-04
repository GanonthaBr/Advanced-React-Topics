import Fetch from "./RESTAPI_FECTH/Fetch";
import "./style.css";
import PostsProvider from "./RESTAPI_FECTH/components/Provider/PostsProvider";
import Provider from "./CONTEXTAPI/component/Provider";
import ContextAPi from "./CONTEXTAPI/component/ContextAPi";
import AuthProvider from "./CONTEXTAPI/component/AuthProvider";
import HomePage from "./CONTEXTAPI/pages/HomePage";

function App() {
  return (
    // <PostsProvider>
    //   <Fetch />
    // </PostsProvider>
    // <Provider>
    //   <ContextAPi />
    // </Provider>
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
}

export default App;
