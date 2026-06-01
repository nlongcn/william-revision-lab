const frenchFoods = [
  { fr: "une pomme", en: "an apple", action: "eat", fact: "Pomme also appears in pomme de terre, which means potato." },
  { fr: "du pain", en: "bread", action: "eat", fact: "A baguette is a type of French bread, but pain is the general word." },
  { fr: "du fromage", en: "cheese", action: "eat", fact: "France is famous for regional cheeses, so fromage appears often in menus." },
  { fr: "du poulet", en: "chicken", action: "eat", fact: "Poulet is food vocabulary; poule is a hen." },
  { fr: "du poisson", en: "fish", action: "eat", fact: "Poisson has a double s. Poison with one s is a different word in English." },
  { fr: "de la salade", en: "salad", action: "eat", fact: "La salade uses de la before a feminine food." },
  { fr: "des frites", en: "chips / fries", action: "eat", fact: "Frites is plural, so it uses des in a positive sentence." },
  { fr: "un yaourt", en: "a yoghurt", action: "eat", fact: "Yaourt can also be written yogourt in some French-speaking places." },
  { fr: "du chocolat", en: "chocolate", action: "eat", fact: "Chocolat is masculine, so you normally see du chocolat." },
  { fr: "des fruits", en: "fruit", action: "eat", fact: "Fruit is often plural in healthy eating phrases: manger des fruits." },
  { fr: "des légumes", en: "vegetables", action: "eat", fact: "The accent in légumes helps signal the French pronunciation." },
  { fr: "des bonbons", en: "sweets", action: "eat", fact: "Bonbon is an easy one to remember because the repeated sound feels like a treat." },
  { fr: "de l'eau", en: "water", action: "drink", fact: "Eau is pronounced like a single sound, even though it has three letters." },
  { fr: "du jus d'orange", en: "orange juice", action: "drink", fact: "Jus d'orange uses d' because orange begins with a vowel sound." },
  { fr: "du lait", en: "milk", action: "drink", fact: "Lait rhymes roughly with the French word mais." },
  { fr: "du thé", en: "tea", action: "drink", fact: "The accent on thé marks it as the drink, not the English word the." },
  { fr: "du café", en: "coffee", action: "drink", fact: "Café can mean coffee or a cafe, depending on the sentence." }
];

const frenchSports = [
  { fr: "le foot", phrase: "jouer au foot", en: "football", fact: "In everyday French, football is often shortened to foot." },
  { fr: "le tennis", phrase: "jouer au tennis", en: "tennis", fact: "Tennis is one of the sport words that looks almost identical in French and English." },
  { fr: "le rugby", phrase: "jouer au rugby", en: "rugby", fact: "Rugby is popular in the south-west of France." },
  { fr: "le basket", phrase: "jouer au basket", en: "basketball", fact: "Basket is the common short French word for basketball." },
  { fr: "la natation", phrase: "faire de la natation", en: "swimming", fact: "Natation is the sport; nager is the verb to swim." },
  { fr: "le vélo", phrase: "faire du vélo", en: "cycling", fact: "Vélo is short for bicyclette and is used all the time." },
  { fr: "le judo", phrase: "faire du judo", en: "judo", fact: "Judo keeps the same spelling in French." },
  { fr: "l'athlétisme", phrase: "faire de l'athlétisme", en: "athletics", fact: "Use de l' before a vowel sound, as in de l'athlétisme." },
  { fr: "la danse", phrase: "faire de la danse", en: "dance", fact: "Danse looks like dance, but the final e is silent." }
];

const healthyPhrases = [
  { fr: "manger sainement", en: "to eat healthily", sentence: "Je vais manger sainement.", fact: "Sainement comes from sain, meaning healthy." },
  { fr: "boire beaucoup d'eau", en: "to drink lots of water", sentence: "Je vais boire beaucoup d'eau.", fact: "Beaucoup de changes to beaucoup d' before eau." },
  { fr: "faire du sport", en: "to do sport", sentence: "Je vais faire du sport.", fact: "French often says faire du sport where English says do sport or exercise." },
  { fr: "dormir huit heures", en: "to sleep eight hours", sentence: "Je vais dormir huit heures.", fact: "Dormir is the infinitive; je dors means I sleep." },
  { fr: "prendre le petit déjeuner", en: "to have breakfast", sentence: "Je vais prendre le petit déjeuner.", fact: "French uses prendre for having a meal." },
  { fr: "aller à pied au collège", en: "to walk to school", sentence: "Je vais aller à pied au collège.", fact: "À pied literally means on foot." },
  { fr: "éviter les bonbons", en: "to avoid sweets", sentence: "Je vais éviter les bonbons.", fact: "Éviter is useful for healthy lifestyle plans." },
  { fr: "manger plus de légumes", en: "to eat more vegetables", sentence: "Je vais manger plus de légumes.", fact: "Plus de means more of when talking about amounts." }
];

const frenchVerbs = [
  { inf: "manger", en: "to eat", future: "je vais manger", example: "Je vais manger des fruits.", fact: "After je vais, manger stays in the infinitive." },
  { inf: "boire", en: "to drink", future: "je vais boire", example: "Je vais boire de l'eau.", fact: "Boire is irregular in the present, but the infinitive is easy in je vais boire." },
  { inf: "faire", en: "to do / to make", future: "je vais faire", example: "Je vais faire du sport.", fact: "Faire is the verb you need for many sports and activities." },
  { inf: "prendre", en: "to take / to have", future: "je vais prendre", example: "Je vais prendre le petit déjeuner.", fact: "Prendre often means to have when talking about meals or drinks." },
  { inf: "dormir", en: "to sleep", future: "je vais dormir", example: "Je vais dormir huit heures.", fact: "Dormir is useful for healthy lifestyle writing." },
  { inf: "jouer", en: "to play", future: "je vais jouer", example: "Je vais jouer au foot.", fact: "Use jouer for games and many team sports." },
  { inf: "aller", en: "to go", future: "je vais aller", example: "Je vais aller au parc.", fact: "Je vais aller literally means I am going to go." }
];

const frenchTopics = [
  {
    id: "food-drink",
    title: "Food and drink vocabulary",
    tag: "Manger ou boire",
    explain:
      "Learn common food and drink words, then match them with je mange for eating or je bois for drinking.",
    remember: [
      "Je mange means I eat.",
      "Je bois means I drink.",
      "Du, de la, de l' and des often mean some or any in food sentences."
    ],
    fact: "French menus often group food words by course: entrée, plat principal, dessert.",
    visual: {
      type: "vocab",
      label: "Vocabulary board",
      title: "Sort it by action",
      text: "If it is food, practise je mange. If it is drink, practise je bois.",
      items: frenchFoods.slice(0, 12),
      rule: "Quick test move: ask yourself, can I eat it or drink it? Then choose je mange or je bois."
    },
    example: {
      question: "How would you say: I drink water and I eat bread?",
      steps: ["Water is de l'eau, so use je bois.", "Bread is du pain, so use je mange.", "Put both together with et."],
      answer: "Je bois de l'eau et je mange du pain."
    },
    questions: [
      { q: "What does de l'eau mean?", a: "water", fact: "Use de l' because eau starts with a vowel sound." },
      { q: "Translate: Je mange une pomme.", a: "I eat an apple.", fact: "Pomme also appears in pomme de terre, meaning potato." },
      { q: "How do you say: I drink orange juice?", a: "Je bois du jus d'orange.", fact: "Jus d'orange uses d' before orange." },
      { q: "Which verb fits: Je ___ du fromage?", a: "Je mange du fromage.", fact: "Fromage is cheese, so it is eaten." }
    ],
    more: makeFoodQuestions
  },
  {
    id: "sports",
    title: "Names of sports",
    tag: "Jouer ou faire",
    explain:
      "Some sports use jouer au, especially games. Other activities use faire du, faire de la or faire de l'.",
    remember: [
      "Jouer au means to play a masculine sport or game.",
      "Faire du means to do a masculine activity.",
      "Faire de la is feminine; faire de l' is used before a vowel sound."
    ],
    fact: "Au is a contraction: à + le becomes au.",
    visual: {
      type: "phrases",
      label: "Sports board",
      title: "Spot the pattern",
      text: "Ball games often use jouer au. Activities often use faire du/de la/de l'.",
      items: frenchSports,
      rule: "Do not translate word by word. Learn the full chunk: jouer au foot, faire de la natation."
    },
    example: {
      question: "How would you say: I am going to play football and do swimming?",
      steps: ["Play football is jouer au foot.", "Swimming is faire de la natation.", "Use je vais before each infinitive phrase."],
      answer: "Je vais jouer au foot et je vais faire de la natation."
    },
    questions: [
      { q: "What sport is le foot?", a: "football", fact: "French speakers often say foot for football." },
      { q: "Translate: faire de la natation.", a: "to do swimming / to swim as a sport", fact: "Natation is the noun for swimming." },
      { q: "How do you say: I play tennis?", a: "Je joue au tennis.", fact: "Tennis uses au because it is le tennis." },
      { q: "Which phrase means cycling?", a: "faire du vélo", fact: "Vélo is the everyday word for bike or cycling." }
    ],
    more: makeSportQuestions
  },
  {
    id: "healthy-lifestyle",
    title: "Keeping fit and healthy",
    tag: "Mode de vie sain",
    explain:
      "Healthy lifestyle writing is about habits: food, drink, sleep, sport, and small changes you are going to make.",
    remember: [
      "Sain means healthy.",
      "Plus de means more of.",
      "Use je vais + infinitive to write a plan for the future."
    ],
    fact: "Le petit déjeuner literally means the little lunch, but it means breakfast.",
    visual: {
      type: "phrases",
      label: "Healthy phrases",
      title: "Ready-made sentence chunks",
      text: "These chunks are useful for reading and for your own future-tense writing.",
      items: healthyPhrases,
      rule: "Strong answer pattern: Aujourd'hui..., mais la semaine prochaine, je vais..."
    },
    example: {
      question: "Write a sentence saying you are going to eat healthily and sleep eight hours.",
      steps: ["I am going to is je vais.", "Use two infinitives: manger and dormir.", "Join the two ideas with et."],
      answer: "Je vais manger sainement et je vais dormir huit heures."
    },
    questions: [
      { q: "What does manger sainement mean?", a: "to eat healthily", fact: "Sainement is an adverb, like healthily." },
      { q: "Translate: Je vais boire beaucoup d'eau.", a: "I am going to drink lots of water.", fact: "Beaucoup d'eau uses d' before eau." },
      { q: "How do you say: I am going to do sport?", a: "Je vais faire du sport.", fact: "Faire du sport is a key French fitness phrase." },
      { q: "What does prendre le petit déjeuner mean?", a: "to have breakfast", fact: "Prendre can mean to take or to have." }
    ],
    more: makeHealthyQuestions
  },
  {
    id: "je-mange-je-bois",
    title: "Using je mange and je bois",
    tag: "Present tense",
    explain:
      "Je mange and je bois are present-tense phrases. Use them for what you eat or drink now, usually, or in a simple statement.",
    remember: [
      "Je mange = I eat / I am eating.",
      "Je bois = I drink / I am drinking.",
      "French usually keeps the food word with du, de la, de l' or des."
    ],
    fact: "English has I eat and I am eating; French can use je mange for both.",
    visual: {
      type: "pattern",
      label: "Grammar pattern",
      title: "Pick the correct verb",
      text: "The food or drink decides the verb.",
      items: [
        { left: "Je mange", right: "du pain", note: "I eat bread" },
        { left: "Je mange", right: "des légumes", note: "I eat vegetables" },
        { left: "Je bois", right: "de l'eau", note: "I drink water" },
        { left: "Je bois", right: "du lait", note: "I drink milk" }
      ],
      rule: "Do not use je bois with food or je mange with drinks."
    },
    example: {
      question: "Choose the right phrase: I drink milk.",
      steps: ["Milk is a drink, so use je bois.", "Milk is du lait.", "Put them together."],
      answer: "Je bois du lait."
    },
    questions: [
      { q: "Translate: Je bois du café.", a: "I drink coffee.", fact: "Café can mean coffee or a cafe." },
      { q: "How do you say: I eat vegetables?", a: "Je mange des légumes.", fact: "Légumes is plural, so des is used in a positive sentence." },
      { q: "Which is correct: Je mange du lait or Je bois du lait?", a: "Je bois du lait.", fact: "Lait means milk, so it uses boire." },
      { q: "Translate: Je mange du poulet.", a: "I eat chicken.", fact: "Poulet is a common school food vocabulary word." }
    ],
    more: makeMangeBoisQuestions
  },
  {
    id: "negative-pas-de",
    title: "Negative: je ne mange pas de",
    tag: "Not eating or drinking",
    explain:
      "In a negative food or drink sentence, du, de la and des usually become de. Before a vowel, de becomes d'.",
    remember: [
      "Je ne mange pas de pain = I do not eat bread.",
      "Je ne bois pas de lait = I do not drink milk.",
      "Je ne bois pas d'eau = I do not drink water."
    ],
    fact: "The ne and pas wrap around the verb: ne mange pas, ne bois pas.",
    visual: {
      type: "pattern",
      label: "Negative pattern",
      title: "The article changes",
      text: "After pas, use de or d' for food and drink.",
      items: [
        { left: "Je mange du pain", right: "Je ne mange pas de pain", note: "du becomes de" },
        { left: "Je bois du lait", right: "Je ne bois pas de lait", note: "du becomes de" },
        { left: "Je mange des frites", right: "Je ne mange pas de frites", note: "des becomes de" },
        { left: "Je bois de l'eau", right: "Je ne bois pas d'eau", note: "de becomes d' before eau" }
      ],
      rule: "Test trap: the negative is not pas du pain. It is pas de pain."
    },
    example: {
      question: "Make this negative: Je mange du chocolat.",
      steps: ["Put ne before mange.", "Put pas after mange.", "Change du chocolat to de chocolat."],
      answer: "Je ne mange pas de chocolat."
    },
    questions: [
      { q: "Make negative: Je mange du pain.", a: "Je ne mange pas de pain.", fact: "After pas, du normally becomes de." },
      { q: "Make negative: Je bois de l'eau.", a: "Je ne bois pas d'eau.", fact: "Use d' before eau because it starts with a vowel sound." },
      { q: "Translate: Je ne mange pas de bonbons.", a: "I do not eat sweets.", fact: "Bonbons is plural, but the negative still uses de." },
      { q: "What wraps around the verb in a normal negative?", a: "ne ... pas", fact: "In school writing, keep both ne and pas." }
    ],
    more: makePasDeQuestions
  },
  {
    id: "negative-jamais-de",
    title: "Negative never: je ne mange jamais de",
    tag: "Never",
    explain:
      "Jamais means never. It replaces pas, but the sentence still wraps the verb with ne ... jamais.",
    remember: [
      "Je ne mange jamais de viande = I never eat meat.",
      "Je ne bois jamais de café = I never drink coffee.",
      "Use d' before a vowel: Je ne bois jamais d'eau."
    ],
    fact: "Jamais can look like it means ever in some contexts, but in ne ... jamais it means never.",
    visual: {
      type: "pattern",
      label: "Never pattern",
      title: "Swap pas for jamais",
      text: "Use the same de/d' rule after jamais.",
      items: [
        { left: "Je mange du poisson", right: "Je ne mange jamais de poisson", note: "I never eat fish" },
        { left: "Je bois du café", right: "Je ne bois jamais de café", note: "I never drink coffee" },
        { left: "Je mange des bonbons", right: "Je ne mange jamais de bonbons", note: "I never eat sweets" },
        { left: "Je bois de l'eau", right: "Je ne bois jamais d'eau", note: "I never drink water" }
      ],
      rule: "Never = ne ... jamais. Do not write ne ... pas jamais."
    },
    example: {
      question: "How would you say: I never drink coffee?",
      steps: ["I drink coffee is je bois du café.", "Never wraps the verb: je ne bois jamais.", "After jamais, use de café."],
      answer: "Je ne bois jamais de café."
    },
    questions: [
      { q: "Translate: Je ne mange jamais de poisson.", a: "I never eat fish.", fact: "Poisson is fish; poison is not the same word." },
      { q: "How do you say: I never drink tea?", a: "Je ne bois jamais de thé.", fact: "Thé has an accent, unlike the English word the." },
      { q: "Make this never: Je mange des frites.", a: "Je ne mange jamais de frites.", fact: "Des becomes de after jamais." },
      { q: "Which word means never?", a: "jamais", fact: "In ne ... jamais, jamais replaces pas." }
    ],
    more: makeJamaisQuestions
  },
  {
    id: "future-je-vais",
    title: "Future tense: je vais + infinitive",
    tag: "Going to",
    explain:
      "To say what you are going to do, use je vais followed by an infinitive. The infinitive is the to-form, such as manger, boire, jouer or dormir.",
    remember: [
      "Je vais manger = I am going to eat.",
      "Je vais jouer = I am going to play.",
      "Do not conjugate the second verb after je vais."
    ],
    fact: "This is called the near future because it is often used for plans.",
    visual: {
      type: "future",
      label: "Future builder",
      title: "Build future sentences",
      text: "Keep je vais fixed, then add the infinitive action.",
      items: frenchVerbs,
      rule: "Formula: je vais + infinitive + extra detail."
    },
    example: {
      question: "Write: I am going to eat fruit and play football.",
      steps: ["I am going to eat is je vais manger.", "Fruit is des fruits.", "I am going to play football is je vais jouer au foot."],
      answer: "Je vais manger des fruits et je vais jouer au foot."
    },
    questions: [
      { q: "Translate: Je vais boire de l'eau.", a: "I am going to drink water.", fact: "Boire stays as the infinitive after je vais." },
      { q: "How do you say: I am going to sleep eight hours?", a: "Je vais dormir huit heures.", fact: "Dormir is the infinitive to sleep." },
      { q: "What is wrong with Je vais mange des fruits?", a: "Mange should be manger: Je vais manger des fruits.", fact: "After je vais, the second verb is infinitive." },
      { q: "Translate: Je vais faire du sport.", a: "I am going to do sport.", fact: "Faire du sport is a key fitness phrase." }
    ],
    more: makeFutureQuestions
  },
  {
    id: "key-verbs",
    title: "Key verbs and meanings",
    tag: "Infinitives",
    explain:
      "These are the verbs you need to recognise and use after je vais. Learn the meaning and one useful future sentence for each.",
    remember: [
      "Manger, boire, faire, prendre, dormir, jouer and aller are infinitives.",
      "Infinitives often translate as to eat, to drink, to do, and so on.",
      "Je vais + infinitive turns them into future plans."
    ],
    fact: "Aller is both a useful verb and part of the future pattern: je vais means I am going.",
    visual: {
      type: "verbs",
      label: "Verb deck",
      title: "Meaning plus future phrase",
      text: "Learn each verb as a pair: infinitive meaning and je vais phrase.",
      items: frenchVerbs,
      rule: "Revision shortcut: cover the English, say the meaning, then say the je vais version."
    },
    example: {
      question: "Use prendre in the future tense to say: I am going to have breakfast.",
      steps: ["Prendre means to take or to have.", "Future pattern is je vais prendre.", "Breakfast is le petit déjeuner."],
      answer: "Je vais prendre le petit déjeuner."
    },
    questions: [
      { q: "What does manger mean?", a: "to eat", fact: "Je vais manger means I am going to eat." },
      { q: "What does boire mean?", a: "to drink", fact: "Boire gives je vais boire in the future." },
      { q: "How do you say: I am going to play?", a: "Je vais jouer.", fact: "Jouer is also used for instruments and games." },
      { q: "What does aller mean?", a: "to go", fact: "Je vais aller means I am going to go." }
    ],
    more: makeVerbQuestions
  },
  {
    id: "reading-plans",
    title: "Understanding lifestyle plans",
    tag: "Reading practice",
    explain:
      "For reading questions, look for time phrases, je vais plans, negatives, and healthy lifestyle vocabulary.",
    remember: [
      "Aujourd'hui means today.",
      "La semaine prochaine means next week.",
      "Je vais tells you the person is talking about a plan."
    ],
    fact: "French reading marks are often hidden in tiny words like mais, plus, pas and jamais.",
    visual: {
      type: "reading",
      label: "Test-style text",
      title: "Read for plans and changes",
      text: "Cette semaine, je mange trop de chocolat et je ne fais pas assez de sport. La semaine prochaine, je vais changer mes habitudes. Je vais manger plus de fruits et je vais boire plus d'eau. Je vais jouer au foot le samedi et je vais dormir huit heures. Je ne vais pas manger de bonbons pendant la semaine.",
      rule: "Reading move: underline je vais, then translate the infinitive after it."
    },
    example: {
      question: "What two healthy changes is the writer going to make?",
      steps: ["Find je vais in the text.", "Je vais manger plus de fruits means I am going to eat more fruit.", "Je vais boire plus d'eau means I am going to drink more water."],
      answer: "They are going to eat more fruit and drink more water."
    },
    questions: [
      { q: "In the text, what does the writer eat too much of this week?", a: "chocolate", fact: "Trop de means too much or too many." },
      { q: "What sport is the writer going to play on Saturday?", a: "football", fact: "Le samedi can mean on Saturdays or on Saturday, depending on context." },
      { q: "How many hours is the writer going to sleep?", a: "eight hours", fact: "Huit starts with a silent h sound in this phrase." },
      { q: "What are they not going to eat during the week?", a: "sweets", fact: "Je ne vais pas manger de bonbons keeps de after the negative." }
    ],
    more: makeReadingQuestions
  }
];

const frenchState = {
  activeTopicId: frenchTopics[0].id,
  view: "single",
  search: "",
  expandedAll: false,
  answersRevealed: 0
};

const frenchNav = document.querySelector("#frenchNav");
const frenchContainer = document.querySelector("#frenchContainer");
const frenchSearch = document.querySelector("#frenchSearch");
const frenchTopicsCount = document.querySelector("#frenchTopicsCount");
const frenchAnsweredCount = document.querySelector("#frenchAnsweredCount");
const frenchExpandAllButton = document.querySelector("#frenchExpandAllButton");
const frenchRandomButton = document.querySelector("#frenchRandomButton");
const frenchToggleButtons = document.querySelectorAll(".french-toggle-button");
const subjectTabs = document.querySelectorAll("[data-subject-target]");
const subjectPanels = document.querySelectorAll(".subject-panel");

if (frenchTopicsCount) frenchTopicsCount.textContent = String(frenchTopics.length);

initSubjectTabs();
renderFrenchNav();
renderFrenchTopics();

frenchSearch.addEventListener("input", (event) => {
  frenchState.search = event.target.value.trim().toLowerCase();
  if (frenchState.search) frenchState.view = "all";
  syncFrenchToggleButtons();
  renderFrenchNav();
  renderFrenchTopics();
});

frenchExpandAllButton.addEventListener("click", () => {
  frenchState.expandedAll = !frenchState.expandedAll;
  frenchState.view = frenchState.expandedAll ? "all" : "single";
  frenchExpandAllButton.textContent = frenchState.expandedAll ? "Focus view" : "Expand all";
  syncFrenchToggleButtons();
  renderFrenchTopics();
});

frenchRandomButton.addEventListener("click", () => {
  const topic = pickFrench(frenchTopics);
  frenchState.activeTopicId = topic.id;
  frenchState.view = "single";
  frenchState.search = "";
  frenchState.expandedAll = false;
  frenchSearch.value = "";
  frenchExpandAllButton.textContent = "Expand all";
  syncFrenchToggleButtons();
  renderFrenchNav();
  renderFrenchTopics();
  document.querySelector("#frenchPanel .content-stage").scrollIntoView({ behavior: "smooth", block: "start" });
});

frenchToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    frenchState.view = button.dataset.frenchView;
    frenchState.expandedAll = frenchState.view === "all";
    frenchExpandAllButton.textContent = frenchState.expandedAll ? "Focus view" : "Expand all";
    syncFrenchToggleButtons();
    renderFrenchTopics();
  });
});

function initSubjectTabs() {
  subjectTabs.forEach((button) => {
    button.addEventListener("click", () => {
      setSubjectPanel(button.dataset.subjectTarget, true);
    });
  });

  const initialPanel = getInitialSubjectPanel();
  setSubjectPanel(initialPanel, false);
}

function getInitialSubjectPanel() {
  const hash = window.location.hash.toLowerCase();
  if (hash.includes("math")) return "mathPanel";
  if (hash.includes("french")) return "frenchPanel";
  if (hash.includes("science") || hash.includes("biology") || hash.includes("chemistry") || hash.includes("physics")) return "sciencePanel";
  if (hash.includes("religion") || hash.includes("compassion") || hash.includes("tzedakah")) return "religionPanel";

  const activePanel = document.querySelector(".subject-panel.active");
  return activePanel ? activePanel.id : "frenchPanel";
}

function setSubjectPanel(panelId, updateHash) {
  subjectPanels.forEach((panel) => {
    const isActive = panel.id === panelId;
    panel.hidden = !isActive;
    panel.classList.toggle("active", isActive);
  });

  subjectTabs.forEach((button) => {
    const isActive = button.dataset.subjectTarget === panelId;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  const subjectNameByPanel = {
    mathPanel: "math",
    frenchPanel: "french",
    sciencePanel: "science",
    religionPanel: "religion"
  };
  document.body.dataset.subject = subjectNameByPanel[panelId] || "math";
  if (typeof drawNumberField === "function") drawNumberField();

  if (updateHash) {
    const hashByPanel = {
      mathPanel: "#maths",
      frenchPanel: "#french",
      sciencePanel: "#science",
      religionPanel: "#religion"
    };
    const hash = hashByPanel[panelId] || "#maths";
    window.history.replaceState(null, "", hash);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderFrenchNav() {
  frenchNav.innerHTML = "";
  const filtered = filteredFrenchTopics();

  filtered.forEach((topic, index) => {
    const button = document.createElement("button");
    button.className = "topic-nav-button";
    if (topic.id === frenchState.activeTopicId) button.classList.add("active");
    button.type = "button";
    button.innerHTML = `<strong>${index + 1}. ${topic.title}</strong><span>${topic.tag}</span>`;
    button.addEventListener("click", () => {
      frenchState.activeTopicId = topic.id;
      frenchState.view = "single";
      frenchState.search = "";
      frenchState.expandedAll = false;
      frenchSearch.value = "";
      frenchExpandAllButton.textContent = "Expand all";
      syncFrenchToggleButtons();
      renderFrenchNav();
      renderFrenchTopics();
      document.querySelector("#frenchPanel .content-stage").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    frenchNav.append(button);
  });
}

function renderFrenchTopics() {
  frenchContainer.innerHTML = "";
  const visibleTopics =
    frenchState.view === "all"
      ? filteredFrenchTopics()
      : frenchTopics.filter((topic) => topic.id === frenchState.activeTopicId);

  if (!visibleTopics.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No French mission matches that search. Try food, sport, manger, boire, jamais or future.";
    frenchContainer.append(empty);
    return;
  }

  visibleTopics.forEach((topic) => {
    frenchContainer.append(createFrenchTopicCard(topic));
  });
}

function createFrenchTopicCard(topic) {
  const article = document.createElement("article");
  article.className = "topic-card french-topic-card";
  article.id = `french-${topic.id}`;

  const header = document.createElement("div");
  header.className = "topic-card-header";
  const headerText = document.createElement("div");
  const kicker = document.createElement("p");
  kicker.className = "topic-kicker";
  kicker.textContent = topic.tag;
  const title = document.createElement("h2");
  title.textContent = topic.title;
  headerText.append(kicker, title);
  const practiceButton = document.createElement("button");
  practiceButton.className = "mini-button";
  practiceButton.type = "button";
  practiceButton.textContent = "Practice";
  practiceButton.addEventListener("click", () => {
    article.querySelector(".practice-block").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  header.append(headerText, practiceButton);

  const infoGrid = document.createElement("div");
  infoGrid.className = "info-grid french-info-grid";
  infoGrid.append(
    makeFrenchInfoBlock("explain", "Core idea", topic.explain),
    makeFrenchInfoBlock("french-remember", "Remember", topic.remember),
    makeFrenchInfoBlock("french-fact", "Fun fact", topic.fact)
  );

  const visual = document.createElement("section");
  visual.className = "visual-block";
  const visualCopy = document.createElement("div");
  visualCopy.className = "visual-copy";
  const label = document.createElement("p");
  label.className = "visual-label";
  label.textContent = topic.visual.label;
  const visualTitle = document.createElement("h3");
  visualTitle.textContent = topic.visual.title;
  const visualText = document.createElement("p");
  visualText.textContent = topic.visual.text;
  visualCopy.append(label, visualTitle, visualText);
  const visualStage = document.createElement("div");
  visualStage.className = "visual-stage french-visual-stage";
  renderFrenchVisual(visualStage, topic.visual);
  visual.append(visualCopy, visualStage);

  const example = document.createElement("section");
  example.className = "example-block";
  const exampleTitle = document.createElement("h3");
  exampleTitle.textContent = "Worked example";
  const workedExample = document.createElement("div");
  workedExample.className = "worked-example";
  renderFrenchExample(workedExample, topic.example);
  example.append(exampleTitle, workedExample);

  const practice = document.createElement("section");
  practice.className = "practice-block";
  const heading = document.createElement("div");
  heading.className = "practice-heading";
  const headingCopy = document.createElement("div");
  const practiceTitle = document.createElement("h3");
  practiceTitle.textContent = "Question sprint";
  const practiceIntro = document.createElement("p");
  practiceIntro.textContent = "Say or write your answer first, then reveal the answer and fact.";
  headingCopy.append(practiceTitle, practiceIntro);
  const moreButton = document.createElement("button");
  moreButton.className = "primary-button";
  moreButton.type = "button";
  moreButton.textContent = "More French questions";
  const list = document.createElement("ol");
  list.className = "questions-list";
  renderFrenchQuestions(list, topic.questions);
  moreButton.addEventListener("click", () => {
    renderFrenchQuestions(list, topic.more());
  });
  heading.append(headingCopy, moreButton);
  practice.append(heading, list);

  article.append(header, infoGrid, visual, example, practice);
  return article;
}

function makeFrenchInfoBlock(className, title, content) {
  const block = document.createElement("section");
  block.className = `info-block ${className}`;
  const heading = document.createElement("h3");
  heading.textContent = title;
  block.append(heading);

  if (Array.isArray(content)) {
    const list = document.createElement("ul");
    fillFrenchList(list, content);
    block.append(list);
  } else {
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    block.append(paragraph);
  }

  return block;
}

function renderFrenchVisual(target, visual) {
  target.innerHTML = "";

  if (visual.type === "vocab") {
    const grid = document.createElement("div");
    grid.className = "vocab-grid";
    visual.items.forEach((item) => {
      const tile = document.createElement("div");
      tile.className = "vocab-tile";
      const fr = document.createElement("strong");
      fr.textContent = item.fr;
      const en = document.createElement("span");
      en.textContent = item.en;
      tile.append(fr, en);
      grid.append(tile);
    });
    target.append(grid, makeRule(visual.rule));
    return;
  }

  if (visual.type === "phrases") {
    const grid = document.createElement("div");
    grid.className = "phrase-grid";
    visual.items.forEach((item) => {
      const tile = document.createElement("div");
      tile.className = "phrase-tile";
      const fr = document.createElement("strong");
      fr.textContent = item.phrase || item.fr;
      const en = document.createElement("span");
      en.textContent = item.en;
      tile.append(fr, en);
      grid.append(tile);
    });
    target.append(grid, makeRule(visual.rule));
    return;
  }

  if (visual.type === "pattern") {
    const grid = document.createElement("div");
    grid.className = "pattern-grid";
    visual.items.forEach((item, index) => {
      const card = document.createElement("div");
      card.className = `pattern-card${index === 0 ? " hot" : ""}`;
      const left = document.createElement("strong");
      left.textContent = item.left;
      const right = document.createElement("span");
      right.textContent = item.right;
      const note = document.createElement("span");
      note.textContent = item.note;
      card.append(left, right, note);
      grid.append(card);
    });
    target.append(grid, makeRule(visual.rule));
    return;
  }

  if (visual.type === "future") {
    const line = document.createElement("div");
    line.className = "future-line";
    const start = document.createElement("span");
    start.className = "future-chip hot";
    start.textContent = "je vais";
    const plus = document.createElement("span");
    plus.className = "future-chip warn";
    plus.textContent = "+";
    line.append(start, plus);
    visual.items.forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "future-chip";
      chip.textContent = item.inf;
      line.append(chip);
    });
    target.append(line, makeRule(visual.rule));
    return;
  }

  if (visual.type === "verbs") {
    const grid = document.createElement("div");
    grid.className = "verb-grid";
    visual.items.forEach((item) => {
      const tile = document.createElement("div");
      tile.className = "verb-tile";
      const inf = document.createElement("strong");
      inf.textContent = `${item.inf}: ${item.en}`;
      const future = document.createElement("span");
      future.textContent = item.future;
      const example = document.createElement("span");
      example.textContent = item.example;
      tile.append(inf, future, example);
      grid.append(tile);
    });
    target.append(grid, makeRule(visual.rule));
    return;
  }

  if (visual.type === "reading") {
    const card = document.createElement("div");
    card.className = "reading-card";
    const heading = document.createElement("strong");
    heading.textContent = "Read this text";
    const paragraph = document.createElement("p");
    paragraph.textContent = visual.text;
    card.append(heading, paragraph);
    target.append(card, makeRule(visual.rule));
  }
}

function renderFrenchExample(target, example) {
  target.innerHTML = "";
  const question = document.createElement("p");
  question.className = "example-question";
  question.textContent = example.question;
  const steps = document.createElement("ol");
  example.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    steps.append(item);
  });
  const answer = document.createElement("p");
  answer.innerHTML = `<strong>Answer:</strong> ${example.answer}`;
  target.append(question, steps, answer);
}

function renderFrenchQuestions(target, questions) {
  target.innerHTML = "";
  questions.forEach(({ q, a, fact }) => {
    const item = document.createElement("li");
    item.className = "question-card";

    const question = document.createElement("p");
    question.className = "question-text";
    question.textContent = q;

    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = "Reveal answer";
    button.addEventListener("click", () => {
      const wasRevealed = item.classList.contains("revealed");
      item.classList.toggle("revealed");
      button.textContent = item.classList.contains("revealed") ? "Hide answer" : "Reveal answer";
      if (!wasRevealed && !item.dataset.counted) {
        item.dataset.counted = "true";
        frenchState.answersRevealed += 1;
        frenchAnsweredCount.textContent = String(frenchState.answersRevealed);
      }
    });

    const answer = document.createElement("p");
    answer.className = "answer-text";
    answer.textContent = `Answer: ${a}`;

    const factText = document.createElement("p");
    factText.className = "answer-fact";
    factText.textContent = `Fun fact: ${fact}`;

    item.append(question, button, answer, factText);
    target.append(item);
  });
}

function makeRule(text) {
  const rule = document.createElement("p");
  rule.className = "french-rule";
  rule.textContent = text;
  return rule;
}

function fillFrenchList(target, items) {
  target.innerHTML = "";
  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    target.append(item);
  });
}

function filteredFrenchTopics() {
  if (!frenchState.search) return frenchTopics;
  return frenchTopics.filter((topic) => {
    const visualItems = (topic.visual.items || [])
      .map((item) => Object.values(item).join(" "))
      .join(" ");
    const questionText = topic.questions.map((question) => `${question.q} ${question.a} ${question.fact}`).join(" ");
    const haystack = [
      topic.title,
      topic.tag,
      topic.explain,
      topic.fact,
      topic.visual.text,
      topic.visual.rule,
      visualItems,
      questionText,
      ...topic.remember
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(frenchState.search);
  });
}

function syncFrenchToggleButtons() {
  frenchToggleButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.frenchView === frenchState.view);
  });
}

function makeFoodQuestions() {
  return Array.from({ length: 4 }, () => {
    const item = pickFrench(frenchFoods);
    if (item.action === "drink") {
      return {
        q: `How do you say: I drink ${item.en}?`,
        a: `Je bois ${item.fr}.`,
        fact: item.fact
      };
    }
    return {
      q: `How do you say: I eat ${item.en}?`,
      a: `Je mange ${item.fr}.`,
      fact: item.fact
    };
  });
}

function makeSportQuestions() {
  return Array.from({ length: 4 }, () => {
    const sport = pickFrench(frenchSports);
    return {
      q: `Which French phrase means ${sport.en}?`,
      a: sport.phrase,
      fact: sport.fact
    };
  });
}

function makeHealthyQuestions() {
  return Array.from({ length: 4 }, () => {
    const phrase = pickFrench(healthyPhrases);
    return {
      q: `Translate this healthy plan: ${phrase.sentence}`,
      a: `I am going to ${phrase.en.replace("to ", "")}.`,
      fact: phrase.fact
    };
  });
}

function makeMangeBoisQuestions() {
  return Array.from({ length: 4 }, () => {
    const item = pickFrench(frenchFoods);
    const verb = item.action === "drink" ? "bois" : "mange";
    const englishVerb = item.action === "drink" ? "drink" : "eat";
    return {
      q: `Choose the correct verb and translate: Je ___ ${item.fr}.`,
      a: `Je ${verb} ${item.fr}. = I ${englishVerb} ${item.en}.`,
      fact: item.fact
    };
  });
}

function makePasDeQuestions() {
  return Array.from({ length: 4 }, () => {
    const item = pickFrench(frenchFoods);
    const verb = item.action === "drink" ? "bois" : "mange";
    return {
      q: `Make this negative: Je ${verb} ${item.fr}.`,
      a: `Je ne ${verb} pas ${negativeArticle(item.fr)}.`,
      fact: "After pas, food and drink words usually use de or d'."
    };
  });
}

function makeJamaisQuestions() {
  return Array.from({ length: 4 }, () => {
    const item = pickFrench(frenchFoods);
    const verb = item.action === "drink" ? "bois" : "mange";
    return {
      q: `Change this to never: Je ${verb} ${item.fr}.`,
      a: `Je ne ${verb} jamais ${negativeArticle(item.fr)}.`,
      fact: "Jamais replaces pas and means never in ne ... jamais."
    };
  });
}

function makeFutureQuestions() {
  return Array.from({ length: 4 }, () => {
    const verb = pickFrench(frenchVerbs);
    return {
      q: `Translate this future phrase: ${verb.future}.`,
      a: `I am going to ${verb.en.replace("to ", "")}.`,
      fact: verb.fact
    };
  });
}

function makeVerbQuestions() {
  return Array.from({ length: 4 }, () => {
    const verb = pickFrench(frenchVerbs);
    return {
      q: `What does ${verb.inf} mean, and how do you use it after je vais?`,
      a: `${verb.inf} = ${verb.en}; ${verb.future} = I am going to ${verb.en.replace("to ", "")}.`,
      fact: verb.fact
    };
  });
}

function makeReadingQuestions() {
  const bank = [
    {
      q: "What does la semaine prochaine mean?",
      a: "next week",
      fact: "Prochaine is a useful clue that the text is talking about future plans."
    },
    {
      q: "Find the phrase that means I am going to change my habits.",
      a: "Je vais changer mes habitudes.",
      fact: "Habitudes looks like habits, which makes it a helpful cognate."
    },
    {
      q: "What does plus de fruits mean?",
      a: "more fruit",
      fact: "Plus de is a strong healthy lifestyle phrase."
    },
    {
      q: "What does je ne fais pas assez de sport mean?",
      a: "I do not do enough sport.",
      fact: "Assez means enough."
    },
    {
      q: "What time phrase tells you when the writer will play football?",
      a: "le samedi",
      fact: "Le samedi often means on Saturdays."
    },
    {
      q: "Which words show the writer is making future plans?",
      a: "je vais",
      fact: "Je vais is the main future-tense signal in this test topic."
    }
  ];
  return shuffleFrench(bank).slice(0, 4);
}

function negativeArticle(phrase) {
  const withoutArticle = phrase
    .replace(/^du /, "")
    .replace(/^de la /, "")
    .replace(/^des /, "")
    .replace(/^de l'/, "")
    .replace(/^une /, "")
    .replace(/^un /, "");
  return startsWithVowelSound(withoutArticle) ? `d'${withoutArticle}` : `de ${withoutArticle}`;
}

function startsWithVowelSound(text) {
  return /^[aeiouyhàâäéèêëîïôöùûü]/i.test(text);
}

function pickFrench(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffleFrench(items) {
  return [...items].sort(() => Math.random() - 0.5);
}
