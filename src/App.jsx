import { useState } from 'react'

// ─── PUT YOUR GOOGLE CALENDAR LINK HERE ───
const GOOGLE_CALENDAR_LINK = "https://calendar.google.com/calendar/your-link-here";

function App() {
  const [yesClicked, setYesClicked] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [noScale, setNoScale] = useState(1);
  const [buttonTextIndex, setButtonTextIndex] = useState(0);

  const buttonTexts = [
    "Yes"
  ];

  // Yes button scale: starts at 1, grows by 0.18 each No click, caps at 2.2
  const yesScale = Math.min(1 + noClickCount * 0.18, 2.2);
  // Yes button width: starts at 60%, grows by 5% each No click, caps at 100%
  const yesWidth = Math.min(100, 60 + noClickCount * 5);

  const moveNoButton = () => {
    setNoPos({
      x: (Math.random() - 0.5) * 280,
      y: (Math.random() - 0.5) * 280,
    });
    setNoScale(prev => prev * 0.72);
    setNoClickCount(prev => prev + 1);
  };

  const cycleButtonText = () => {
    setButtonTextIndex(prev => (prev + 1) % buttonTexts.length);
  };

  const datePlan = {
    theme: "White || Navy Blue",
    date: "February 14, 2026",
    schedule: [
      { time: "10:00 AM", activity: "Meet Up", details: "i'll come get you, just bring yourself", icon: "🕘" },
      { time: "11:30 AM", activity: "Manila Ocean Park it is!!", details: "Enjoy the ambiance and culture", icon: "🐟" },
      { time: "1:00 PM", activity: "Lunch Date", details: "A nice place with a beautiful ambiance", icon: "🍽️" },
      { time: "2:00 PM", activity: "Continue Strolling", details: "...", icon: "🎨" },
      { time: "4:00 PM", activity: "Digital Art Museum", details: "Find a perfect spot to watch the sunset together", icon: "🖼" },
      { time: "6:00 PM", activity: "Dinner", details: "Dinner at a near sight location", icon: "🍽️" },
      { time: "7:00 PM", activity: "Coffee Timee", details: "Time for our coffee time 🎁", icon: "✨" }
    ],
    dresscode: "Smart casual with white || navy blue color scheme",
    notes: "The schedule is flexible - we can adjust based on what you'd enjoy most! The most important thing is spending the day together. 💙"
  };

  // ─── ACCEPTED SCREEN ────────────────────────────────────
  if (yesClicked) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-4xl w-full border-2 border-pink-200">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-8xl mb-4 animate-bounce">💗</div>
            <h1 className="text-5xl font-bold text-pink-500 mb-3">You Said Yes!</h1>
            <p className="text-2xl text-gray-700">
              I'm so incredibly happy! Here's what I have planned for us... 💕
            </p>
          </div>

          {/* Date Plan */}
          <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 mb-6 border-2 border-pink-200">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-1 bg-pink-400"></div>
              <h2 className="text-3xl font-bold text-pink-600">{datePlan.theme}</h2>
              <div className="w-12 h-1 bg-pink-400"></div>
            </div>

            <p className="text-center text-xl text-gray-600 mb-2 font-semibold">{datePlan.date}</p>
            <p className="text-center text-pink-500 mb-8 italic">{datePlan.dresscode}</p>

            {/* Schedule */}
            <div className="space-y-4">
              {datePlan.schedule.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-md border border-pink-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl flex-shrink-0">{item.icon}</div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-pink-500 font-bold text-lg">{item.time}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-800 font-semibold text-lg">{item.activity}</span>
                      </div>
                      <p className="text-gray-600">{item.details}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Notes */}
            <div className="mt-6 bg-pink-50 rounded-xl p-4 border border-pink-200">
              <p className="text-gray-700 text-center italic">
                <span className="font-semibold">Note:</span> {datePlan.notes}
              </p>
            </div>
          </div>

          {/* Google Calendar + Copy buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={'https://calendar.app.google/ihWsYq4GFfBwqmR39'}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
            >
              📅 Save the Date!
            </a>

           
          </div>

          {/* Bottom */}
          <div className="text-center mt-8 text-4xl">
            <span>🎉✨💖✨🎉</span>
          </div>
        </div>
      </div>
    );
  }

  // ─── PROPOSAL SCREEN ────────────────────────────────────
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center justify-center p-4 relative overflow-hidden">

      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="text-pink-200 text-4xl absolute top-10 left-10 animate-pulse">💕</div>
        <div className="text-pink-200 text-3xl absolute top-20 right-20 animate-pulse" style={{ animationDelay: '0.3s' }}>💗</div>
        <div className="text-pink-200 text-5xl absolute bottom-20 left-20 animate-pulse" style={{ animationDelay: '0.6s' }}>💖</div>
        <div className="text-pink-200 text-3xl absolute bottom-10 right-10 animate-pulse">💝</div>
      </div>

      {/* Main card */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-lg w-full border-2 border-pink-200 relative z-10">

        {/* Heart */}
        <div className="text-center mb-6">
          <span className="text-7xl animate-pulse">💝</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-pink-400 mb-3 font-serif">
          Will you be my Valentine?
        </h1>

        {/* Subheading */}
        <p className="text-lg text-center text-gray-600 mb-8 italic">
          Will you go on a date with me? 💕
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-pink-400 mx-auto mb-8"></div>

        {/* Message */}
        <div className="bg-pink-50 rounded-2xl p-6 mb-8 border border-pink-100">
          <p className="text-center text-gray-700 leading-relaxed">
            I've been thinking about you a lot lately, and I'd love to spend
            Valentine's Day with you. Would you make me the happiest person
            and say yes? 💗
          </p>
        </div>

        {/* Buttons */}
        <div className="relative flex flex-col items-center gap-6">

          {/* YES — grows each time No is clicked */}
          <button
            onClick={() => setYesClicked(true)}
            onMouseEnter={cycleButtonText}
            style={{
              transform: `scale(${yesScale})`,
              width: `${yesWidth}%`,
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.4s ease',
            }}
            className="bg-gradient-to-r from-pink-400 to-pink-500 hover:from-pink-500 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg animate-pulse cursor-pointer"
          >
            {buttonTexts[buttonTextIndex]}
          </button>

          {/* NO — runs away and shrinks */}
          <div className="relative h-16 w-full flex justify-center">
            <button
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              onClick={(e) => { e.preventDefault(); moveNoButton(); }}
              style={{
                transform: `translate(${noPos.x}px, ${noPos.y}px) scale(${noScale})`,
                transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
              className="bg-white hover:bg-gray-50 text-gray-600 font-bold py-3 px-8 rounded-full text-lg border-2 border-gray-300 shadow-md cursor-pointer touch-none"
            >
              No 😢
            </button>
          </div>
        </div>

        {/* Bottom hearts */}
        <div className="text-center mt-8 text-3xl space-x-2">
          <span className="inline-block animate-bounce">💗</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.15s' }}>💕</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>💖</span>
        </div>
      </div>
    </div>
  )
}

export default App