import Fetch from "./RESTAPI_FECTH/Fetch";
import "./style.css";
import PostsProvider from "./RESTAPI_FECTH/components/Provider/PostsProvider";
import Provider from "./CONTEXTAPI/component/Provider";
import ContextAPi from "./CONTEXTAPI/component/ContextAPi";
import AuthProvider from "./CONTEXTAPI/component/AuthProvider";
import HomePage from "./CONTEXTAPI/pages/HomePage";
import Hoc, {
  TextComponentWithHover,
  InputComponentWithHover,
} from "./HOC/Hoc";
import Posts from "./HOC/Posts";
import { Authorization } from "./HOC/Authorization";
import HomeReactRouter from "./REACTROUTER/project/HomeReactRouter";

function App() {
  const text =
    "hfnbbfdjfdfjhdfjdjdhfdfdjhfhjfdfdbf  hbhdfgdf sdfbhdsfds gdf dfidgfdbfjdf ufbjfhdjfsdfj  hjfdjfdh dfhjdfjdfhsd iorjbfshfds bj dfhdf djfdf d fnd effe  eijwe i e  rooerleniejr opfbwlf,mfsd";
  return (
    // <PostsProvider>
    //   <Fetch />
    // </PostsProvider>
    // <Provider>
    //   <ContextAPi />
    // </Provider>
    // <AuthProvider>
    //   <HomePage />
    // </AuthProvider>
    <div>
      {/* <TextComponentWithHover text={text} />
      <InputComponentWithHover type="text" /> */}
      {/* <Posts /> */}
      {/* <Authorization /> */}
      <HomeReactRouter />
    </div>
  );
}

export default App;
