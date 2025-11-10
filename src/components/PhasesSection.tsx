import { ImageWithFallback } from './fallback/ImageWithFallback';

interface Phase {
  number: string;
  title: string;
  description: string;
  images: string[];
}

const phases: Phase[] = [
  {
    number: '01',
    title: 'Discover and Analysis',
    description: 'Discover opportunities and refine strategies for decisions.',
    images: [
      'https://picsum.photos/60/60?random=1',
      'https://picsum.photos/60/60?random=2', 
      'https://picsum.photos/60/60?random=3'
    ]
  },
  {
    number: '02',
    title: 'Design and Implement', 
    description: 'Design and implement solutions to transform ideas.',
    images: [
      'https://picsum.photos/60/60?random=4',
      'https://picsum.photos/60/60?random=5',
      'https://picsum.photos/60/60?random=6'
    ]
  },
  {
    number: '03',
    title: 'Deliver and Monitor',
    description: 'Ensure efficient execution and performance tracking.',
    images: [
      'https://picsum.photos/60/60?random=7',
      'https://picsum.photos/60/60?random=8',
      'https://picsum.photos/60/60?random=9'
    ]
  }
];

export function PhasesSection() {
  return (
    <section className="flex justify-center gap-10 px-10 py-15 flex-wrap">
      {phases.map((phase) => (
        <div key={phase.number} className="flex-1 min-w-72 max-w-80 text-center">
          <div className="text-sm font-semibold text-gray-500 mb-1.5 uppercase">
            {phase.number}
          </div>
          <div className="flex justify-center gap-2.5 mb-5">
            {phase.images.map((src, index) => (
              <ImageWithFallback
                key={index}
                src={src}
                alt={`Phase ${phase.number} thumbnail ${index + 1}`}
                className="w-15 h-15 rounded-xl object-cover"
              />
            ))}
          </div>
          <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
          <p className="text-base text-gray-400">{phase.description}</p>
        </div>
      ))}
    </section>
  );
}