import React, { createContext, useContext } from "react";

// site config
import config from "site.config";

// interfaces
import { IProps } from "interfaces/props";

const store = createContext({});

function SiteContext({ children }: IProps): JSX.Element {
  return <store.Provider value={config}>{children}</store.Provider>;
}

export function useSite() {
  return useContext(store);
}

export default SiteContext;
