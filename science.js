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

const scienceDiagramData = {
  variables: {
    title: "Fair test map",
    caption: "Change one thing, measure one result, and lock the rest so the test is valid.",
    points: ["IV: changed by pupil", "DV: measured result", "Controls: kept same", "Repeats: reliable mean"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Fair testing diagram showing independent variable, dependent variable, controls and repeats">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#f7fbff" stroke="#d7dde8" />
        <rect x="54" y="68" width="170" height="72" rx="14" fill="#146c80" />
        <text x="139" y="96" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">Change</text>
        <text x="139" y="118" text-anchor="middle" font-size="13" fill="#d9f8f2">independent</text>
        <text x="139" y="134" text-anchor="middle" font-size="13" fill="#d9f8f2">variable</text>
        <path d="M232 104H316" stroke="#17386f" stroke-width="8" stroke-linecap="round" />
        <path d="M316 104l-18-14v28z" fill="#17386f" />
        <rect x="332" y="52" width="120" height="108" rx="18" fill="#ffffff" stroke="#146c80" stroke-width="4" />
        <path d="M372 94c0-22 40-22 40 0v16h-40z" fill="#e7f7ef" stroke="#1f7a5c" stroke-width="4" />
        <rect x="358" y="110" width="68" height="34" rx="6" fill="#1f7a5c" />
        <circle cx="392" cy="126" r="5" fill="#fff" />
        <text x="392" y="188" text-anchor="middle" font-size="18" font-weight="800" fill="#17386f">Fair test</text>
        <path d="M462 104H546" stroke="#17386f" stroke-width="8" stroke-linecap="round" />
        <path d="M546 104l-18-14v28z" fill="#17386f" />
        <rect x="560" y="68" width="120" height="72" rx="14" fill="#1f7a5c" />
        <text x="620" y="96" text-anchor="middle" font-size="18" font-weight="800" fill="#fff">Measure</text>
        <text x="620" y="119" text-anchor="middle" font-size="13" fill="#e7f7ef">dependent</text>
        <text x="620" y="135" text-anchor="middle" font-size="13" fill="#e7f7ef">variable</text>
        <rect x="58" y="220" width="198" height="68" rx="14" fill="#fff" stroke="#d7dde8" />
        <text x="157" y="248" text-anchor="middle" font-size="17" font-weight="800" fill="#17386f">Control variables</text>
        <text x="157" y="271" text-anchor="middle" font-size="13" fill="#3f4656">temperature, time</text>
        <text x="157" y="287" text-anchor="middle" font-size="13" fill="#3f4656">and amount</text>
        <rect x="288" y="220" width="142" height="68" rx="14" fill="#fff" stroke="#d7dde8" />
        <text x="359" y="248" text-anchor="middle" font-size="17" font-weight="800" fill="#17386f">Repeat</text>
        <text x="359" y="273" text-anchor="middle" font-size="14" fill="#3f4656">3 readings</text>
        <rect x="462" y="220" width="198" height="68" rx="14" fill="#fff" stroke="#d7dde8" />
        <text x="561" y="248" text-anchor="middle" font-size="17" font-weight="800" fill="#17386f">Mean</text>
        <text x="561" y="271" text-anchor="middle" font-size="13" fill="#3f4656">check anomaly</text>
        <text x="561" y="287" text-anchor="middle" font-size="13" fill="#3f4656">before mean</text>
      </svg>`
  },
  graphs: {
    title: "Results to graph",
    caption: "Continuous numbers need a line graph; categories need bars. Always show units.",
    points: ["x-axis = changed", "y-axis = measured", "Circle anomalies", "Use units in headings"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Line graph diagram with axes, units and an anomalous result">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#ffffff" stroke="#d7dde8" />
        <rect x="52" y="64" width="160" height="216" rx="14" fill="#f8fafc" stroke="#d7dde8" />
        <text x="132" y="92" text-anchor="middle" font-size="17" font-weight="800" fill="#17386f">Table</text>
        <line x1="74" y1="116" x2="190" y2="116" stroke="#d7dde8" />
        <line x1="132" y1="104" x2="132" y2="260" stroke="#d7dde8" />
        <text x="102" y="142" text-anchor="middle" font-size="13" fill="#3f4656">time / s</text>
        <text x="162" y="142" text-anchor="middle" font-size="13" fill="#3f4656">temp / C</text>
        <text x="102" y="178" text-anchor="middle" font-size="15" fill="#3f4656">1</text>
        <text x="162" y="178" text-anchor="middle" font-size="15" fill="#3f4656">72</text>
        <text x="102" y="214" text-anchor="middle" font-size="15" fill="#3f4656">2</text>
        <text x="162" y="214" text-anchor="middle" font-size="15" fill="#3f4656">64</text>
        <text x="102" y="250" text-anchor="middle" font-size="15" fill="#3f4656">3</text>
        <text x="162" y="250" text-anchor="middle" font-size="15" fill="#c43d4b">91</text>
        <path d="M230 178h60" stroke="#17386f" stroke-width="8" stroke-linecap="round" />
        <path d="M290 178l-18-14v28z" fill="#17386f" />
        <rect x="318" y="58" width="340" height="236" rx="14" fill="#f7fbff" stroke="#d7dde8" />
        <line x1="376" y1="244" x2="620" y2="244" stroke="#17386f" stroke-width="4" />
        <line x1="376" y1="244" x2="376" y2="92" stroke="#17386f" stroke-width="4" />
        <text x="498" y="278" text-anchor="middle" font-size="15" font-weight="800" fill="#17386f">time / s</text>
        <text x="344" y="160" transform="rotate(-90 344 160)" text-anchor="middle" font-size="15" font-weight="800" fill="#17386f">temperature / C</text>
        <polyline points="390,124 448,146 506,172 564,202" fill="none" stroke="#146c80" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="390" cy="124" r="7" fill="#146c80" />
        <circle cx="448" cy="146" r="7" fill="#146c80" />
        <circle cx="506" cy="108" r="8" fill="#c43d4b" />
        <circle cx="506" cy="108" r="18" fill="none" stroke="#c43d4b" stroke-width="3" stroke-dasharray="6 6" />
        <circle cx="564" cy="202" r="7" fill="#146c80" />
        <text x="582" y="106" font-size="14" font-weight="800" fill="#c43d4b">anomaly</text>
      </svg>`
  },
  evaluation: {
    title: "Conclusion ladder",
    caption: "Build answers in this order: pattern, evidence, reliability, improvement.",
    points: ["Pattern first", "Quote numbers", "Judge reliability", "Improve the method"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Conclusion ladder with pattern, evidence, reliability and improvement steps">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#f7fbff" stroke="#d7dde8" />
        <path d="M170 292h380" stroke="#d7dde8" stroke-width="10" stroke-linecap="round" />
        <rect x="120" y="236" width="160" height="52" rx="12" fill="#146c80" />
        <rect x="220" y="178" width="160" height="52" rx="12" fill="#1f7a5c" />
        <rect x="320" y="120" width="160" height="52" rx="12" fill="#b55b00" />
        <rect x="420" y="62" width="160" height="52" rx="12" fill="#7250b5" />
        <text x="200" y="268" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">Pattern</text>
        <text x="300" y="210" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">Evidence</text>
        <text x="400" y="152" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">Reliability</text>
        <text x="500" y="94" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">Improve</text>
        <path d="M202 234l56-42M302 176l56-42M402 118l56-42" stroke="#17386f" stroke-width="5" stroke-linecap="round" marker-end="url(#scienceArrowEval)" />
        <defs><marker id="scienceArrowEval" markerWidth="14" markerHeight="14" refX="9" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L14 7L0 14z" fill="#17386f" /></marker></defs>
        <rect x="90" y="66" width="210" height="92" rx="14" fill="#fff" stroke="#d7dde8" />
        <text x="195" y="96" text-anchor="middle" font-size="16" font-weight="900" fill="#17386f">CE frame</text>
        <text x="195" y="122" text-anchor="middle" font-size="14" fill="#3f4656">As X increased,</text>
        <text x="195" y="144" text-anchor="middle" font-size="14" fill="#3f4656">Y changed...</text>
      </svg>`
  },
  photosynthesis: {
    title: "Photosynthesis inputs and outputs",
    caption: "The plant uses light energy to make glucose; oxygen is a by-product.",
    points: ["CO2 enters leaves", "Water comes from roots", "Light and chlorophyll needed", "Glucose can become starch"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Photosynthesis diagram showing carbon dioxide, water and light making glucose and oxygen">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#f7fbff" stroke="#d7dde8" />
        <circle cx="118" cy="90" r="40" fill="#ffd166" stroke="#b55b00" stroke-width="4" />
        <g stroke="#b55b00" stroke-width="5" stroke-linecap="round">
          <line x1="118" y1="30" x2="118" y2="8" /><line x1="118" y1="172" x2="118" y2="146" />
          <line x1="58" y1="90" x2="32" y2="90" /><line x1="204" y1="90" x2="178" y2="90" />
          <line x1="76" y1="48" x2="58" y2="30" /><line x1="160" y1="132" x2="178" y2="150" />
          <line x1="160" y1="48" x2="178" y2="30" /><line x1="76" y1="132" x2="58" y2="150" />
        </g>
        <path d="M340 92c98-72 198 6 168 104-26 86-164 96-220 30-52-62-16-110 52-134z" fill="#55a56f" stroke="#1f7a5c" stroke-width="5" />
        <path d="M346 242c42-42 82-88 132-136" stroke="#174a38" stroke-width="5" stroke-linecap="round" />
        <path d="M198 164h94" stroke="#146c80" stroke-width="6" stroke-linecap="round" marker-end="url(#scienceArrowPhotoIn)" />
        <path d="M244 262h72" stroke="#146c80" stroke-width="6" stroke-linecap="round" marker-end="url(#scienceArrowPhotoIn)" />
        <path d="M526 164h94" stroke="#1f7a5c" stroke-width="6" stroke-linecap="round" marker-end="url(#scienceArrowPhotoOut)" />
        <path d="M526 218h94" stroke="#1f7a5c" stroke-width="6" stroke-linecap="round" marker-end="url(#scienceArrowPhotoOut)" />
        <defs>
          <marker id="scienceArrowPhotoIn" markerWidth="14" markerHeight="14" refX="9" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L14 7L0 14z" fill="#146c80" /></marker>
          <marker id="scienceArrowPhotoOut" markerWidth="14" markerHeight="14" refX="9" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L14 7L0 14z" fill="#1f7a5c" /></marker>
        </defs>
        <rect x="118" y="128" width="74" height="44" rx="10" fill="#fff" stroke="#146c80" />
        <text x="155" y="156" text-anchor="middle" font-size="16" font-weight="900" fill="#146c80">CO2</text>
        <rect x="166" y="248" width="76" height="44" rx="10" fill="#fff" stroke="#146c80" />
        <text x="204" y="276" text-anchor="middle" font-size="16" font-weight="900" fill="#146c80">H2O</text>
        <rect x="622" y="142" width="68" height="44" rx="10" fill="#fff" stroke="#1f7a5c" />
        <text x="656" y="170" text-anchor="middle" font-size="16" font-weight="900" fill="#1f7a5c">O2</text>
        <rect x="622" y="198" width="78" height="44" rx="10" fill="#fff" stroke="#1f7a5c" />
        <text x="661" y="226" text-anchor="middle" font-size="15" font-weight="900" fill="#1f7a5c">glucose</text>
        <rect x="304" y="276" width="128" height="34" rx="10" fill="#fff" stroke="#17386f" />
        <text x="368" y="299" text-anchor="middle" font-size="15" font-weight="900" fill="#17386f">starch store</text>
      </svg>`
  },
  starch: {
    title: "Starch test sequence",
    caption: "The order earns marks: boil, ethanol water bath, rinse, iodine.",
    points: ["Boil to soften", "Ethanol removes chlorophyll", "Use a water bath", "Blue-black = starch"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Testing a leaf for starch practical sequence">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#ffffff" stroke="#d7dde8" />
        <g fill="#f8fafc" stroke="#d7dde8"><rect x="48" y="68" width="136" height="210" rx="14" /><rect x="212" y="68" width="136" height="210" rx="14" /><rect x="376" y="68" width="136" height="210" rx="14" /><rect x="540" y="68" width="136" height="210" rx="14" /></g>
        <text x="116" y="104" text-anchor="middle" font-size="17" font-weight="900" fill="#17386f">1 Boil</text>
        <path d="M82 178h68l-12 52H94z" fill="#d9f8f2" stroke="#146c80" stroke-width="4" />
        <ellipse cx="116" cy="176" rx="35" ry="8" fill="#ffffff" stroke="#146c80" stroke-width="4" />
        <path d="M96 154c10-22 40-22 50 0" fill="none" stroke="#55a56f" stroke-width="8" stroke-linecap="round" />
        <text x="280" y="104" text-anchor="middle" font-size="17" font-weight="900" fill="#17386f">2 Ethanol</text>
        <rect x="246" y="144" width="68" height="96" rx="10" fill="#fff7e8" stroke="#b55b00" stroke-width="4" />
        <path d="M230 214h100" stroke="#146c80" stroke-width="8" stroke-linecap="round" />
        <text x="280" y="264" text-anchor="middle" font-size="13" fill="#c43d4b">no direct flame</text>
        <text x="444" y="104" text-anchor="middle" font-size="17" font-weight="900" fill="#17386f">3 Rinse</text>
        <path d="M410 164c26-36 72-14 66 30-5 36-52 48-74 20-18-22-10-38 8-50z" fill="#82c596" stroke="#1f7a5c" stroke-width="4" />
        <path d="M430 144c28 14 46 14 72 0" fill="none" stroke="#146c80" stroke-width="5" stroke-linecap="round" />
        <path d="M424 136l-10 16M456 136l-10 16M488 136l-10 16" stroke="#146c80" stroke-width="4" stroke-linecap="round" />
        <text x="608" y="104" text-anchor="middle" font-size="17" font-weight="900" fill="#17386f">4 Iodine</text>
        <path d="M574 178c26-38 78-16 68 32-8 38-60 46-82 14-16-22-6-36 14-46z" fill="#21306b" stroke="#111936" stroke-width="4" />
        <path d="M620 140c0 18-20 18-20 0 0-10 10-24 10-24s10 14 10 24z" fill="#b55b00" />
        <text x="608" y="264" text-anchor="middle" font-size="14" font-weight="900" fill="#21306b">blue-black</text>
      </svg>`
  },
  respiration: {
    title: "Respiration is in cells",
    caption: "Breathing brings oxygen in; respiration releases energy inside cells.",
    points: ["Glucose + oxygen", "Occurs in cells", "Energy released", "CO2 + water made"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Aerobic respiration diagram in a cell">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#f7fbff" stroke="#d7dde8" />
        <ellipse cx="366" cy="184" rx="170" ry="108" fill="#ffffff" stroke="#146c80" stroke-width="5" />
        <ellipse cx="368" cy="184" rx="76" ry="44" fill="#ffd166" stroke="#b55b00" stroke-width="5" />
        <path d="M318 184c26-26 74 26 100 0" fill="none" stroke="#b55b00" stroke-width="5" stroke-linecap="round" />
        <text x="368" y="190" text-anchor="middle" font-size="17" font-weight="900" fill="#17386f">mitochondrion</text>
        <path d="M88 130h134" stroke="#146c80" stroke-width="7" stroke-linecap="round" marker-end="url(#scienceArrowResp)" />
        <path d="M88 226h134" stroke="#146c80" stroke-width="7" stroke-linecap="round" marker-end="url(#scienceArrowResp)" />
        <path d="M514 134h116" stroke="#1f7a5c" stroke-width="7" stroke-linecap="round" marker-end="url(#scienceArrowResp)" />
        <path d="M514 224h116" stroke="#1f7a5c" stroke-width="7" stroke-linecap="round" marker-end="url(#scienceArrowResp)" />
        <defs><marker id="scienceArrowResp" markerWidth="14" markerHeight="14" refX="9" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L14 7L0 14z" fill="#17386f" /></marker></defs>
        <text x="86" y="118" font-size="18" font-weight="900" fill="#146c80">glucose</text>
        <text x="86" y="214" font-size="18" font-weight="900" fill="#146c80">oxygen</text>
        <text x="548" y="122" font-size="18" font-weight="900" fill="#1f7a5c">energy</text>
        <text x="548" y="214" font-size="18" font-weight="900" fill="#1f7a5c">CO2 + water</text>
        <text x="366" y="294" text-anchor="middle" font-size="16" font-weight="900" fill="#17386f">glucose + oxygen</text>
        <text x="366" y="316" text-anchor="middle" font-size="16" font-weight="900" fill="#17386f">-> CO2 + water + energy</text>
      </svg>`
  },
  nutrition: {
    title: "Seven food groups",
    caption: "Match each nutrient to its main job before answering diet questions.",
    points: ["Carbs: energy", "Protein: growth and repair", "Fibre: gut movement", "Water: body processes"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Balanced diet plate showing nutrient jobs">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#ffffff" stroke="#d7dde8" />
        <circle cx="242" cy="180" r="104" fill="#f8fafc" stroke="#17386f" stroke-width="5" />
        <path d="M242 180L242 76A104 104 0 0 1 340 146z" fill="#ffd166" />
        <path d="M242 180L340 146A104 104 0 0 1 312 258z" fill="#55a56f" />
        <path d="M242 180L312 258A104 104 0 0 1 146 252z" fill="#c43d4b" />
        <path d="M242 180L146 252A104 104 0 0 1 242 76z" fill="#6aa7d8" />
        <circle cx="242" cy="180" r="42" fill="#ffffff" stroke="#d7dde8" stroke-width="4" />
        <text x="242" y="174" text-anchor="middle" font-size="16" font-weight="900" fill="#17386f">balanced</text>
        <text x="242" y="196" text-anchor="middle" font-size="16" font-weight="900" fill="#17386f">diet</text>
        <g font-size="16" font-weight="900" fill="#17386f">
          <text x="420" y="102">carbs -> energy</text>
          <text x="420" y="144">protein -> growth/repair</text>
          <text x="420" y="186">fat -> energy store</text>
          <text x="420" y="228">vitamins -> health</text>
          <text x="420" y="270">fibre + water -> gut</text>
        </g>
        <g stroke="#d7dde8" stroke-width="3"><line x1="400" y1="112" x2="648" y2="112" /><line x1="400" y1="154" x2="648" y2="154" /><line x1="400" y1="196" x2="648" y2="196" /><line x1="400" y1="238" x2="648" y2="238" /></g>
      </svg>`
  },
  healthy: {
    title: "Health is a balance",
    caption: "Diet, exercise, sleep and age all affect the amount of energy and nutrients needed.",
    points: ["Balanced means right amounts", "Needs change with activity", "Too much energy can be stored", "Exercise uses energy"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Health balance diagram comparing energy intake and energy use">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#f7fbff" stroke="#d7dde8" />
        <line x1="360" y1="102" x2="360" y2="264" stroke="#17386f" stroke-width="8" stroke-linecap="round" />
        <line x1="218" y1="154" x2="502" y2="154" stroke="#17386f" stroke-width="8" stroke-linecap="round" />
        <path d="M218 154l-72 92h144z" fill="#ffffff" stroke="#146c80" stroke-width="5" />
        <path d="M502 154l-72 92h144z" fill="#ffffff" stroke="#1f7a5c" stroke-width="5" />
        <text x="218" y="218" text-anchor="middle" font-size="19" font-weight="900" fill="#146c80">energy in</text>
        <text x="502" y="218" text-anchor="middle" font-size="19" font-weight="900" fill="#1f7a5c">energy used</text>
        <rect x="98" y="78" width="210" height="48" rx="12" fill="#146c80" />
        <text x="203" y="108" text-anchor="middle" font-size="17" font-weight="900" fill="#fff">food and drink</text>
        <rect x="412" y="78" width="210" height="48" rx="12" fill="#1f7a5c" />
        <text x="517" y="98" text-anchor="middle" font-size="15" font-weight="900" fill="#fff">exercise</text>
        <text x="517" y="120" text-anchor="middle" font-size="15" font-weight="900" fill="#fff">and growth</text>
        <rect x="254" y="282" width="212" height="34" rx="10" fill="#fff" stroke="#d7dde8" />
        <text x="360" y="305" text-anchor="middle" font-size="15" font-weight="900" fill="#17386f">balanced needs</text>
      </svg>`
  },
  particles: {
    title: "Particle diagrams",
    caption: "Look for atom type and whether particles are chemically joined.",
    points: ["Element: one atom type", "Compound: joined atoms", "Mixture: not joined", "Physical methods separate mixtures"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Particle diagrams for element compound and mixture">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#ffffff" stroke="#d7dde8" />
        <g>
          <rect x="58" y="76" width="174" height="208" rx="16" fill="#f8fafc" stroke="#d7dde8" />
          <text x="145" y="110" text-anchor="middle" font-size="19" font-weight="900" fill="#17386f">Element</text>
          <circle cx="112" cy="160" r="18" fill="#146c80" /><circle cx="174" cy="160" r="18" fill="#146c80" /><circle cx="112" cy="224" r="18" fill="#146c80" /><circle cx="174" cy="224" r="18" fill="#146c80" />
          <text x="145" y="262" text-anchor="middle" font-size="14" fill="#3f4656">one atom type</text>
        </g>
        <g>
          <rect x="274" y="76" width="174" height="208" rx="16" fill="#f8fafc" stroke="#d7dde8" />
          <text x="361" y="110" text-anchor="middle" font-size="19" font-weight="900" fill="#17386f">Compound</text>
          <g stroke="#17386f" stroke-width="4"><line x1="330" y1="166" x2="366" y2="166" /><line x1="330" y1="224" x2="366" y2="224" /></g>
          <circle cx="320" cy="166" r="18" fill="#146c80" /><circle cx="374" cy="166" r="18" fill="#c43d4b" /><circle cx="320" cy="224" r="18" fill="#146c80" /><circle cx="374" cy="224" r="18" fill="#c43d4b" />
          <text x="361" y="262" text-anchor="middle" font-size="14" fill="#3f4656">chemically joined</text>
        </g>
        <g>
          <rect x="490" y="76" width="174" height="208" rx="16" fill="#f8fafc" stroke="#d7dde8" />
          <text x="577" y="110" text-anchor="middle" font-size="19" font-weight="900" fill="#17386f">Mixture</text>
          <circle cx="540" cy="154" r="17" fill="#146c80" /><circle cx="604" cy="166" r="17" fill="#c43d4b" /><circle cx="558" cy="226" r="17" fill="#1f7a5c" />
          <g stroke="#17386f" stroke-width="4"><line x1="596" y1="218" x2="628" y2="218" /></g>
          <circle cx="588" cy="218" r="16" fill="#146c80" /><circle cx="636" cy="218" r="16" fill="#c43d4b" />
          <text x="577" y="262" text-anchor="middle" font-size="14" fill="#3f4656">not all joined</text>
        </g>
      </svg>`
  },
  ph: {
    title: "pH scale and neutralisation",
    caption: "Lower pH is more acidic; higher pH is more alkaline. Neutralisation moves towards 7.",
    points: ["Acid: pH below 7", "Neutral: pH 7", "Alkali: pH above 7", "acid + alkali -> salt + water"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="pH scale diagram from acid to neutral to alkali">
        <defs>
          <linearGradient id="sciencePhGradient" x1="0" x2="1"><stop offset="0%" stop-color="#c43d4b" /><stop offset="50%" stop-color="#55a56f" /><stop offset="100%" stop-color="#7250b5" /></linearGradient>
        </defs>
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#ffffff" stroke="#d7dde8" />
        <rect x="84" y="146" width="552" height="54" rx="16" fill="url(#sciencePhGradient)" />
        <g font-size="15" font-weight="900" fill="#17386f">
          <text x="84" y="228" text-anchor="middle">0</text><text x="360" y="228" text-anchor="middle">7</text><text x="636" y="228" text-anchor="middle">14</text>
        </g>
        <line x1="360" y1="132" x2="360" y2="212" stroke="#17386f" stroke-width="5" />
        <text x="180" y="118" text-anchor="middle" font-size="22" font-weight="900" fill="#c43d4b">acid</text>
        <text x="360" y="118" text-anchor="middle" font-size="22" font-weight="900" fill="#1f7a5c">neutral</text>
        <text x="540" y="118" text-anchor="middle" font-size="22" font-weight="900" fill="#7250b5">alkali</text>
        <path d="M196 272h328" stroke="#17386f" stroke-width="6" stroke-linecap="round" marker-end="url(#scienceArrowPh)" />
        <defs><marker id="scienceArrowPh" markerWidth="14" markerHeight="14" refX="9" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L14 7L0 14z" fill="#17386f" /></marker></defs>
        <text x="360" y="296" text-anchor="middle" font-size="16" font-weight="900" fill="#17386f">acid + alkali</text>
        <text x="360" y="318" text-anchor="middle" font-size="16" font-weight="900" fill="#17386f">-> salt + water</text>
      </svg>`
  },
  chromatography: {
    title: "Paper chromatography setup",
    caption: "The start spot must be above the solvent; pencil will not dissolve and run.",
    points: ["Pencil start line", "Spot above solvent", "Solvent front rises", "More spots = mixture"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Paper chromatography diagram with solvent front, pencil line and separated spots">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#f7fbff" stroke="#d7dde8" />
        <path d="M226 76h268l-28 220H254z" fill="#ffffff" stroke="#17386f" stroke-width="5" />
        <path d="M258 252h204" stroke="#6aa7d8" stroke-width="28" stroke-linecap="round" />
        <rect x="316" y="72" width="88" height="222" rx="4" fill="#fffdf6" stroke="#d7dde8" stroke-width="3" />
        <line x1="330" y1="240" x2="390" y2="240" stroke="#3f4656" stroke-width="3" stroke-dasharray="7 5" />
        <line x1="330" y1="118" x2="390" y2="118" stroke="#146c80" stroke-width="4" />
        <circle cx="360" cy="230" r="8" fill="#111936" />
        <circle cx="352" cy="190" r="9" fill="#c43d4b" />
        <circle cx="366" cy="160" r="9" fill="#b55b00" />
        <circle cx="354" cy="134" r="9" fill="#7250b5" />
        <text x="472" y="122" font-size="16" font-weight="900" fill="#146c80">solvent front</text>
        <text x="90" y="242" font-size="16" font-weight="900" fill="#17386f">pencil start line</text>
        <path d="M222 236h94" stroke="#17386f" stroke-width="4" stroke-linecap="round" marker-end="url(#scienceArrowChrom)" />
        <path d="M470 118h-72" stroke="#146c80" stroke-width="4" stroke-linecap="round" marker-end="url(#scienceArrowChrom)" />
        <defs><marker id="scienceArrowChrom" markerWidth="14" markerHeight="14" refX="9" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L14 7L0 14z" fill="#17386f" /></marker></defs>
        <text x="360" y="306" text-anchor="middle" font-size="16" font-weight="900" fill="#17386f">dyes travel</text>
        <text x="360" y="328" text-anchor="middle" font-size="16" font-weight="900" fill="#17386f">different distances</text>
      </svg>`
  },
  air: {
    title: "Air composition",
    caption: "Air is a mixture because gases are together but not chemically joined.",
    points: ["Nitrogen about 78%", "Oxygen about 21%", "CO2 is small", "Proportions can vary"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Air composition bar showing nitrogen oxygen and trace gases">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#ffffff" stroke="#d7dde8" />
        <rect x="82" y="150" width="556" height="62" rx="18" fill="#f8fafc" stroke="#d7dde8" />
        <rect x="82" y="150" width="434" height="62" rx="18" fill="#146c80" />
        <rect x="500" y="150" width="118" height="62" fill="#1f7a5c" />
        <rect x="612" y="150" width="26" height="62" rx="12" fill="#b55b00" />
        <text x="292" y="188" text-anchor="middle" font-size="22" font-weight="900" fill="#fff">nitrogen 78%</text>
        <text x="558" y="188" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">O2 21%</text>
        <text x="625" y="238" text-anchor="middle" font-size="14" font-weight="900" fill="#b55b00">trace</text>
        <rect x="98" y="82" width="198" height="44" rx="12" fill="#e7f7ef" stroke="#1f7a5c" />
        <text x="197" y="99" text-anchor="middle" font-size="14" font-weight="900" fill="#174a38">not chemically</text>
        <text x="197" y="122" text-anchor="middle" font-size="14" font-weight="900" fill="#174a38">joined</text>
        <rect x="424" y="82" width="198" height="44" rx="12" fill="#eef4ff" stroke="#146c80" />
        <text x="523" y="99" text-anchor="middle" font-size="14" font-weight="900" fill="#17386f">separable</text>
        <text x="523" y="122" text-anchor="middle" font-size="14" font-weight="900" fill="#17386f">physically</text>
        <text x="360" y="290" text-anchor="middle" font-size="18" font-weight="900" fill="#17386f">mixture</text>
      </svg>`
  },
  energy: {
    title: "Energy transfer diagram",
    caption: "Name the starting store, useful transfer and wasted transfer for the device.",
    points: ["Stores are nouns", "Transfers are pathways", "Useful = wanted output", "Wasted = surroundings"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Sankey style energy transfer diagram">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#f7fbff" stroke="#d7dde8" />
        <rect x="72" y="134" width="160" height="82" rx="16" fill="#146c80" />
        <text x="152" y="168" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">chemical</text>
        <text x="152" y="194" text-anchor="middle" font-size="16" fill="#d9f8f2">store</text>
        <path d="M240 176h168" stroke="#17386f" stroke-width="34" stroke-linecap="round" />
        <path d="M408 176l-28-22v44z" fill="#17386f" />
        <path d="M418 176h168" stroke="#1f7a5c" stroke-width="28" stroke-linecap="round" />
        <path d="M586 176l-24-18v36z" fill="#1f7a5c" />
        <path d="M414 198c40 48 84 70 136 72" fill="none" stroke="#c43d4b" stroke-width="20" stroke-linecap="round" />
        <text x="514" y="152" text-anchor="middle" font-size="18" font-weight="900" fill="#1f7a5c">useful light</text>
        <text x="534" y="296" text-anchor="middle" font-size="16" font-weight="900" fill="#c43d4b">wasted</text>
        <text x="534" y="316" text-anchor="middle" font-size="16" font-weight="900" fill="#c43d4b">heat/sound</text>
        <text x="326" y="122" text-anchor="middle" font-size="16" font-weight="900" fill="#17386f">transfer pathway</text>
      </svg>`
  },
  conservation: {
    title: "Energy is conserved",
    caption: "Wasted energy has not disappeared; it has spread into the surroundings.",
    points: ["Input total stays same", "Useful output is smaller", "Wasted is dissipated", "100 J = 70 J + 30 J"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Energy conservation split of 100 joules into useful and wasted energy">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#ffffff" stroke="#d7dde8" />
        <rect x="68" y="124" width="150" height="112" rx="18" fill="#146c80" />
        <text x="143" y="172" text-anchor="middle" font-size="26" font-weight="900" fill="#fff">100 J</text>
        <text x="143" y="202" text-anchor="middle" font-size="17" fill="#d9f8f2">input</text>
        <path d="M238 180h106" stroke="#17386f" stroke-width="12" stroke-linecap="round" marker-end="url(#scienceArrowCons)" />
        <defs><marker id="scienceArrowCons" markerWidth="14" markerHeight="14" refX="9" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L14 7L0 14z" fill="#17386f" /></marker></defs>
        <rect x="378" y="92" width="122" height="86" rx="16" fill="#1f7a5c" />
        <text x="439" y="130" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">70 J</text>
        <text x="439" y="156" text-anchor="middle" font-size="15" fill="#e7f7ef">useful</text>
        <rect x="378" y="204" width="122" height="86" rx="16" fill="#c43d4b" />
        <text x="439" y="242" text-anchor="middle" font-size="24" font-weight="900" fill="#fff">30 J</text>
        <text x="439" y="268" text-anchor="middle" font-size="15" fill="#ffe8ea">wasted</text>
        <text x="580" y="186" text-anchor="middle" font-size="38" font-weight="900" fill="#17386f">=</text>
        <text x="580" y="226" text-anchor="middle" font-size="17" font-weight="900" fill="#17386f">same total</text>
      </svg>`
  },
  resources: {
    title: "Energy resource comparison",
    caption: "Comparison answers need both sides: renewable status, pollution and reliability.",
    points: ["Renewable replaces quickly", "Non-renewable runs out", "Fossil fuels release CO2", "Weather affects some renewables"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 406" role="img" aria-label="Renewable and non-renewable energy resources comparison">
        <defs>
          <clipPath id="scienceEnergyResourcesClip"><rect x="24" y="28" width="672" height="378" rx="22" /></clipPath>
        </defs>
        <rect x="24" y="28" width="672" height="378" rx="22" fill="#f7fbff" stroke="#d7dde8" />
        <image href="assets/science/energy-resources-illustration.jpg" x="24" y="28" width="672" height="378" preserveAspectRatio="xMidYMid slice" clip-path="url(#scienceEnergyResourcesClip)" />
        <rect x="58" y="50" width="250" height="50" rx="14" fill="#e7f7ef" fill-opacity="0.94" stroke="#1f7a5c" />
        <text x="183" y="83" text-anchor="middle" font-size="24" font-weight="900" fill="#174a38">renewable</text>
        <rect x="412" y="50" width="250" height="50" rx="14" fill="#fff7e8" fill-opacity="0.94" stroke="#b55b00" />
        <text x="537" y="83" text-anchor="middle" font-size="23" font-weight="900" fill="#7a3c00">non-renewable</text>
        <rect x="68" y="324" width="254" height="48" rx="14" fill="#ffffff" fill-opacity="0.94" stroke="#1f7a5c" />
        <text x="195" y="355" text-anchor="middle" font-size="18" font-weight="900" fill="#174a38">wind, solar, hydro</text>
        <rect x="398" y="324" width="254" height="48" rx="14" fill="#ffffff" fill-opacity="0.94" stroke="#b55b00" />
        <text x="525" y="355" text-anchor="middle" font-size="18" font-weight="900" fill="#7a3c00">coal, oil, gas</text>
      </svg>`
  },
  pollution: {
    title: "Fossil fuel effects chain",
    caption: "Name the pollutant, then match it to the correct environmental or health effect.",
    points: ["CO2: greenhouse effect", "SO2: acid rain", "Particulates: breathing problems", "Reduce by using less fossil fuel"],
    svg: `
      <svg class="science-diagram-svg" viewBox="0 0 720 360" role="img" aria-label="Fossil fuel pollution effects showing carbon dioxide sulfur dioxide and particulates">
        <rect x="24" y="28" width="672" height="304" rx="22" fill="#ffffff" stroke="#d7dde8" />
        <rect x="74" y="190" width="150" height="78" rx="12" fill="#3f4656" />
        <rect x="106" y="132" width="24" height="58" fill="#667085" />
        <rect x="164" y="112" width="24" height="78" fill="#667085" />
        <path d="M118 118c-22-26 18-38 0-64M176 98c-22-26 18-38 0-64" fill="none" stroke="#667085" stroke-width="9" stroke-linecap="round" />
        <text x="149" y="292" text-anchor="middle" font-size="15" font-weight="900" fill="#17386f">burning fuel</text>
        <path d="M238 170h96" stroke="#17386f" stroke-width="7" stroke-linecap="round" marker-end="url(#scienceArrowPoll)" />
        <defs><marker id="scienceArrowPoll" markerWidth="14" markerHeight="14" refX="9" refY="7" orient="auto" markerUnits="userSpaceOnUse"><path d="M0 0L14 7L0 14z" fill="#17386f" /></marker></defs>
        <rect x="354" y="62" width="120" height="58" rx="14" fill="#c43d4b" />
        <text x="414" y="98" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">CO2</text>
        <path d="M374 132c58 38 106 38 164 0" fill="none" stroke="#c43d4b" stroke-width="8" stroke-linecap="round" />
        <text x="456" y="168" text-anchor="middle" font-size="15" font-weight="900" fill="#c43d4b">heat trapped</text>
        <rect x="354" y="198" width="120" height="58" rx="14" fill="#b55b00" />
        <text x="414" y="234" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">SO2</text>
        <path d="M500 210c34-32 92-12 98 34" fill="none" stroke="#146c80" stroke-width="7" stroke-linecap="round" />
        <path d="M536 248l-12 24M570 248l-12 24M604 248l-12 24" stroke="#146c80" stroke-width="5" stroke-linecap="round" />
        <text x="562" y="308" text-anchor="middle" font-size="15" font-weight="900" fill="#146c80">acid rain</text>
        <circle cx="560" cy="94" r="8" fill="#3f4656" /><circle cx="586" cy="116" r="6" fill="#3f4656" /><circle cx="612" cy="86" r="7" fill="#3f4656" />
        <text x="592" y="148" text-anchor="middle" font-size="15" font-weight="900" fill="#3f4656">particulates</text>
      </svg>`
  }
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

  const data = scienceDiagramData[type] || scienceDiagramData.variables;
  const visual = document.createElement("div");
  visual.className = `science-diagram ${type}`;

  const heading = document.createElement("div");
  heading.className = "science-diagram-heading";
  const title = document.createElement("strong");
  title.textContent = data.title;
  const caption = document.createElement("span");
  caption.textContent = data.caption;
  heading.append(title, caption);

  const artwork = document.createElement("div");
  artwork.className = "science-diagram-artwork";
  artwork.innerHTML = data.svg;

  const labels = document.createElement("div");
  labels.className = "science-diagram-labels";
  data.points.forEach((point) => {
    const label = document.createElement("span");
    label.className = "science-diagram-label";
    label.textContent = point;
    labels.append(label);
  });

  visual.append(heading, artwork, labels);
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
