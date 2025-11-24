import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import mateImage from '@assets/Change Things to _Mate._ Complete Mate(.) means the full text Mate with fullstop in the same as there in the image that ballon effect but with a little pink effect_1763719020821.jpg';

function FullImageCanvas({ 
  sourceImage 
}: { 
  sourceImage: HTMLImageElement;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !sourceImage.complete) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = sourceImage.width;
    canvas.height = sourceImage.height;

    ctx.drawImage(sourceImage, 0, 0);

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      const brightness = (r + g + b) / 3;
      if (brightness > 240) {
        data[i + 3] = 0;
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, [sourceImage]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="w-auto h-40 md:h-64 lg:h-80"
      initial={{ y: 0 }}
      animate={{ 
        y: [0, -15, 0, 10, 0]
      }}
      transition={{
        duration: 16,
        repeat: Infinity,
        ease: "easeInOut",
        times: [0, 0.25, 0.5, 0.75, 1]
      }}
      style={{
        filter: 'drop-shadow(0 10px 30px rgba(236, 72, 153, 0.5))'
      }}
      data-testid="img-mate-logo"
    />
  );
}

export function TypingEffect() {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = mateImage;
    img.onload = () => {
      imgRef.current = img;
      setImageLoaded(true);
    };
  }, []);

  if (!imageLoaded || !imgRef.current) {
    return <div className="h-40 md:h-64 lg:h-80" />;
  }

  return (
    <div className="relative inline-flex items-center">
      <FullImageCanvas sourceImage={imgRef.current!} />
    </div>
  );
}
