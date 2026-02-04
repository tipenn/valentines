import { useState } from 'react'

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noScale, setNoScale] = useState(1);

  const yesScale = Math.min(1 + noClickCount * 0.2, 2.5);
  const yesWidth = Math.min(100, 65 + noClickCount * 6);

  const moveNoButton = () => {
    setNoPos({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    });
    setNoScale(prev => prev * 0.7);
    setNoClickCount(prev => prev + 1);
  };

  const datePlan = {
    theme: "Hello, Divine",
    date: "February 14, 2026",
    schedule: [
      { time: "10:00 AM", activity: "Meet Up", details: "I'll come get you, just bring yourself and your pretty smile", icon: "🕘" },
      { time: "11:30 AM", activity: "Manila Ocean Park it is!!", details: "Let's get lost watching the jellyfish — they're weirdly calming", icon: "🐟" },
      { time: "1:00 PM", activity: "Lunch Date", details: "A nice place with a beautiful ambiance", icon: "🍽️" },
      { time: "2:00 PM", activity: "Continue Strolling", details: "Let's enjoy each other", icon: "🎨" },
      { time: "4:00 PM", activity: "Digital Art Museum", details: "Find a perfect spot to endulge ourselves", icon: "🖼" },
      { time: "6:00 PM", activity: "Dinner", details: "Dinner at a near sight location", icon: "🍽️" },
      { time: "7:00 PM", activity: "Coffee Time", details: "Because we can't end the day without it 🎁", icon: "✨" }
    ],
    dresscode: "I'll be wearing white top, navy blue bottom — but wear whatever you're comfortable in (or we can match if you want 👀)",
    notes: "The schedule is flexible - we can adjust based on what you'd enjoy most! The most important thing is spending the day together. 💙"
  };

  // Tulip SVG component
  const Tulip = ({ className = "", style = {} }) => (
    <svg viewBox="0 0 40 64" className={className} style={style}>
      <path d="M20 38 Q18 48 19 60" stroke="#7cb88a" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M19 46 Q12 42 10 46 Q14 50 19 48" fill="#8fcc9e" />
      <ellipse cx="12" cy="22" rx="5.5" ry="11" fill="#f5a0bf" opacity="0.7" transform="rotate(-18 12 22)" />
      <ellipse cx="28" cy="22" rx="5.5" ry="11" fill="#f5a0bf" opacity="0.7" transform="rotate(18 28 22)" />
      <ellipse cx="15" cy="20" rx="5" ry="12" fill="#f5a0bf" transform="rotate(-8 15 20)" />
      <ellipse cx="25" cy="20" rx="5" ry="12" fill="#f5a0bf" transform="rotate(8 25 20)" />
      <ellipse cx="20" cy="19" rx="5.5" ry="12.5" fill="#fcc5d8" />
    </svg>
  );

  // ─── ITINERARY SCREEN ───────────────────────────────────
  if (yesClicked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 flex items-center justify-center p-4">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Quicksand:wght@300;400;500;600&display=swap');
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-3xl w-full border-2 border-pink-300" style={{ animation: 'slideUp 0.6s ease' }}>
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="text-7xl mb-3 animate-bounce">💗</div>
            <h1 className="text-4xl font-bold text-pink-500 mb-2" style={{ fontFamily: "'Dancing Script', cursive" }}>
              You Said Yes!
            </h1>
            <p className="text-lg text-gray-700" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              I'm so incredibly happy! Here's what I have planned for us... 💕
            </p>
          </div>

          {/* Date Plan */}
          <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 mb-5 border-2 border-pink-200">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-10 h-1 bg-pink-400"></div>
              <h2 className="text-2xl font-bold text-pink-600" style={{ fontFamily: "'Dancing Script', cursive" }}>
                {datePlan.theme}
              </h2>
              <div className="w-10 h-1 bg-pink-400"></div>
            </div>

            <p className="text-center text-lg text-gray-600 mb-1 font-semibold" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              {datePlan.date}
            </p>
            <p className="text-center text-pink-500 mb-6 italic text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>
              {datePlan.dresscode}
            </p>

            {/* Schedule */}
            <div className="space-y-3">
              {datePlan.schedule.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-4 shadow-md border border-pink-100 hover:shadow-lg transition-shadow"
                  style={{ animation: `slideUp 0.5s ease ${index * 0.08}s both` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                        <span className="text-pink-500 font-bold text-base" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                          {item.time}
                        </span>
                        <span className="text-gray-400 hidden sm:inline">•</span>
                        <span className="text-gray-800 font-semibold text-base" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                          {item.activity}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm" style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 300 }}>
                        {item.details}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div className="mt-5 bg-pink-50 rounded-xl p-3 border border-pink-200">
              <p className="text-gray-700 text-center italic text-sm" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                <span className="font-semibold">Note:</span> {datePlan.notes}
              </p>
            </div>
          </div>

          {/* Calendar button */}
          <div className="flex justify-center mb-4">
            <a
              href="https://calendar.app.google/ihWsYq4GFfBwqmR39"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
              style={{ fontFamily: "'Quicksand', sans-serif" }}
            >
              📅 Save the Date!
            </a>
          </div>

          {/* Bottom */}
          <div className="text-center text-3xl flex justify-center gap-2">
            <Tulip className="w-6 h-10 opacity-60" />
            <span>💞</span>
            <Tulip className="w-6 h-10 opacity-60" />
          </div>
        </div>
      </div>
    );
  }

  // ─── LETTER (after envelope opened) ─────────────────────
  if (envelopeOpened) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 flex items-center justify-center p-4 overflow-hidden">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Quicksand:wght@300;400;500;600&display=swap');
          @keyframes letterSlideIn {
            from { opacity: 0; transform: translateY(-100px) scale(0.8); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}</style>

        {/* Floating tulips */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ animation: 'fadeIn 1s ease' }}>
          <Tulip className="w-12 h-20 absolute top-10 left-8 opacity-20" style={{ animationDelay: '0.2s' }} />
          <Tulip className="w-10 h-16 absolute top-24 right-12 opacity-15" style={{ animationDelay: '0.4s' }} />
          <Tulip className="w-14 h-22 absolute bottom-20 left-16 opacity-20" style={{ animationDelay: '0.6s' }} />
          <Tulip className="w-11 h-18 absolute bottom-12 right-10 opacity-15" style={{ animationDelay: '0.8s' }} />
        </div>

        {/* Letter card */}
        <div 
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 max-w-md w-full border-2 border-pink-300 relative z-10"
          style={{ 
            animation: 'letterSlideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
            background: 'linear-gradient(to bottom, #fff 0%, #fef5f8 100%)'
          }}
        >
          {/* Tulip header */}
          <div className="flex justify-center gap-3 mb-5">
            <Tulip className="w-10 h-16" />
            <Tulip className="w-12 h-20" />
            <Tulip className="w-10 h-16" />
          </div>

          {/* Letter content */}
          <h1 
            className="text-4xl font-bold text-center text-pink-500 mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Divine,
          </h1>

          <div 
            className="space-y-4 text-gray-700 mb-6"
            style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 300, lineHeight: '1.7' }}
          >
            <p className="text-center">
              I've been thinking about you a lot lately, and I'd love to spend Valentine's Day with you.
            </p>
            
            <p className="text-center">
              Would you make me the happiest person and be my Valentine? 💗
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-pink-300 to-transparent"></div>
          </div>

          {/* Buttons */}
          <div className="relative flex flex-col items-center gap-5">
            
            {/* YES button - grows */}
            <button
              onClick={() => setYesClicked(true)}
              style={{
                transform: `scale(${yesScale})`,
                width: `${yesWidth}%`,
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease',
                fontFamily: "'Quicksand', sans-serif"
              }}
              className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg"
            >
              Yes! 🌷
            </button>

            {/* NO button - runs away */}
            <div className="relative h-16 w-full flex justify-center">
              <button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={(e) => { e.preventDefault(); moveNoButton(); }}
                style={{
                  transform: `translate(${noPos.x}px, ${noPos.y}px) scale(${noScale})`,
                  transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  fontFamily: "'Quicksand', sans-serif"
                }}
                className="bg-white hover:bg-pink-50 text-gray-500 font-semibold py-3 px-8 rounded-full text-base border-2 border-pink-200 shadow-md cursor-pointer touch-none"
              >
                No 😢
              </button>
            </div>
          </div>

          {/* Bottom tulips */}
          <div className="flex justify-center gap-3 mt-8">
            <Tulip className="w-6 h-10 opacity-40" />
            <span className="text-pink-400 text-2xl">💞</span>
            <Tulip className="w-6 h-10 opacity-40" />
          </div>
        </div>
      </div>
    );
  }

  // ─── ENVELOPE (initial state) ───────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 to-pink-50 flex items-center justify-center p-4 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Quicksand:wght@300;400;500;600&display=swap');
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>

      {/* Floating tulips in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Tulip className="w-16 h-24 absolute top-12 left-6 opacity-10" style={{ animation: 'float 4s ease-in-out infinite' }} />
        <Tulip className="w-14 h-22 absolute top-28 right-8 opacity-10" style={{ animation: 'float 5s ease-in-out infinite 0.5s' }} />
        <Tulip className="w-18 h-28 absolute bottom-24 left-12 opacity-10" style={{ animation: 'float 4.5s ease-in-out infinite 1s' }} />
        <Tulip className="w-15 h-24 absolute bottom-16 right-16 opacity-10" style={{ animation: 'float 5.5s ease-in-out infinite 1.5s' }} />
      </div>

      {/* Main envelope */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Instruction text */}
        <p 
          className="text-pink-400 text-sm mb-6 animate-pulse"
          style={{ fontFamily: "'Quicksand', sans-serif", fontWeight: 500 }}
        >
          Tap to open 💌
        </p>

        {/* Envelope */}
        <button
          onClick={() => setEnvelopeOpened(true)}
          className="relative cursor-pointer focus:outline-none transform hover:scale-105 transition-transform duration-300"
          style={{ animation: 'pulse 2s ease-in-out infinite' }}
        >
          <svg width="280" height="200" viewBox="0 0 280 200" className="drop-shadow-2xl">
            {/* Envelope body */}
            <rect x="20" y="50" width="240" height="140" fill="#fef5f8" stroke="#f5a0bf" strokeWidth="2" rx="4"/>
            
            {/* Envelope flap (closed) */}
            <path 
              d="M 20 50 L 140 130 L 260 50" 
              fill="#fcc5d8" 
              stroke="#f5a0bf" 
              strokeWidth="2"
            />
            <path 
              d="M 20 50 L 140 130 L 260 50 L 260 50 L 20 50" 
              fill="#f5a0bf" 
              stroke="#f5a0bf" 
              strokeWidth="2"
            />
            
            {/* Decorative tulips on envelope */}
            <g transform="translate(90, 120)">
              <path d="M20 15 Q18 20 19 28" stroke="#7cb88a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <ellipse cx="12" cy="8" rx="3.5" ry="7" fill="#f5a0bf" opacity="0.8" transform="rotate(-18 12 8)" />
              <ellipse cx="28" cy="8" rx="3.5" ry="7" fill="#f5a0bf" opacity="0.8" transform="rotate(18 28 8)" />
              <ellipse cx="20" cy="7" rx="4" ry="8" fill="#fcc5d8" />
            </g>
            <g transform="translate(140, 120)">
              <path d="M20 15 Q18 20 19 28" stroke="#7cb88a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <ellipse cx="12" cy="8" rx="3.5" ry="7" fill="#f5a0bf" opacity="0.8" transform="rotate(-18 12 8)" />
              <ellipse cx="28" cy="8" rx="3.5" ry="7" fill="#f5a0bf" opacity="0.8" transform="rotate(18 28 8)" />
              <ellipse cx="20" cy="7" rx="4" ry="8" fill="#fcc5d8" />
            </g>

            {/* "For Divine" text */}
            <text 
              x="140" 
              y="105" 
              textAnchor="middle" 
              fill="#c2185b" 
              fontSize="22" 
              fontFamily="'Dancing Script', cursive"
              fontWeight="700"
            >
              For Divine
            </text>
            
            {/* Heart seal */}
            <text x="135" y="65" fontSize="24">💗</text>
          </svg>
        </button>

        {/* Bottom text */}
        <p 
          className="text-pink-500 text-lg mt-6 text-center px-4"
          style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
        >
          A special invitation awaits...
        </p>
      </div>
    </div>
  );
}

export default App