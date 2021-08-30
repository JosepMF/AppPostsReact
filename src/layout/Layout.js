import { Navigation } from "./Navigation";

export function Layout({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
