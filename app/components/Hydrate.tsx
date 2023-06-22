"use client";

import { ReactNode, useEffect, useState } from "react";

//reactnode is a type that accepts any valid react node, then we dont need to write the type from scratch
//children represent each page that we are going to render
export default function Hydrate({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <>{isHydrated ? <>{children}</> : <div>Loading....</div>}</>;
}
