

'use client';
import { useEffect } from 'react';
export default function Home() {

    useEffect(() => {
      document.addEventListener('becLoaded', function (event) {
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
    });
    }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div id='exchangeBanner'></div>
         <button className="mt-8" onClick={() => { 
              console.log('window.TE',window.TE);
              if (window.TE) {
                 window.TE?.offerWall();
              }
             
            } }> open offer wall </button>
       </main>
    </div>
  );
}
