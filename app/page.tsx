

'use client';
import { useEffect } from 'react';
declare const TE;
export default function Home() {

  useEffect(() => {
     if (typeof window !== 'undefined') {
        document.addEventListener('becLoaded', function (event : unknown) {
          console.log("🚀 ~ event:", event)
          if (typeof TE !== 'undefined' && TE.configureOfferWallStyle) {
              TE.configureOfferWallStyle({
              topBar: {
                  backgroundColor: '#2c3e50',
                  textColor: '#ecf0f1'
              },
              content: {
                  backgroundColor: '#34495e',
                  appNameColor: '#ecf0f1',
                  appDescriptionColor: '#bdc3c7'
              },
              button: {
                  backgroundColor: '#3498db',
                  textColor: '#ffffff',
                  highlightedBackgroundColor: '#2980b9',
                  highlightedTextColor: '#ffffff',
                  outlineColor: '#3498db'
              }
          });
          } else {
              console.warn('TE is not defined or configureOfferWallStyle is missing.');
          }
            
          
      });
    }
  
    }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div id='exchangeBanner'></div>
         <button className="mt-8" onClick={() => { 
              console.log('TE',TE);
              if (TE && TE.offerWall) {
                 TE?.offerWall();
              }
             
            } }> open offer wall </button>
       </main>
    </div>
  );
}
