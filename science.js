const scienceTopics = [
  {
    id: "planning-variables",
    area: "Working scientifically",
    title: "Planning investigations and variables",
    tag: "Fair testing",
    pages: "CGP 13+ page 4",
    visual: "variables",
    examFocus:
      "Common Entrance questions often ask you to name the independent, dependent and control variables, then explain how to make the test fair.",
    remember: [
      "Independent variable: the one thing you deliberately change.",
      "Dependent variable: the result you measure.",
      "Control variables: the things you keep the same so the test is fair.",
      "A prediction should link the independent variable to the dependent variable and use science words."
    ],
    traps: [
      "Writing vague variables like amount, size or time without saying what is being measured.",
      "Changing more than one variable at once.",
      "Forgetting repeats or a range of values."
    ],
    questions: [
      {
        type: "1 mark",
        q: "A pupil investigates how light intensity affects the rate of photosynthesis. Name the independent variable.",
        marks: ["Light intensity."],
        examiner: "Independent means the variable changed by the pupil."
      },
      {
        type: "2 marks",
        q: "The pupil counts oxygen bubbles from pondweed for one minute. Name the dependent variable and one control variable.",
        marks: ["Dependent variable: number of oxygen bubbles per minute.", "Control variable: temperature, length of pondweed, time counted, carbon dioxide concentration or distance from lamp method."],
        examiner: "The dependent variable must be measurable. A control variable must be something kept the same."
      },
      {
        type: "3 marks",
        q: "Explain why repeating readings improves an investigation.",
        marks: ["Repeats help spot anomalous results.", "They make the mean more reliable.", "They reduce the effect of random errors."],
        examiner: "Use reliability language, not just 'to make it better'."
      }
    ]
  },
  {
    id: "collecting-graphs",
    area: "Working scientifically",
    title: "Collecting data, line graphs and bar charts",
    tag: "Data skills",
    pages: "CGP 13+ page 6",
    visual: "graphs",
    examFocus:
      "Expect questions that ask you to choose a table, draw a graph, identify an anomaly, calculate a mean or read a value from a graph.",
    remember: [
      "Use a line graph when both variables are continuous numbers.",
      "Use a bar chart for categories.",
      "Put the independent variable on the x-axis and the dependent variable on the y-axis.",
      "Headings need units, such as time in seconds or temperature in degrees C."
    ],
    traps: [
      "Using a bar chart when the x-axis is a scale.",
      "Forgetting units in table headings.",
      "Joining points through an obvious anomalous result."
    ],
    questions: [
      {
        type: "2 marks",
        q: "A table shows temperature every minute as water cools. Should the pupil draw a line graph or a bar chart? Explain why.",
        marks: ["Line graph.", "Time and temperature are continuous variables."],
        examiner: "The explanation earns the second mark."
      },
      {
        type: "3 marks",
        q: "Give three features of a good results table.",
        marks: ["Clear column headings.", "Units in the headings, not repeated in every box.", "Readings recorded to a sensible precision."],
        examiner: "Other valid answers include repeats, mean column, or neat ruled columns."
      },
      {
        type: "2 marks",
        q: "Readings are 12, 13, 25, 12 and 13. Which result is anomalous and what should you do before calculating the mean?",
        marks: ["25 is anomalous.", "Repeat/check that reading or leave it out with a reason before calculating the mean."],
        examiner: "Do not delete a result without explaining why."
      }
    ]
  },
  {
    id: "concluding-evaluating",
    area: "Working scientifically",
    title: "Concluding and evaluating data",
    tag: "Evidence",
    pages: "CGP 13+ page 10",
    visual: "evaluation",
    examFocus:
      "A Common Entrance conclusion should describe the pattern, quote evidence and then evaluate how trustworthy the evidence is.",
    remember: [
      "A conclusion says what the results show.",
      "Evidence means using numbers from the results.",
      "Evaluation says how good the method and data were.",
      "Improvements should be specific and linked to the weakness."
    ],
    traps: [
      "Writing a conclusion with no data.",
      "Saying 'human error' without explaining the actual problem.",
      "Suggesting an improvement that would not affect reliability, accuracy or validity."
    ],
    questions: [
      {
        type: "3 marks",
        q: "A plant made 8 bubbles per minute at 20 cm from a lamp and 24 bubbles per minute at 10 cm. Write a conclusion.",
        marks: ["As the lamp moved closer, the rate of photosynthesis increased.", "Use evidence: 8 bubbles per minute at 20 cm and 24 bubbles per minute at 10 cm.", "This suggests higher light intensity increases the rate."],
        examiner: "Pattern plus numbers is the safe Common Entrance structure."
      },
      {
        type: "2 marks",
        q: "Give two ways to improve the reliability of an investigation.",
        marks: ["Repeat each measurement.", "Calculate a mean after checking for anomalies."],
        examiner: "Reliability is about consistency."
      },
      {
        type: "2 marks",
        q: "A thermometer is only read to the nearest 5 degrees C. Explain one problem and one improvement.",
        marks: ["Problem: the readings are not very precise.", "Improvement: use a thermometer or data logger with smaller intervals."],
        examiner: "Name the instrument weakness, then fix that weakness."
      }
    ]
  },
  {
    id: "photosynthesis",
    area: "Biology",
    title: "Photosynthesis",
    tag: "Plants",
    pages: "CGP 13+ pages 33-34",
    visual: "photosynthesis",
    examFocus:
      "Questions usually test the word equation, the role of chlorophyll, limiting factors and evidence that starch has been made.",
    remember: [
      "Photosynthesis happens in chloroplasts containing chlorophyll.",
      "Carbon dioxide and water are used to make glucose and oxygen.",
      "Light supplies energy; it is not a substance used up in the equation.",
      "Glucose can be stored as starch."
    ],
    traps: [
      "Saying plants get food from the soil.",
      "Putting energy as a product.",
      "Forgetting carbon dioxide enters through stomata."
    ],
    questions: [
      {
        type: "2 marks",
        q: "Write the word equation for photosynthesis.",
        marks: ["carbon dioxide + water", "glucose + oxygen, using light energy and chlorophyll"],
        examiner: "The full equation is carbon dioxide + water -> glucose + oxygen."
      },
      {
        type: "3 marks",
        q: "Explain why a plant kept in the dark for two days will not test positive for starch.",
        marks: ["Light is needed for photosynthesis.", "In darkness the plant cannot make glucose.", "Stored starch is used up, so little or no starch remains."],
        examiner: "Connect light to glucose and glucose to starch."
      },
      {
        type: "2 marks",
        q: "Name two limiting factors that can slow down photosynthesis.",
        marks: ["Light intensity.", "Carbon dioxide concentration or temperature."],
        examiner: "Water can also limit photosynthesis, but CE questions most often use light, carbon dioxide and temperature."
      }
    ]
  },
  {
    id: "starch-test",
    area: "Biology",
    title: "Testing a leaf for starch",
    tag: "Required practical",
    pages: "CGP 13+ page 34",
    visual: "starch",
    examFocus:
      "This is a classic practical sequence question. Marks come from the correct order, safety with ethanol and the iodine colour change.",
    remember: [
      "Boil the leaf in water to kill it and soften it.",
      "Warm the leaf in ethanol in a water bath to remove chlorophyll.",
      "Rinse in warm water, then add iodine solution.",
      "Iodine turns blue-black if starch is present."
    ],
    traps: [
      "Heating ethanol directly over a flame.",
      "Forgetting ethanol removes the green colour.",
      "Saying iodine turns black for glucose. It tests for starch."
    ],
    questions: [
      {
        type: "4 marks",
        q: "Describe how to test a leaf for starch safely.",
        marks: ["Boil the leaf in water.", "Place it in ethanol in a hot water bath to remove chlorophyll.", "Rinse/soften the leaf in warm water.", "Add iodine solution; blue-black shows starch is present."],
        examiner: "Mention the water bath because ethanol is flammable."
      },
      {
        type: "1 mark",
        q: "What colour does iodine solution turn if starch is present?",
        marks: ["Blue-black."],
        examiner: "Brown/orange means no starch."
      },
      {
        type: "2 marks",
        q: "Why is a variegated leaf useful in a photosynthesis experiment?",
        marks: ["Only green parts contain chlorophyll.", "It can show chlorophyll is needed because only green areas make starch."],
        examiner: "Variegated means green and white parts."
      }
    ]
  },
  {
    id: "respiration-gas-exchange",
    area: "Biology",
    title: "Breathing, respiration and gas exchange",
    tag: "Lungs and cells",
    pages: "CGP 13+ pages 23-24 and 31-32",
    visual: "respiration",
    examFocus:
      "Be ready to separate breathing from respiration, explain gas exchange in the lungs and compare inhaled and exhaled air.",
    remember: [
      "Breathing is moving air in and out of the lungs.",
      "Respiration is a chemical reaction in cells that releases energy.",
      "Alveoli have thin walls, a large surface area and a good blood supply.",
      "Exhaled air has less oxygen and more carbon dioxide than inhaled air."
    ],
    traps: [
      "Saying respiration means breathing.",
      "Forgetting respiration happens in cells, not just in lungs.",
      "Writing that exhaled air has no oxygen."
    ],
    questions: [
      {
        type: "2 marks",
        q: "Write the word equation for aerobic respiration.",
        marks: ["glucose + oxygen", "carbon dioxide + water, releasing energy"],
        examiner: "The full equation is glucose + oxygen -> carbon dioxide + water."
      },
      {
        type: "3 marks",
        q: "Explain how alveoli are adapted for gas exchange.",
        marks: ["Large surface area.", "Thin walls for short diffusion distance.", "Good blood supply or moist surface to maintain diffusion."],
        examiner: "Adaptation plus reason earns stronger marks."
      },
      {
        type: "2 marks",
        q: "How is exhaled air different from inhaled air?",
        marks: ["It contains less oxygen.", "It contains more carbon dioxide and more water vapour."],
        examiner: "There is still oxygen in exhaled air."
      }
    ]
  },
  {
    id: "nutrition-food-groups",
    area: "Biology",
    title: "Nutrition and the seven food groups",
    tag: "Diet",
    pages: "CGP 13+ page 15",
    visual: "nutrition",
    examFocus:
      "Expect matching questions: nutrient, use in the body, deficiency problem and simple food examples.",
    remember: [
      "Carbohydrates release energy.",
      "Proteins are needed for growth and repair.",
      "Fats store energy and insulate the body.",
      "Vitamins and minerals are needed in small amounts for health.",
      "Fibre helps food move through the gut; water is needed for body processes."
    ],
    traps: [
      "Writing that fibre gives lots of energy.",
      "Confusing protein with the main energy source.",
      "Forgetting water is part of a balanced diet."
    ],
    questions: [
      {
        type: "3 marks",
        q: "Give the main use of carbohydrates, proteins and fibre in the body.",
        marks: ["Carbohydrates: energy.", "Proteins: growth and repair.", "Fibre: helps food move through the digestive system."],
        examiner: "Keep each nutrient linked to its job."
      },
      {
        type: "2 marks",
        q: "A child has a diet with very little iron. What problem could this cause and why?",
        marks: ["Anaemia/tiredness.", "Iron is needed to make haemoglobin for carrying oxygen in the blood."],
        examiner: "Mineral questions often need the body function."
      },
      {
        type: "2 marks",
        q: "Explain why athletes need more carbohydrate before a race.",
        marks: ["Carbohydrate is used in respiration.", "It releases energy for muscle activity."],
        examiner: "Link diet to respiration and movement."
      }
    ]
  },
  {
    id: "staying-healthy",
    area: "Biology",
    title: "Staying healthy",
    tag: "Balanced diet",
    pages: "CGP 13+ page 16",
    visual: "healthy",
    examFocus:
      "Common Entrance questions ask you to identify balanced or unbalanced diets, then explain health consequences using nutrients and lifestyle factors.",
    remember: [
      "A balanced diet gives the right amounts of each nutrient for that person.",
      "Too much energy-rich food can lead to weight gain.",
      "Exercise increases energy use and strengthens the heart and muscles.",
      "Health is affected by diet, exercise, sleep, disease, smoking and alcohol."
    ],
    traps: [
      "Saying everyone needs exactly the same diet.",
      "Writing 'fat is bad' instead of explaining amount and balance.",
      "Forgetting age, activity level and growth affect diet needs."
    ],
    questions: [
      {
        type: "2 marks",
        q: "What is meant by a balanced diet?",
        marks: ["A diet containing all the food groups/nutrients.", "In the correct amounts for the person's needs."],
        examiner: "Both variety and correct amounts matter."
      },
      {
        type: "3 marks",
        q: "A pupil eats lots of sugary snacks but does little exercise. Explain two possible effects on health.",
        marks: ["They may take in more energy than they use.", "This can lead to weight gain.", "It may increase the risk of tooth decay or poor fitness."],
        examiner: "Use cause and effect."
      },
      {
        type: "2 marks",
        q: "Why might a growing teenager need more protein than an elderly adult?",
        marks: ["Teenagers are growing.", "Protein is needed for growth and repair of tissues."],
        examiner: "Avoid saying protein is mainly for energy."
      }
    ]
  },
  {
    id: "elements-compounds",
    area: "Chemistry",
    title: "Elements, compounds and mixtures",
    tag: "Particles",
    pages: "CGP 13+ pages 57-59",
    visual: "particles",
    examFocus:
      "Questions often show particle diagrams and ask whether the substance is an element, compound or mixture, then ask for a reason.",
    remember: [
      "An element contains only one type of atom.",
      "A compound contains two or more elements chemically joined.",
      "A mixture contains substances not chemically joined.",
      "Mixtures can usually be separated by physical methods."
    ],
    traps: [
      "Calling any two atoms a mixture.",
      "Forgetting compounds have fixed proportions.",
      "Using molecule, atom and element as if they mean the same thing."
    ],
    questions: [
      {
        type: "3 marks",
        q: "Explain the difference between a compound and a mixture.",
        marks: ["A compound has elements chemically joined.", "A mixture has substances not chemically joined.", "A mixture can be separated by physical methods; a compound usually needs chemical reactions."],
        examiner: "Use chemically joined for compounds."
      },
      {
        type: "2 marks",
        q: "Water is H2O. Is it an element, compound or mixture? Explain your answer.",
        marks: ["Compound.", "It contains hydrogen and oxygen atoms chemically joined."],
        examiner: "A formula with different element symbols is a clue."
      },
      {
        type: "2 marks",
        q: "Air contains nitrogen, oxygen, carbon dioxide and noble gases. Why is air a mixture?",
        marks: ["It contains several gases.", "They are not chemically joined and can vary in proportion."],
        examiner: "This links to the air topic too."
      }
    ]
  },
  {
    id: "acids-alkalis",
    area: "Chemistry",
    title: "Acids, alkalis, pH and neutralisation",
    tag: "Reactions",
    pages: "CGP 13+ pages 83-84",
    visual: "ph",
    examFocus:
      "Expect pH scale questions, indicator colour questions and neutralisation word equations.",
    remember: [
      "Acids have pH below 7.",
      "Neutral solutions have pH 7.",
      "Alkalis have pH above 7.",
      "Neutralisation: acid + alkali -> salt + water.",
      "Universal indicator shows pH using different colours."
    ],
    traps: [
      "Calling all bases alkalis. Alkalis are soluble bases.",
      "Thinking a strong acid is safer because the number is smaller.",
      "Forgetting the products of neutralisation."
    ],
    questions: [
      {
        type: "2 marks",
        q: "A solution has pH 3. Is it acidic, alkaline or neutral? Explain.",
        marks: ["Acidic.", "Its pH is below 7."],
        examiner: "Use the pH number in the explanation."
      },
      {
        type: "2 marks",
        q: "Write the general word equation for neutralisation.",
        marks: ["acid + alkali", "salt + water"],
        examiner: "Some questions use acid + base -> salt + water."
      },
      {
        type: "3 marks",
        q: "A farmer adds lime to acidic soil. Explain why this helps plants grow.",
        marks: ["Lime is alkaline.", "It neutralises some acid in the soil.", "This brings the pH closer to a suitable range for plant growth."],
        examiner: "This is an application question, not just a definition."
      }
    ]
  },
  {
    id: "chromatography",
    area: "Chemistry",
    title: "Separation techniques: chromatography",
    tag: "Separating mixtures",
    pages: "CGP 13+ pages 69-71",
    visual: "chromatography",
    examFocus:
      "Chromatography questions usually ask for the method, why the start line is in pencil, and what separated spots show.",
    remember: [
      "Chromatography separates dissolved substances such as dyes.",
      "The solvent carries substances up the paper.",
      "Different substances travel different distances.",
      "The start line is drawn in pencil because pencil does not dissolve in the solvent."
    ],
    traps: [
      "Putting the ink spot below the solvent level.",
      "Drawing the start line in pen.",
      "Saying every spot is a different element rather than a different substance/dye."
    ],
    questions: [
      {
        type: "3 marks",
        q: "Describe how to separate the dyes in a food colouring using paper chromatography.",
        marks: ["Draw a pencil line near the bottom of chromatography paper and place a spot of dye on it.", "Put the paper in solvent with the spot above the solvent level.", "Let the solvent move up the paper and compare the separated spots."],
        examiner: "The spot must start above the solvent."
      },
      {
        type: "1 mark",
        q: "Why is the start line drawn in pencil?",
        marks: ["Pencil does not dissolve in the solvent, so it will not run up the paper."],
        examiner: "Pen ink could separate and confuse the result."
      },
      {
        type: "2 marks",
        q: "A black ink separates into three coloured spots. What does this show?",
        marks: ["The black ink is a mixture.", "It contains at least three different dyes/substances."],
        examiner: "Use mixture because more than one substance is present."
      }
    ]
  },
  {
    id: "air-mixture",
    area: "Chemistry",
    title: "Air as a mixture",
    tag: "Atmosphere",
    pages: "CGP 13+ page 68",
    visual: "air",
    examFocus:
      "Questions may ask for approximate percentages in air, evidence that oxygen is used in burning, or why air is a mixture.",
    remember: [
      "Air is about 78 percent nitrogen and 21 percent oxygen.",
      "There are small amounts of argon, carbon dioxide and water vapour.",
      "Oxygen supports burning and is used in respiration.",
      "Carbon dioxide is tested with limewater, which turns milky."
    ],
    traps: [
      "Saying air is mostly oxygen.",
      "Forgetting carbon dioxide is only a small percentage.",
      "Calling air a compound."
    ],
    questions: [
      {
        type: "2 marks",
        q: "Give the two main gases in air and their approximate percentages.",
        marks: ["Nitrogen about 78 percent.", "Oxygen about 21 percent."],
        examiner: "Approximate values are fine."
      },
      {
        type: "2 marks",
        q: "Why is air described as a mixture rather than a compound?",
        marks: ["It contains different gases not chemically joined.", "The gases can vary in amount and can be separated physically."],
        examiner: "Do not say air has a chemical formula."
      },
      {
        type: "2 marks",
        q: "What happens to limewater if carbon dioxide is bubbled through it?",
        marks: ["It turns milky/cloudy.", "This is the test for carbon dioxide."],
        examiner: "Clear to milky is the key observation."
      }
    ]
  },
  {
    id: "energy-transfers",
    area: "Physics",
    title: "Energy transfers and stores",
    tag: "Energy",
    pages: "CGP 13+ page 92",
    visual: "energy",
    examFocus:
      "Common Entrance questions often ask you to identify useful and wasted energy transfers in everyday devices.",
    remember: [
      "Energy can be transferred by heating, light, sound, electricity or forces.",
      "Energy is stored in different ways, such as chemical, kinetic, thermal and gravitational stores.",
      "Useful energy is the energy wanted from a device.",
      "Wasted energy is often transferred to the surroundings by heating or sound."
    ],
    traps: [
      "Saying energy is used up.",
      "Forgetting sound and heating can be wasted transfers.",
      "Mixing up stores and transfer pathways."
    ],
    questions: [
      {
        type: "3 marks",
        q: "For a torch, name the starting energy store, the useful energy transfer and one wasted transfer.",
        marks: ["Starting store: chemical store in the battery.", "Useful transfer: light from the bulb/LED.", "Wasted transfer: heating of the surroundings."],
        examiner: "Use store for the battery and transfer for light/heating."
      },
      {
        type: "2 marks",
        q: "A kettle transfers electrical energy. What is the useful transfer and one wasted transfer?",
        marks: ["Useful: heating the water.", "Wasted: heating the kettle/air or sound."],
        examiner: "Useful depends on the device's purpose."
      },
      {
        type: "2 marks",
        q: "Why is oil a chemical energy store?",
        marks: ["Energy is stored in the chemical bonds of the fuel.", "It is released when the fuel burns."],
        examiner: "This links energy to fuels."
      }
    ]
  },
  {
    id: "energy-conservation",
    area: "Physics",
    title: "Conservation of energy",
    tag: "Law",
    pages: "CGP 13+ page 93",
    visual: "conservation",
    examFocus:
      "You may be asked to explain why no machine is 100 percent efficient, while still saying that energy is conserved overall.",
    remember: [
      "Energy cannot be created or destroyed.",
      "Energy can be transferred from one store to another.",
      "Some energy is often dissipated to the surroundings.",
      "Efficiency compares useful energy output with total energy input."
    ],
    traps: [
      "Writing that wasted energy disappears.",
      "Thinking conservation means the useful energy stays the same.",
      "Forgetting dissipated energy still exists, but is spread out."
    ],
    questions: [
      {
        type: "2 marks",
        q: "State the law of conservation of energy.",
        marks: ["Energy cannot be created or destroyed.", "It can only be transferred from one store to another."],
        examiner: "Both parts make the answer complete."
      },
      {
        type: "3 marks",
        q: "A motor takes in 100 J of energy and gives 70 J of useful kinetic energy. What happened to the other 30 J?",
        marks: ["It was not destroyed.", "It was transferred to the surroundings.", "Mostly by heating and/or sound as wasted energy."],
        examiner: "Use conservation language."
      },
      {
        type: "2 marks",
        q: "Why can no real machine be 100 percent efficient?",
        marks: ["Some energy is always wasted/dissipated.", "For example by heating due to friction, electrical resistance or sound."],
        examiner: "Give a cause of wasted energy."
      }
    ]
  },
  {
    id: "energy-resources",
    area: "Physics",
    title: "Energy resources and fossil fuels",
    tag: "Resources",
    pages: "CGP 13+ pages 94 and 97",
    visual: "resources",
    examFocus:
      "Expect comparison questions: renewable versus non-renewable, advantages and disadvantages, and why fossil fuels are running out.",
    remember: [
      "Fossil fuels include coal, oil and natural gas.",
      "They are non-renewable because they form over millions of years.",
      "Renewable resources are replaced naturally on a human timescale.",
      "Examples include solar, wind, hydroelectric, geothermal and biomass."
    ],
    traps: [
      "Calling nuclear a fossil fuel.",
      "Saying renewable means it never has disadvantages.",
      "Forgetting reliability and location matter for renewable resources."
    ],
    questions: [
      {
        type: "3 marks",
        q: "Compare fossil fuels and wind power as energy resources.",
        marks: ["Fossil fuels are non-renewable; wind is renewable.", "Fossil fuels release carbon dioxide when burned; wind does not during generation.", "Wind can be unreliable because it depends on weather."],
        examiner: "A comparison should mention both resources."
      },
      {
        type: "2 marks",
        q: "Why are fossil fuels described as non-renewable?",
        marks: ["They are used much faster than they are made.", "They take millions of years to form."],
        examiner: "Do not just say 'they run out' without why."
      },
      {
        type: "2 marks",
        q: "Give one advantage and one disadvantage of solar power.",
        marks: ["Advantage: renewable or no carbon dioxide during generation.", "Disadvantage: depends on sunlight/weather or cannot generate at night."],
        examiner: "Any sensible paired advantage/disadvantage can score."
      }
    ]
  },
  {
    id: "fossil-fuel-effects",
    area: "Physics",
    title: "Effects of fossil fuels",
    tag: "Environment",
    pages: "CGP 13+ page 77",
    visual: "pollution",
    examFocus:
      "Environmental questions usually ask for a named pollutant, its effect and one possible way to reduce the problem.",
    remember: [
      "Burning fossil fuels releases carbon dioxide.",
      "Carbon dioxide is a greenhouse gas linked to climate change.",
      "Sulfur dioxide can cause acid rain.",
      "Particulates can cause breathing problems and dirty buildings."
    ],
    traps: [
      "Mixing up ozone layer damage with carbon dioxide.",
      "Saying all pollution causes the same effect.",
      "Forgetting to name the gas or particle."
    ],
    questions: [
      {
        type: "3 marks",
        q: "Explain how burning fossil fuels can contribute to climate change.",
        marks: ["Burning fossil fuels releases carbon dioxide.", "Carbon dioxide is a greenhouse gas.", "It traps more heat in the atmosphere, increasing global temperatures."],
        examiner: "Use the chain: fossil fuel -> carbon dioxide -> greenhouse effect."
      },
      {
        type: "2 marks",
        q: "Name one pollutant from burning fossil fuels and one effect it can have.",
        marks: ["Sulfur dioxide can cause acid rain.", "Or particulates can cause breathing problems."],
        examiner: "The pollutant and effect must match."
      },
      {
        type: "2 marks",
        q: "Give two ways society could reduce the environmental effects of fossil fuels.",
        marks: ["Use more renewable energy or improve energy efficiency.", "Use public transport, reduce demand, or remove sulfur from fuels."],
        examiner: "One mark per valid method."
      }
    ]
  }
];

const scienceState = {
  activeTopicId: scienceTopics[0].id,
  view: "single",
  search: "",
  expandedAll: false,
  answersRevealed: 0
};

const scienceNav = document.querySelector("#scienceNav");
const scienceContainer = document.querySelector("#scienceContainer");
const scienceSearch = document.querySelector("#scienceSearch");
const scienceTopicsCount = document.querySelector("#scienceTopicsCount");
const scienceAnsweredCount = document.querySelector("#scienceAnsweredCount");
const scienceExpandAllButton = document.querySelector("#scienceExpandAllButton");
const scienceRandomButton = document.querySelector("#scienceRandomButton");
const scienceToggleButtons = document.querySelectorAll(".science-toggle-button");

if (scienceTopicsCount) scienceTopicsCount.textContent = String(scienceTopics.length);

renderScienceNav();
renderScienceTopics();

scienceSearch.addEventListener("input", (event) => {
  scienceState.search = event.target.value.trim().toLowerCase();
  if (scienceState.search) scienceState.view = "all";
  syncScienceToggleButtons();
  renderScienceNav();
  renderScienceTopics();
});

scienceExpandAllButton.addEventListener("click", () => {
  scienceState.expandedAll = !scienceState.expandedAll;
  scienceState.view = scienceState.expandedAll ? "all" : "single";
  scienceExpandAllButton.textContent = scienceState.expandedAll ? "Focus view" : "Expand all";
  syncScienceToggleButtons();
  renderScienceTopics();
});

scienceRandomButton.addEventListener("click", () => {
  const topic = pickScience(scienceTopics);
  scienceState.activeTopicId = topic.id;
  scienceState.view = "single";
  scienceState.search = "";
  scienceState.expandedAll = false;
  scienceSearch.value = "";
  scienceExpandAllButton.textContent = "Expand all";
  syncScienceToggleButtons();
  renderScienceNav();
  renderScienceTopics();
  document.querySelector("#sciencePanel .content-stage").scrollIntoView({ behavior: "smooth", block: "start" });
});

scienceToggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    scienceState.view = button.dataset.scienceView;
    scienceState.expandedAll = scienceState.view === "all";
    scienceExpandAllButton.textContent = scienceState.expandedAll ? "Focus view" : "Expand all";
    syncScienceToggleButtons();
    renderScienceTopics();
  });
});

function renderScienceNav() {
  scienceNav.innerHTML = "";
  const filtered = filteredScienceTopics();

  filtered.forEach((topic, index) => {
    const button = document.createElement("button");
    button.className = "topic-nav-button science-nav-button";
    if (topic.id === scienceState.activeTopicId) button.classList.add("active");
    button.type = "button";
    button.innerHTML = `<strong>${index + 1}. ${topic.title}</strong><span>${topic.area} - ${topic.tag}</span>`;
    button.addEventListener("click", () => {
      scienceState.activeTopicId = topic.id;
      scienceState.view = "single";
      scienceState.search = "";
      scienceState.expandedAll = false;
      scienceSearch.value = "";
      scienceExpandAllButton.textContent = "Expand all";
      syncScienceToggleButtons();
      renderScienceNav();
      renderScienceTopics();
      document.querySelector("#sciencePanel .content-stage").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    scienceNav.append(button);
  });
}

function renderScienceTopics() {
  scienceContainer.innerHTML = "";
  const visibleTopics =
    scienceState.view === "all"
      ? filteredScienceTopics()
      : scienceTopics.filter((topic) => topic.id === scienceState.activeTopicId);

  if (!visibleTopics.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No Science topic matches that search. Try photosynthesis, pH, chromatography, energy or variables.";
    scienceContainer.append(empty);
    return;
  }

  visibleTopics.forEach((topic) => {
    scienceContainer.append(createScienceTopicCard(topic));
  });
}

function createScienceTopicCard(topic) {
  const article = document.createElement("article");
  article.className = "topic-card science-topic-card";
  article.id = `science-${topic.id}`;

  const header = document.createElement("div");
  header.className = "topic-card-header science-card-header";
  const headerText = document.createElement("div");
  const kicker = document.createElement("p");
  kicker.className = "topic-kicker";
  kicker.textContent = `${topic.area} - ${topic.tag}`;
  const title = document.createElement("h2");
  title.textContent = topic.title;
  headerText.append(kicker, title);
  const practiceButton = document.createElement("button");
  practiceButton.className = "mini-button";
  practiceButton.type = "button";
  practiceButton.textContent = "Exam questions";
  practiceButton.addEventListener("click", () => {
    article.querySelector(".practice-block").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  header.append(headerText, practiceButton);

  const examStrip = document.createElement("section");
  examStrip.className = "science-exam-strip";
  examStrip.append(
    makeScienceFact("Source", topic.pages),
    makeScienceFact("CE focus", topic.examFocus),
    makeScienceFact("Question style", "Definition, explanation, practical method, data or comparison")
  );

  const visualBlock = document.createElement("section");
  visualBlock.className = "visual-block science-visual-block";
  const visualCopy = document.createElement("div");
  visualCopy.className = "visual-copy";
  const visualLabel = document.createElement("p");
  visualLabel.className = "visual-label";
  visualLabel.textContent = "Science model";
  const visualTitle = document.createElement("h3");
  visualTitle.textContent = topic.title;
  const visualText = document.createElement("p");
  visualText.textContent = topic.examFocus;
  visualCopy.append(visualLabel, visualTitle, visualText);
  const visualStage = document.createElement("div");
  visualStage.className = "visual-stage science-visual-stage";
  renderScienceVisual(visualStage, topic.visual);
  visualBlock.append(visualCopy, visualStage);

  const infoGrid = document.createElement("div");
  infoGrid.className = "info-grid science-info-grid";
  infoGrid.append(
    makeScienceInfoBlock("science-remember", "Need to know", topic.remember),
    makeScienceInfoBlock("science-traps", "Common traps", topic.traps),
    makeScienceInfoBlock("science-command", "Exam move", [
      "Underline the command word: name, state, describe, explain or compare.",
      "Use the number of marks to decide how many points to make.",
      "For explain questions, use because, so or therefore."
    ])
  );

  const practice = document.createElement("section");
  practice.className = "practice-block";
  const heading = document.createElement("div");
  heading.className = "practice-heading";
  const headingCopy = document.createElement("div");
  const practiceTitle = document.createElement("h3");
  practiceTitle.textContent = "Common Entrance question set";
  const practiceIntro = document.createElement("p");
  practiceIntro.textContent = "Answer first, then reveal the mark scheme and examiner move.";
  headingCopy.append(practiceTitle, practiceIntro);
  const mixButton = document.createElement("button");
  mixButton.className = "primary-button";
  mixButton.type = "button";
  mixButton.textContent = "Mix questions";
  const list = document.createElement("ol");
  list.className = "questions-list science-questions-list";
  renderScienceQuestions(list, topic.questions);
  mixButton.addEventListener("click", () => {
    renderScienceQuestions(list, shuffleScience(topic.questions));
  });
  heading.append(headingCopy, mixButton);
  practice.append(heading, list);

  article.append(header, examStrip, visualBlock, infoGrid, practice);
  return article;
}

function makeScienceFact(label, text) {
  const card = document.createElement("div");
  card.className = "science-fact-card";
  const strong = document.createElement("strong");
  strong.textContent = label;
  const span = document.createElement("span");
  span.textContent = text;
  card.append(strong, span);
  return card;
}

function makeScienceInfoBlock(className, title, items) {
  const block = document.createElement("section");
  block.className = `info-block ${className}`;
  const heading = document.createElement("h3");
  heading.textContent = title;
  const list = document.createElement("ul");
  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    list.append(item);
  });
  block.append(heading, list);
  return block;
}

function renderScienceQuestions(target, questions) {
  target.innerHTML = "";
  questions.forEach((questionData) => {
    const item = document.createElement("li");
    item.className = "question-card science-question-card";

    const meta = document.createElement("p");
    meta.className = "science-question-meta";
    meta.textContent = questionData.type;

    const question = document.createElement("p");
    question.className = "question-text";
    question.textContent = questionData.q;

    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = "Reveal mark scheme";
    button.addEventListener("click", () => {
      const wasRevealed = item.classList.contains("revealed");
      item.classList.toggle("revealed");
      button.textContent = item.classList.contains("revealed") ? "Hide mark scheme" : "Reveal mark scheme";
      if (!wasRevealed && !item.dataset.counted) {
        item.dataset.counted = "true";
        scienceState.answersRevealed += 1;
        scienceAnsweredCount.textContent = String(scienceState.answersRevealed);
      }
    });

    const markScheme = document.createElement("div");
    markScheme.className = "answer-text science-mark-scheme";
    const markTitle = document.createElement("strong");
    markTitle.textContent = "Mark scheme:";
    const list = document.createElement("ul");
    questionData.marks.forEach((mark) => {
      const markItem = document.createElement("li");
      markItem.textContent = mark;
      list.append(markItem);
    });
    markScheme.append(markTitle, list);

    const examiner = document.createElement("p");
    examiner.className = "answer-fact";
    examiner.textContent = `Examiner move: ${questionData.examiner}`;

    item.append(meta, question, button, markScheme, examiner);
    target.append(item);
  });
}

function renderScienceVisual(target, type) {
  target.innerHTML = "";

  const visual = document.createElement("div");
  visual.className = `science-diagram ${type}`;

  const contentByType = {
    variables: [["Change", "Independent"], ["Measure", "Dependent"], ["Keep same", "Controls"], ["Repeat", "Reliable"]],
    graphs: [["x-axis", "What you changed"], ["y-axis", "What you measured"], ["Units", "In headings"], ["Anomaly", "Check it"]],
    evaluation: [["Pattern", "Say what changed"], ["Evidence", "Quote numbers"], ["Reliability", "Repeats"], ["Improve", "Fix weakness"]],
    photosynthesis: [["Carbon dioxide", "in"], ["Water", "in"], ["Light + chlorophyll", "needed"], ["Glucose + oxygen", "out"]],
    starch: [["Boil water", "soften"], ["Ethanol bath", "remove green"], ["Iodine", "test"], ["Blue-black", "starch"]],
    respiration: [["Glucose", "fuel"], ["Oxygen", "in"], ["Energy", "released"], ["Carbon dioxide", "out"]],
    nutrition: [["Carbs", "energy"], ["Protein", "growth"], ["Fibre", "gut"], ["Vitamins", "health"]],
    healthy: [["Balanced", "right amounts"], ["Exercise", "uses energy"], ["Too much sugar", "risk"], ["Sleep", "recovery"]],
    particles: [["Element", "one atom type"], ["Compound", "joined atoms"], ["Mixture", "not joined"], ["Separate", "physical"]],
    ph: [["Acid", "pH < 7"], ["Neutral", "pH 7"], ["Alkali", "pH > 7"], ["Neutralise", "salt + water"]],
    chromatography: [["Pencil line", "does not run"], ["Solvent", "moves"], ["Spots", "separate"], ["Mixture", "many dyes"]],
    air: [["Nitrogen", "78%"], ["Oxygen", "21%"], ["Carbon dioxide", "small"], ["Mixture", "not joined"]],
    energy: [["Chemical store", "battery/fuel"], ["Useful", "wanted"], ["Wasted", "heat/sound"], ["Transfer", "pathway"]],
    conservation: [["Input", "100 J"], ["Useful", "70 J"], ["Wasted", "30 J"], ["Total", "still 100 J"]],
    resources: [["Fossil fuels", "non-renewable"], ["Wind", "renewable"], ["Solar", "renewable"], ["Reliable?", "compare"]],
    pollution: [["Fuel burns", "CO2"], ["Greenhouse gas", "warmer"], ["SO2", "acid rain"], ["Particles", "lungs"]]
  };

  const items = contentByType[type] || contentByType.variables;
  items.forEach(([top, bottom], index) => {
    const tile = document.createElement("div");
    tile.className = `science-diagram-tile${index === 0 ? " hot" : ""}`;
    const strong = document.createElement("strong");
    strong.textContent = top;
    const span = document.createElement("span");
    span.textContent = bottom;
    tile.append(strong, span);
    visual.append(tile);
  });

  target.append(visual);
}

function filteredScienceTopics() {
  if (!scienceState.search) return scienceTopics;
  return scienceTopics.filter((topic) => {
    const questionText = topic.questions.map((question) => `${question.q} ${question.marks.join(" ")} ${question.examiner}`).join(" ");
    const haystack = [
      topic.area,
      topic.title,
      topic.tag,
      topic.pages,
      topic.examFocus,
      ...topic.remember,
      ...topic.traps,
      questionText
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(scienceState.search);
  });
}

function syncScienceToggleButtons() {
  scienceToggleButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.scienceView === scienceState.view);
  });
}

function pickScience(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffleScience(items) {
  return [...items].sort(() => Math.random() - 0.5);
}
