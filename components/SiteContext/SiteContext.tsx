import React, { createContext, useContext } from "react";

// site config
import config from "site.config";

// interfaces && types
import { TWithChildren } from "interfaces/props";

const store = createContext({});

function SiteContext({ children }: TWithChildren) {
  return <store.Provider value={config}>{children}</store.Provider>;
}

export function useSite() {
  return useContext(store);
}

export default SiteContext;
