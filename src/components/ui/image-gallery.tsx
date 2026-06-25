import React from 'react';
import { cn } from '@/lib/utils';
import { useInView } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const galleryColumns: Array<Array<{ file: string; ratio: number }>> = [
  [
    { file: 'WhatsApp Image 2026-06-22 at 21.18.47.jpeg', ratio: 900 / 1600 },
    { file: 'Дизайн без названия (2).png',                ratio: 2400 / 1800 },
    { file: 'оиодиюд.jpeg',                               ratio: 1500 / 2000 },
    { file: 'юдтлж.png',                                  ratio: 1600 / 1200 },
    { file: 'ярпя.png',                                   ratio: 1200 / 1600 },
  ],
  [
    { file: 'WhatsApp Image 2026-06-22 at 21.18.48.jpeg', ratio: 2000 / 934 },
    { file: 'дзтл.jpeg',                                  ratio: 945 / 1429 },
    { file: 'фук5грны.png',                               ratio: 1200 / 1600 },
    { file: 'юлооид.jpeg',                                ratio: 955 / 1501 },
  ],
  [
    { file: 'Без названия (1200 x 1600 пикс.).png',       ratio: 1200 / 1600 },
    { file: 'длоипщд.png',                                ratio: 2600 / 1950 },
    { file: 'дрщо.png',                                   ratio: 1667 / 2500 },
    { file: 'дтидшт.jpeg',                                ratio: 934 / 1562 },
  ],
];

const photoUrl = (file: string) =>
  `/галерея/${encodeURIComponent(file)}`;

interface AnimatedImageProps {
  file: string;
  ratio: number;
  onClick: () => void;
}

function AnimatedImage({ file, ratio, onClick }: AnimatedImageProps) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true });
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div ref={wrapperRef}>
      <AspectRatio
        ratio={ratio}
        className="relative overflow-hidden rounded-lg border border-border cursor-pointer group"
        onClick={onClick}
      >
        <img
          alt={file}
          src={photoUrl(file)}
          className={cn(
            'size-full object-cover opacity-0 transition-all duration-700 ease-in-out group-hover:scale-105',
            { 'opacity-100': isInView && !isLoading },
          )}
          onLoad={() => setIsLoading(false)}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 border border-white/70 flex items-center justify-center">
            <span className="text-white text-xl font-bold leading-none select-none">+</span>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
}

export function ImageGallery() {
  const [lightbox, setLightbox] = React.useState<string | null>(null);

  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryColumns.map((col, colIdx) => (
          <div key={colIdx} className="grid gap-4 content-start">
            {col.map((photo) => (
              <AnimatedImage
                key={photo.file}
                file={photo.file}
                ratio={photo.ratio}
                onClick={() => setLightbox(photo.file)}
              />
            ))}
          </div>
        ))}
      </div>

      <Dialog open={!!lightbox} onOpenChange={() => setLightbox(null)}>
        <DialogContent className="max-w-5xl p-0 bg-black border-white/10">
          {lightbox && (
            <img
              src={photoUrl(lightbox)}
              alt="Gallery"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
