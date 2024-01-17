import { RouterProvider as ReactRouterProvider } from "react-router-dom";

export const RouterProvider = () => {
  return (
    <ReactRouterProvider
      router={router}
      future={{
        // Wrap all state updates in React.startTransition()
        v7_startTransition: true,
      }}
    />
  );
};
