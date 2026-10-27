import { Outlet } from "react-router";
import SiteHeader from "../../components/SiteHeader";
import MobileNavigation from "../../components/MobileNavigation";

function RootLayout() {
  return (
    <>
      <SiteHeader />

      <main>
        <Outlet />
      </main>

      <MobileNavigation />
    </>
  );
}

export default RootLayout;
