import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/libs/next-auth";
import config from "@/config";
import { AppSidebar } from "@/components/dashboard/app-sidebar";

// This is a server-side component to ensure the user is logged in.
// If not, it will redirect to the login page.
// It's applied to all subpages of /dashboard in /app/dashboard/*** pages
// You can also add custom static UI elements like a Navbar, Sidebar, Footer, etc..
// See https://shipfa.st/docs/tutorials/private-page
export default async function LayoutPrivate({ children }) {
  const session = await getServerSession(authOptions);

  // if (!session) {
  //   redirect(config.auth.loginUrl);
  // }

  return (
    <div className="flex min-h-screen">
      <AppSidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}
