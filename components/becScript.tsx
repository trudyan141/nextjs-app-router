'use client';
import Script from "next/script";
declare const TE;
export default function BecScript({

}) {
  return (
     <Script
        src="https://tma-demo.dmtp.tech/sdk/0.0.8/bec.js?walletAddress=39oXQfuzAVeV2QaqYzmAWC8w9sgl7Bvvhu%2FnrBf2bYw%3D"
        strategy="afterInteractive" // Loads the script after the page is interactive
        onLoad={() => {
          if (typeof TE.onLoad === "function") {
              TE.onLoad();
          } else {
            console.error('TE.onLoad is not a function');
          }
        }}
      />
  );
}
