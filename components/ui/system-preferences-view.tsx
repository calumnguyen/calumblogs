'use client';

interface SystemPreferencesViewProps {
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

interface ColorOption {
  id: string;
  name: string;
  gradient: string;
}

const COLOR_OPTIONS: ColorOption[] = [
  {
    id: 'default',
    name: 'Default',
    gradient: 'from-gray-200 via-gray-100 to-gray-200',
  },
  {
    id: 'lavender',
    name: 'Lavender',
    gradient: 'from-purple-200 via-pink-100 to-purple-200',
  },
  {
    id: 'mint',
    name: 'Mint',
    gradient: 'from-green-200 via-emerald-100 to-green-200',
  },
  {
    id: 'sky',
    name: 'Sky',
    gradient: 'from-blue-200 via-cyan-100 to-blue-200',
  },
  {
    id: 'peach',
    name: 'Peach',
    gradient: 'from-orange-200 via-pink-100 to-orange-200',
  },
];

/**
 * System Preferences View Component
 * 
 * Displays color picker with gradient circles to change background color.
 */
export function SystemPreferencesView({ selectedColor, onColorSelect }: SystemPreferencesViewProps) {
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="text-center px-8 max-w-4xl">
        <h2 className="text-white text-2xl md:text-3xl font-semibold mb-8">
          System Preferences
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {COLOR_OPTIONS.map((color) => (
            <div key={color.id} className="flex flex-col items-center">
              <button
                onClick={() => onColorSelect(color.id)}
                className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${color.gradient} transition-all duration-300 hover:scale-110 ${
                  selectedColor === color.id
                    ? 'ring-4 ring-white ring-opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.8)]'
                    : 'ring-2 ring-white ring-opacity-50'
                }`}
                aria-label={`Select ${color.name} background`}
              >
                {selectedColor === color.id && (
                  <div className="absolute inset-0 rounded-full bg-white opacity-30 animate-pulse"></div>
                )}
              </button>
              <span className="text-white text-sm mt-3 font-medium">{color.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SystemPreferencesView;

