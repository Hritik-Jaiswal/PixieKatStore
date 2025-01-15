"use client"

export default function ColorPalette() {
  const colors = [
    {
      name: 'Royal Purple',
      base: 'royal',
      hex: '#1a103c',
      shades: {
        100: '#06040e',
        200: '#0c071d',
        300: '#120b2b',
        400: '#160e34',
        500: '#1a103c',
        600: '#2d1a5f',
        700: '#3f2582',
        800: '#5231a5',
        900: '#643dc8'
      }
    },
    {
      name: 'Dark Crimson',
      base: 'crimson',
      hex: '#2d0808',
      shades: {
        100: '#0a0202',
        200: '#140404',
        300: '#1e0606',
        400: '#280707',
        500: '#2d0808',
        600: '#4d0d0d',
        700: '#6d1313',
        800: '#8d1818',
        900: '#ad1e1e'
      }
    },
    {
      name: 'Vibrant Red',
      base: 'red',
      hex: '#ff4d4d',
      shades: {
        100: '#400000',
        200: '#800000',
        300: '#bf0000',
        400: '#ff0000',
        500: '#ff4d4d',
        600: '#ff6666',
        700: '#ff8080',
        800: '#ff9999',
        900: '#ffb3b3'
      }
    },
    {
      name: 'Deep Purple',
      base: 'deep',
      hex: '#1f1544',
      shades: {
        100: '#08060f',
        200: '#100b1f',
        300: '#17112e',
        400: '#1f1544',
        500: '#2d1a5f',
        600: '#3b1f7a',
        700: '#482495',
        800: '#5629b0',
        900: '#642ecb'
      }
    }
  ];

  const gradients = [
    {
      name: 'Background Primary',
      class: 'bg-gradient-to-br from-[#1a103c] to-[#2d0808]'
    },
    {
      name: 'Card Background',
      class: 'bg-gradient-to-br from-[#1f1544] to-[#2d0808]'
    },
    {
      name: 'Button Primary',
      class: 'bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a]'
    },
    {
      name: 'Text Gradient',
      class: 'bg-gradient-to-r from-white to-gray-300'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
        Color Palette
      </h1>

      {/* Color Swatches */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {colors.map((color) => (
          <div 
            key={color.base}
            className="bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-xl border border-[#4d2020] p-6 space-y-4"
          >
            <h3 className="text-xl font-semibold text-white mb-4">{color.name}</h3>
            <div className="grid grid-cols-3 gap-2">
              {Object.entries(color.shades).map(([shade, value]) => (
                <div key={shade} className="space-y-1">
                  <div 
                    className="w-full h-12 rounded-lg"
                    style={{ backgroundColor: value }}
                  />
                  <p className="text-xs text-center text-gray-300">{shade}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-center text-gray-300 mt-2">Base: {color.hex}</p>
          </div>
        ))}
      </div>

      {/* Gradient Swatches */}
      <h2 className="text-2xl font-bold mb-8 text-white">Gradients</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gradients.map((gradient) => (
          <div 
            key={gradient.name}
            className="bg-gradient-to-br from-[#1f1544] to-[#2d0808] rounded-xl border border-[#4d2020] p-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">{gradient.name}</h3>
            <div className={`h-24 rounded-lg ${gradient.class}`} />
            <p className="text-sm text-gray-300 mt-2">{gradient.class}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
