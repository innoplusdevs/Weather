import React, { createContext, useContext } from "react";
import type { AppProps } from "next/app";

// site config
import config from "site.config";

const store = createContext({});

function SiteContext({ Component }: AppProps): JSX.Element {
  return (
    <store.Provider value={config}>
      <Component />
    </store.Provider>
  );
}

export function useSite() {
  return useContext(store);
}

export default SiteContext;
