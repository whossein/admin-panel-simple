import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    /* Component() {
      let navigation = useNavigation();

      return (
        <>
          {navigation.state !== "idle" ? (
            <div className="is-loading">Loading...</div>
          ) : null}
          <Nav />
          <div className="content">
            <Outlet />
          </div>
        </>
      );
    }, */
    /*  children: [
      {
        index: true,
        Component() {
          React.useEffect(() => {
            document.title = "Home";
          }, []);
          return <h1>Home</h1>;
        },
      },
      {
        path: "loader",
        async loader() {
          await new Promise((r) => setTimeout(r, 1000));
          return json({ message: "LOADER DATA" });
        },
        Component() {
          let data = useLoaderData() as { message: string };
          React.useEffect(() => {
            document.title = "Loader";
          }, []);
          return (
            <>
              <h1>Loader Page</h1>
              <p>Loader Data: {data.message}</p>
            </>
          );
        },
      },
      {
        path: "action",
        async action() {
          await new Promise((r) => setTimeout(r, 1000));
          return json({ message: "ACTION DATA" });
        },
        Component() {
          let data = useActionData() as { message: string } | undefined;
          React.useEffect(() => {
            document.title = "Action";
          }, []);
          return (
            <>
              <h1>Action Page</h1>
              <p>Action Data: {data?.message}</p>
            </>
          );
        },
      },
      {
        path: "defer",
        async loader({ request }) {
          return defer({
            critical: "CRITICAL PATH DATA",
            lazy: new Promise((r) => setTimeout(() => r("LAZY DATA"), 1000)),
          });
        },
        Component() {
          let data = useLoaderData() as {
            critical: string;
            lazy: Promise<string>;
          };
          React.useEffect(() => {
            document.title = "Defer";
          }, []);
          return (
            <>
              <h1>Defer</h1>
              <p>Critical Data: {data.critical}</p>
              <React.Suspense
                fallback={<p>Suspense boundary in the route...</p>}
                key={useLocation().key}
              >
                <Await resolve={data.lazy}>
                  {(value) => <p>Lazy Data: {value}</p>}
                </Await>
              </React.Suspense>
            </>
          );
        },
      },
      {
        path: "defer-no-boundary",
        async loader({ request }) {
          let value = new URL(request.url).searchParams.get("value") || "";
          return defer({
            value,
            critical: "CRITICAL PATH DATA - NO BOUNDARY " + value,
            lazy: new Promise((r) =>
              setTimeout(() => r("LAZY DATA - NO BOUNDARY " + value), 1000)
            ),
          });
        },
        Component() {
          let data = useLoaderData() as {
            value: string;
            data: string;
            critical: string;
            lazy: Promise<string>;
          };
          React.useEffect(() => {
            document.title = "Defer (No Boundary)";
          }, []);
          return (
            <>
              <h1>Defer No Boundary {data.value}</h1>
              <p>Critical Data: {data.critical}</p>
              <div>
                <Await resolve={data.lazy}>
                  {(value) => <p>Lazy Data: {value}</p>}
                </Await>
              </div>
            </>
          );
        },
      },
      {
        path: "images",
        Component() {
          React.useEffect(() => {
            document.title = "Images";
          }, []);
          return (
            <div className="image-list">
              <h1>Image List</h1>
              <div>
                {images.map((src, idx) => (
                  // Adds 'transitioning' class to the <a> during the transition
                  <NavLink
                    key={src}
                    to={`/images/${idx}`}
                    unstable_viewTransition
                  >
                    <p>Image Number {idx}</p>
                    <img src={src} alt={`Img ${idx}`} />
                  </NavLink>

                  // Render prop approach similar to isActive/isPending
                  // <NavLink
                  //   key={src}
                  //   to={`/images/${idx}`}
                  //   unstable_viewTransition
                  // >
                  //   {({ isTransitioning }) => (
                  //     <div className={isTransitioning ? "transitioning" : ""}>
                  //       <p>Image Number {idx}</p>
                  //       <img src={src} alt={`Img ${idx}`} />
                  //     </div>
                  //   )}
                  // </NavLink>

                  // Manual hook based approach
                  // <NavImage key={src} src={src} idx={idx} />
                ))}
              </div>
            </div>
          );
        },
      },
      {
        path: "images/:id",
        Component() {
          let params = useParams();
          React.useEffect(() => {
            document.title = "Image " + params.id;
          }, [params.id]);
          return (
            <div className={`image-detail`}>
              <h1>Image Number {params.id}</h1>
              <img src={images[Number(params.id)]} alt={`${params.id}`} />
            </div>
          );
        },
      },
    ], */
  },
]);

export default routes;
