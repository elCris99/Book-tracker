import { Outlet } from "react-router";
import SiteHeader from "../../components/SiteHeader";
import MobileNavigation from "../../components/MobileNavigation";
import SiteFooter from "../../components/SiteFooter";
import "./RootLayout.scss";

function RootLayout() {
  return (
    <div className="root-layout">
      <SiteHeader />

      <main className="app-main">
        <Outlet />
      </main>

      <SiteFooter />
      <MobileNavigation />
    </div>
  );
}

export default RootLayout;
