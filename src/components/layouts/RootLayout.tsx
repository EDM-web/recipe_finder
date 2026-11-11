import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <section className="font-mono">
      <Outlet />
    </section>
  );
};

export default RootLayout;
