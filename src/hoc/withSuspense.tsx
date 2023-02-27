import React, { ComponentType, Suspense } from "react";

const Loading = () => <div>Loading...</div>;

type ComponentImportCallbackType = () => Promise<{
  default: ComponentType<any>;
}>;

export const withSuspense = (
  ComponentImportCallback: ComponentImportCallbackType
) => {
  const AsyncComponent = React.lazy(ComponentImportCallback);

  return (
    <Suspense fallback={<Loading />}>
      <AsyncComponent />
    </Suspense>
  );
};
