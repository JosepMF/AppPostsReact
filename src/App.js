import { BrowserRouter } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { AppRouter } from "./routers/AppRouter";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    </>
  );
}
