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
    ? "https://bec-dev.apps-network.net/latest/bec.js?walletAddress=Iclm6VCe0Ci1hWI2HfmbDU5rT6nBm4N5%2F8PUTti4T9U%3D&task_id=66b74341e7b2219c58656e2a&task_title=DMTP test change name"
    : "https://bec-dev.apps-network.net/latest/bec.js?walletAddress=Iclm6VCe0Ci1hWI2HfmbDU5rT6nBm4N5%2F8PUTti4T9U%3D&task_id=66b74341e7b2219c58656e2a&task_title=DMTP test change name"
    // env === "dev"
    //   ? "https://trudyan141.github.io/banner-exchange/dist/bec.js?walletAddress=QnLOYksIDhA3MfBLoRL%2ByIa8jRggeovB3NtN3d7LD7g%3D"
    //   : "https://trudyan141.github.io/banner-exchange/dist/bec.js?walletAddress=QnLOYksIDhA3MfBLoRL%2ByIa8jRggeovB3NtN3d7LD7g%3D";
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
        onLoad={async () => {
          if (TE && typeof TE.onLoad === "function") {
            await TE.onLoad();
            // Call reportEvent after onLoad completed (Optional for publisher script)
            if (TE && typeof TE.reportEvent === 'function') {
              TE.reportEvent({
                  action: 'CLICK', // OR 'PLAY'
                  // click_id  // OPTIONAL
              });
            }
          } else {
            console.error('TE.onLoad is not a function');
          }
        }}
      />}
    </>
  );
}
