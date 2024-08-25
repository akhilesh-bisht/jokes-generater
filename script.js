const jokes = [
  {
    joke: "Why don't skeletons fight each other? They don't have the guts.",
    emoji: "💀",
    hindi:
      "हड्डियों वाले एक-दूसरे से क्यों नहीं लड़ते? उनके पास हिम्मत नहीं होती।",
    rating: 4,
  },
  {
    joke: "What do you call fake spaghetti? An impasta!",
    emoji: "🍝",
    hindi: "नकली स्पैगेटी को क्या कहते हैं? एक इम्पास्ता!",
    rating: 5,
  },
  {
    joke: "Why don't eggs tell jokes? They'd crack each other up.",
    emoji: "🥚",
    hindi: "अंडे चुटकुले क्यों नहीं सुनाते? क्योंकि वे एक-दूसरे को हंसा देंगे।",
    rating: 4,
  },
  {
    joke: "Why did the bicycle fall over? Because it was two-tired!",
    emoji: "🚲",
    hindi: "साइकिल गिर क्यों गई? क्योंकि वह दो-थकी हुई थी!",
    rating: 3,
  },
  {
    joke: "How does a penguin build its house? Igloos it together.",
    emoji: "🐧",
    hindi: "पेंग्विन अपना घर कैसे बनाता है? वह इसे एक साथ जोड़ता है।",
    rating: 4,
  },
  {
    joke: "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    emoji: "⏳",
    hindi:
      "समानांतर रेखाओं में बहुत कुछ समान है। अफसोस की बात है कि वे कभी नहीं मिलेंगी।",
    rating: 3,
  },
  {
    joke: "Why do cows wear bells? Because their horns don't work.",
    emoji: "🐄",
    hindi: "गायें घंटियाँ क्यों पहनती हैं? क्योंकि उनके सींग काम नहीं करते।",
    rating: 4,
  },
  {
    joke: "I told my wife she should embrace her mistakes. She gave me a hug.",
    emoji: "🤗",
    hindi:
      "मैंने अपनी पत्नी से कहा कि उसे अपनी गलतियों को गले लगाना चाहिए। उसने मुझे गले लगा लिया।",
    rating: 5,
  },
  {
    joke: "I used to play piano by ear, but now I use my hands.",
    emoji: "🎹",
    hindi:
      "मैं पहले पियानो कान से बजाता था, लेकिन अब मैं अपने हाथों का उपयोग करता हूँ।",
    rating: 4,
  },
  {
    joke: "I told my computer I needed a break and now it won’t stop sending me Kit-Kats.",
    emoji: "🍫",
    hindi:
      "मैंने अपने कंप्यूटर से कहा कि मुझे ब्रेक की जरूरत है और अब यह मुझे किट-कैट भेजना बंद नहीं कर रहा है।",
    rating: 5,
  },
  {
    joke: "Why don't some couples go to the gym? Because some relationships don't work out.",
    emoji: "🏋️",
    hindi:
      "कुछ जोड़े जिम में क्यों नहीं जाते? क्योंकि कुछ रिश्ते काम नहीं करते।",
    rating: 4,
  },
  {
    joke: "Why can't you give Elsa a balloon? Because she will let it go.",
    emoji: "🎈",
    hindi: "आप एल्सा को गुब्बारा क्यों नहीं दे सकते? क्योंकि वह इसे छोड़ देगी।",
    rating: 4,
  },
  {
    joke: "What do you call a bear with no teeth? A gummy bear.",
    emoji: "🧸",
    hindi: "बिना दांतों वाले भालू को क्या कहते हैं? एक गमी बियर।",
    rating: 4,
  },
  {
    joke: "How do you organize a space party? You planet.",
    emoji: "🪐",
    hindi:
      "आप एक अंतरिक्ष पार्टी को कैसे व्यवस्थित करते हैं? आप इसे प्लैनेट करते हैं।",
    rating: 4,
  },
  {
    joke: "Why did the golfer bring an extra pair of pants? In case he got a hole in one.",
    emoji: "🏌️‍♂️",
    hindi:
      "गोल्फर ने अतिरिक्त पैंट्स क्यों लाईं? अगर उसे एक हॉल में होल मिल जाए।",
    rating: 4,
  },
  {
    joke: "Why was the math book sad? It had too many problems.",
    emoji: "📚",
    hindi: "गणित की किताब उदास क्यों थी? इसमें बहुत सारी समस्याएँ थीं।",
    rating: 5,
  },
  {
    joke: "Why did the scarecrow win an award? Because he was outstanding in his field.",
    emoji: "🌾",
    hindi:
      "डरावना आदमी को पुरस्कार क्यों मिला? क्योंकि वह अपने खेत में अद्वितीय था।",
    rating: 4,
  },
  {
    joke: "Why don't you ever see elephants hiding in trees? Because they're so good at it.",
    emoji: "🐘",
    hindi:
      "आप कभी भी हाथियों को पेड़ों में छिपते हुए क्यों नहीं देखते? क्योंकि वे इसमें बहुत अच्छे होते हैं।",
    rating: 4,
  },
  {
    joke: "Why do chicken coops only have two doors? Because if they had four, they’d be chicken sedans.",
    emoji: "🐔",
    hindi:
      "चिकन कूप्स में केवल दो दरवाजे क्यों होते हैं? क्योंकि अगर उनमें चार होते, तो वे चिकन सेडान होते।",
    rating: 3,
  },
  {
    joke: "Why did the tomato turn red? Because it saw the salad dressing.",
    emoji: "🍅",
    hindi: "टमाटर लाल क्यों हुआ? क्योंकि उसने सलाद ड्रेसिंग देखी।",
    rating: 4,
  },
  {
    joke: "What do you call cheese that isn't yours? Nacho cheese.",
    emoji: "🧀",
    hindi: "आप उस चीज़ को क्या कहते हैं जो आपकी नहीं है? नाचो चीज़।",
    rating: 5,
  },
  {
    joke: "Why was the broom late? It swept in.",
    emoji: "🧹",
    hindi: "झाड़ू क्यों लेट था? उसने झाड़ू लगाया।",
    rating: 3,
  },
];
const jokeBtn = document.getElementById("jokeBtn");
const jokeEnglishElement = document.getElementById("joke-english");
const jokeHindiElement = document.getElementById("joke-hindi");
const emojiElement = document.getElementById("emoji");
const ratingElement = document.getElementById("rating");

jokeBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  const randomJoke = jokes[randomIndex];
  jokeEnglishElement.textContent = randomJoke.joke;
  jokeHindiElement.textContent = randomJoke.hindi;
  emojiElement.textContent = randomJoke.emoji;
  ratingElement.textContent = `Rating: ${randomJoke.rating} stars`;
});
