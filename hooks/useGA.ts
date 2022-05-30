import { useRouter } from "next/router";
import React, { useEffect } from "react";

const useGA = () => {
  const router = useRouter();

  useEffect(() => {
    const onRouteChanged = (url: string) => {
      (window as any).gtag("config", "G-LH1W6QPTN1", {
        page_url: url,
      });
    };

    router.events.on("routeChangeComplete", onRouteChanged);
    return () => router.events.off("routeChangeComplete", onRouteChanged);
  }, [router.events]);
};

export default useGA;
