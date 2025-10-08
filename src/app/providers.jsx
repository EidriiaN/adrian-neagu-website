"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import { useServerInsertedHTML } from "next/navigation";
import { useState } from "react";
import createEmotionCache from "../utils/createEmotionCache";
import theme from "../theme/theme";

export function Providers({ children }) {
  const [{ cache, flush }] = useState(() => {
    const cache = createEmotionCache();
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) return null;
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }
    return (
      <style
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <ChakraProvider
        theme={theme}
        colorModeManager={
          typeof window !== "undefined"
            ? {
                get: () => localStorage.getItem("chakra-ui-color-mode") || "dark",
                set: (value) => localStorage.setItem("chakra-ui-color-mode", value),
                type: "localStorage",
              }
            : {
                get: () => "dark",
                set: () => {},
                type: "cookie",
              }
        }
      >
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
