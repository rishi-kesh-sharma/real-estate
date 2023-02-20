import { useEffect, useState } from "react";
import Router from "next/router.js";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store.js";
import "../styles/nprogress.css";
import NProgress from "nprogress";
import { useRouter } from "next/router";
import { createContext } from "react";

// APP CONTEXT FOR BREADCRUMBS
export const appContext = createContext(null);
function App({ Component, pageProps }) {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState();

  // USEEFFECT FOR NPROGRESS
  useEffect(() => {
    const handleRouteStart = () => {
      NProgress.start();
    };
    const handleRouteDone = () => {
      NProgress.done();
    };

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  // USEEFFECT FOR BREADCRUMB
  useEffect(() => {
    const pathWithoutQuery = router.asPath.split("?")[0];
    let pathArray = pathWithoutQuery.split("/");
    pathArray.shift();

    pathArray = pathArray.filter((path) => path !== "");

    const breadcrumbs = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path.charAt(0).toUpperCase() + path.slice(1),
        isCurrent: index === pathArray.length - 1,
      };
    });

    setBreadcrumbs(breadcrumbs);
  }, [router.asPath]);
  return (
    <appContext.Provider value={breadcrumbs}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </appContext.Provider>
  );
}
export default App;
