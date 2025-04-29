// filepath: c:\MyProject\nextjs-tailwind-portfolio-page-main\src\components\UnityGame.tsx
import React from "react";

export default function UnityGame({ src }: { src: string }) {
    return (
        <div className="w-full h-[600px]">
            <iframe
                src={src}
                width="100%"
                height="100%"
                allowFullScreen
                frameBorder="0"
                title="Unity WebGL Game"
            />
        </div>
    );
}