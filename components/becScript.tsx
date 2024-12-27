'use client';
import Script from "next/script";
import { useState , useEffect} from "react";
declare const TE;

export default function BecScript({
}) {
  const [env, setEnv] = useState<string | null>(null);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const envParam = urlParams.get("env") || "prod";
    setEnv(envParam);
  }, []);
   const scriptSrc =
    env === "dev"
      ? "https://trudyan141.github.io/banner-exchange/dist/bec.js?walletAddress=QnLOYksIDhA3MfBLoRL%2ByIa8jRggeovB3NtN3d7LD7g%3D"
      : "https://trudyan141.github.io/banner-exchange/dist/bec.js?walletAddress=QnLOYksIDhA3MfBLoRL%2ByIa8jRggeovB3NtN3d7LD7g%3D";
  return (
    <>
     <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive" // Loads the script after the page is interactive
         onLoad={() => {
         console.log("Telegram Web App loaded");
        }}
      />
      {env && <Script
        src={scriptSrc}
        strategy="afterInteractive" // Loads the script after the page is interactive
      
      />}
    </>
  );
}
