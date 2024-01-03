import Fetch from "./RESTAPI_FECTH/Fetch";
import "./style.css";
import PostsProvider from "./RESTAPI_FECTH/components/Provider/PostsProvider";

function App() {
  return (
    <PostsProvider>
      <Fetch />
    </PostsProvider>
  );
}

export default App;
