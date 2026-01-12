import {
  createRootRoute,
  HeadContent,
  Scripts,
  Outlet,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400&family=Cormorant+Garamond:wght@400&display=swap",
      },
    ],
  }),

  notFoundComponent: () => (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1>404</h1>
      <p>Page not found</p>
    </div>
  ),

  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Outlet />
      <Scripts />
    </>
  );
}
