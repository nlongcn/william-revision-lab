const topics = [
  {
    id: "directed-numbers",
    title: "Directed numbers",
    tag: "Positive and negative numbers",
    explain:
      "Directed numbers are numbers with a direction: positive numbers are above zero and negative numbers are below zero. Think of a number line. Adding moves right, subtracting moves left, multiplying or dividing follows sign rules.",
    catches: [
      "Subtracting a negative means the direction flips: 7 - (-3) = 10.",
      "Two minus signs together often turn into a plus, but only when they are next to each other in the calculation.",
      "For multiplication and division, same signs give positive, different signs give negative."
    ],
    hacks: [
      "Draw a quick number line for adding and subtracting until it becomes automatic.",
      "For multiplication and division, ignore the signs first, then decide the sign at the end.",
      "Read '-(-' as 'take away a debt', so the total goes up."
    ],
    example: {
      question: "Work out -4 + 9 - (-3).",
      steps: [
        "-4 + 9 = 5.",
        "Subtracting -3 is the same as adding 3.",
        "5 + 3 = 8."
      ],
      answer: "8"
    },
    practice: [
      ["Work out -8 + 13.", "5"],
      ["Work out 6 - (-7).", "13"],
      ["Work out -5 x 4.", "-20"]
    ],
    more: () => {
      const a = rand(-12, 12);
      const b = rand(-12, 12);
      const type = pick(["add", "subtract", "multiply"]);
      if (type === "add") return [`Work out ${fmt(a)} + ${fmt(b)}.`, String(a + b)];
      if (type === "subtract") return [`Work out ${fmt(a)} - (${fmt(b)}).`, String(a - b)];
      return [`Work out ${fmt(a)} x ${fmt(b)}.`, String(a * b)];
    }
  },
  {
    id: "standard-form",
    title: "Standard form",
    tag: "Very big and very small numbers",
    explain:
      "Standard form writes a number as A x 10^n, where A is at least 1 but less than 10. It makes huge and tiny numbers easier to compare and calculate with.",
    catches: [
      "The first number must be less than 10. 42 x 10^3 is not standard form.",
      "Moving the decimal left gives a positive power for big numbers.",
      "Moving the decimal right gives a negative power for small decimals."
    ],
    hacks: [
      "Count decimal jumps, not zeros.",
      "Big number to standard form: decimal moves left, power is positive.",
      "Tiny decimal to standard form: decimal moves right, power is negative."
    ],
    example: {
      question: "Write 48,200 in standard form.",
      steps: [
        "Move the decimal so the first number is between 1 and 10: 4.82.",
        "The decimal moved 4 places left.",
        "So 48,200 = 4.82 x 10^4."
      ],
      answer: "4.82 x 10^4"
    },
    practice: [
      ["Write 6,300 in standard form.", "6.3 x 10^3"],
      ["Write 0.0045 in standard form.", "4.5 x 10^-3"],
      ["Write 2.1 x 10^5 as an ordinary number.", "210,000"]
    ],
    more: () => {
      const mode = pick(["big", "small", "ordinary"]);
      if (mode === "big") {
        const a = rand(12, 98);
        const zeros = rand(2, 5);
        const value = a * 10 ** zeros;
        return [`Write ${value.toLocaleString("en-GB")} in standard form.`, `${a / 10} x 10^${zeros + 1}`];
      }
      if (mode === "small") {
        const a = rand(12, 98);
        const places = rand(3, 5);
        const value = a / 10 ** places;
        return [`Write ${trim(value)} in standard form.`, `${a / 10} x 10^-${places - 1}`];
      }
      const coeff = rand(12, 98) / 10;
      const power = rand(2, 5);
      return [`Write ${coeff} x 10^${power} as an ordinary number.`, String(coeff * 10 ** power)];
    }
  },
  {
    id: "rounding-decimal-places",
    title: "Rounding to decimal places",
    tag: "Accuracy",
    explain:
      "Rounding to decimal places means keeping a set number of digits after the decimal point. Look at the next digit to decide whether the final kept digit stays the same or goes up.",
    catches: [
      "Decimal places are counted after the decimal point, not from the start of the number.",
      "Zeros can matter. 3.40 to 2 decimal places is not the same as 3.4 if the question asks for 2 decimal places.",
      "Only look at the next digit, not every digit after it."
    ],
    hacks: [
      "Underline the last digit you are keeping, then circle the next digit.",
      "5 or more: raise the score. 4 or less: let it rest.",
      "Add zeros if needed to show the requested number of decimal places."
    ],
    example: {
      question: "Round 7.386 to 2 decimal places.",
      steps: [
        "Two decimal places means keep 7.38.",
        "The next digit is 6.",
        "6 makes the 8 round up, so the answer is 7.39."
      ],
      answer: "7.39"
    },
    practice: [
      ["Round 5.274 to 2 decimal places.", "5.27"],
      ["Round 12.996 to 1 decimal place.", "13.0"],
      ["Round 0.0837 to 3 decimal places.", "0.084"]
    ],
    more: () => {
      const value = rand(1000, 9999) / 1000;
      const dp = rand(1, 3);
      return [`Round ${value} to ${dp} decimal place${dp === 1 ? "" : "s"}.`, value.toFixed(dp)];
    }
  },
  {
    id: "area-parallelogram",
    title: "Area of a parallelogram",
    tag: "Geometry",
    explain:
      "A parallelogram is like a rectangle that has been pushed sideways. Its area is base x perpendicular height. The slanted side is not the height unless it meets the base at a right angle.",
    catches: [
      "Using the sloping side instead of the perpendicular height.",
      "Forgetting square units, like cm^2 or m^2.",
      "Mixing units before multiplying."
    ],
    hacks: [
      "Imagine cutting off the triangle on one side and moving it to the other side to make a rectangle.",
      "Look for the right-angle marker: that tells you the height.",
      "Formula: A = b x h."
    ],
    example: {
      question: "A parallelogram has base 9 cm and perpendicular height 4 cm. Find its area.",
      steps: [
        "Use area = base x height.",
        "9 x 4 = 36.",
        "The area is 36 cm^2."
      ],
      answer: "36 cm^2"
    },
    practice: [
      ["Base 8 cm, height 5 cm. Find the area.", "40 cm^2"],
      ["Base 12 m, height 3 m. Find the area.", "36 m^2"],
      ["Area is 42 cm^2 and base is 7 cm. Find the height.", "6 cm"]
    ],
    more: () => {
      const b = rand(4, 15);
      const h = rand(3, 12);
      if (Math.random() < 0.75) return [`Base ${b} cm, height ${h} cm. Find the area.`, `${b * h} cm^2`];
      return [`Area is ${b * h} cm^2 and base is ${b} cm. Find the height.`, `${h} cm`];
    }
  },
  {
    id: "area-trapezium",
    title: "Area of a trapezium",
    tag: "Geometry",
    explain:
      "A trapezium has one pair of parallel sides. Its area is half the sum of the parallel sides, multiplied by the perpendicular height: A = 1/2(a + b)h.",
    catches: [
      "Adding the wrong sides. You need the two parallel sides.",
      "Forgetting to halve after adding the parallel sides.",
      "Using a slanted side as the height."
    ],
    hacks: [
      "Say the formula out loud: add the parallel sides, halve, times height.",
      "If the numbers are awkward, halve either the height or the bracket, whichever is easier.",
      "Check your answer is roughly between the areas of two rectangles using the shorter and longer bases."
    ],
    example: {
      question: "A trapezium has parallel sides 6 cm and 10 cm, height 5 cm. Find its area.",
      steps: [
        "Add the parallel sides: 6 + 10 = 16.",
        "Half of 16 is 8.",
        "8 x 5 = 40, so the area is 40 cm^2."
      ],
      answer: "40 cm^2"
    },
    practice: [
      ["Parallel sides 8 cm and 12 cm, height 7 cm. Find the area.", "70 cm^2"],
      ["Parallel sides 5 m and 9 m, height 4 m. Find the area.", "28 m^2"],
      ["Parallel sides 11 cm and 15 cm, height 3 cm. Find the area.", "39 cm^2"]
    ],
    more: () => {
      const a = rand(4, 12);
      const b = a + rand(2, 8);
      const h = rand(3, 10);
      return [`Parallel sides ${a} cm and ${b} cm, height ${h} cm. Find the area.`, `${((a + b) * h) / 2} cm^2`];
    }
  },
  {
    id: "fraction-of-amount",
    title: "Finding a fraction of an amount",
    tag: "Fractions",
    explain:
      "To find a fraction of an amount, divide by the denominator and multiply by the numerator. The denominator tells you how many equal parts; the numerator tells you how many of those parts you need.",
    catches: [
      "Multiplying first can make the numbers bigger than they need to be.",
      "Confusing numerator and denominator.",
      "For mixed numbers, change to an improper fraction first."
    ],
    hacks: [
      "Divide first when the amount divides nicely by the denominator.",
      "For 3/4, find 1/4 then triple it.",
      "Use cancellation if both numerator and amount share a factor."
    ],
    example: {
      question: "Find 3/5 of 40.",
      steps: [
        "One fifth of 40 is 40 / 5 = 8.",
        "Three fifths is 3 x 8.",
        "3/5 of 40 = 24."
      ],
      answer: "24"
    },
    practice: [
      ["Find 2/3 of 27.", "18"],
      ["Find 5/8 of 64.", "40"],
      ["Find 7/10 of 90.", "63"]
    ],
    more: () => {
      const den = pick([3, 4, 5, 6, 8, 10, 12]);
      const num = rand(1, den - 1);
      const unit = rand(4, 15);
      const amount = den * unit;
      return [`Find ${num}/${den} of ${amount}.`, String(num * unit)];
    }
  },
  {
    id: "hcf",
    title: "Highest common factor (HCF)",
    tag: "Number structure",
    explain:
      "The HCF is the biggest number that divides exactly into two or more numbers. It is useful for simplifying fractions and splitting things into equal groups.",
    catches: [
      "Listing multiples instead of factors.",
      "Stopping too early and missing a bigger common factor.",
      "Forgetting that the HCF cannot be bigger than the smallest number."
    ],
    hacks: [
      "List factor pairs systematically from 1 upwards.",
      "Use prime factors: multiply the primes that appear in every number.",
      "If one number divides the other, the smaller number is the HCF."
    ],
    example: {
      question: "Find the HCF of 24 and 36.",
      steps: [
        "Factors of 24 include 1, 2, 3, 4, 6, 8, 12, 24.",
        "Factors of 36 include 1, 2, 3, 4, 6, 9, 12, 18, 36.",
        "The biggest common factor is 12."
      ],
      answer: "12"
    },
    practice: [
      ["Find the HCF of 18 and 30.", "6"],
      ["Find the HCF of 42 and 56.", "14"],
      ["Find the HCF of 27 and 45.", "9"]
    ],
    more: () => {
      const h = pick([2, 3, 4, 5, 6, 8, 9, 10, 12]);
      const a = h * rand(2, 8);
      const b = h * rand(2, 8);
      return [`Find the HCF of ${a} and ${b}.`, String(gcd(a, b))];
    }
  },
  {
    id: "lcm",
    title: "Lowest common multiple (LCM)",
    tag: "Number structure",
    explain:
      "The LCM is the smallest number that appears in the times tables of two or more numbers. It is useful for matching cycles and finding common denominators.",
    catches: [
      "Finding the HCF by mistake.",
      "Choosing any common multiple instead of the lowest one.",
      "Forgetting the LCM is at least as big as the biggest number."
    ],
    hacks: [
      "List multiples of the larger number first, then check the smaller one.",
      "Use LCM = a x b / HCF for two numbers.",
      "If the numbers have no common factor except 1, multiply them."
    ],
    example: {
      question: "Find the LCM of 6 and 8.",
      steps: [
        "Multiples of 8 are 8, 16, 24, 32...",
        "24 is also in the 6 times table.",
        "So the LCM is 24."
      ],
      answer: "24"
    },
    practice: [
      ["Find the LCM of 4 and 10.", "20"],
      ["Find the LCM of 9 and 12.", "36"],
      ["Find the LCM of 7 and 5.", "35"]
    ],
    more: () => {
      const a = rand(3, 12);
      const b = rand(3, 12);
      return [`Find the LCM of ${a} and ${b}.`, String(lcm(a, b))];
    }
  },
  {
    id: "fractions-percentages-decimals",
    title: "Fractions, percentages, decimals",
    tag: "Conversions",
    explain:
      "Fractions, decimals and percentages are different ways to show the same value. Percentage means out of 100. Decimals use place value. Fractions show parts of a whole.",
    catches: [
      "0.4 is 40%, not 4%.",
      "1/4 is 0.25, so it is 25%, not 14%.",
      "Percentages over 100% are possible: 1.2 = 120%."
    ],
    hacks: [
      "Decimal to percentage: multiply by 100.",
      "Percentage to decimal: divide by 100.",
      "Know the classics: 1/2 = 0.5 = 50%, 1/4 = 0.25 = 25%, 1/5 = 0.2 = 20%."
    ],
    example: {
      question: "Write 3/8 as a decimal and a percentage.",
      steps: [
        "3 / 8 = 0.375.",
        "0.375 x 100 = 37.5%.",
        "So 3/8 = 0.375 = 37.5%."
      ],
      answer: "0.375 and 37.5%"
    },
    practice: [
      ["Write 0.72 as a percentage.", "72%"],
      ["Write 35% as a decimal.", "0.35"],
      ["Write 1/5 as a decimal and percentage.", "0.2 and 20%"]
    ],
    more: () => {
      const options = [
        ["1/2", "0.5 and 50%"],
        ["1/4", "0.25 and 25%"],
        ["3/4", "0.75 and 75%"],
        ["1/5", "0.2 and 20%"],
        ["2/5", "0.4 and 40%"],
        ["3/10", "0.3 and 30%"],
        ["7/10", "0.7 and 70%"],
        ["1/8", "0.125 and 12.5%"]
      ];
      const [fraction, answer] = pick(options);
      return [`Write ${fraction} as a decimal and percentage.`, answer];
    }
  },
  {
    id: "percentages-calc",
    title: "Percentages of amount (calculator)",
    tag: "Percentages",
    explain:
      "With a calculator, turn the percentage into a decimal and multiply by the amount. This works for any percentage, including decimals like 12.5%.",
    catches: [
      "Typing 35 instead of 0.35 when finding 35%.",
      "Forgetting that 100% of an amount is the full amount.",
      "Rounding too early on multi-step questions."
    ],
    hacks: [
      "Percentage / 100 x amount.",
      "Use the multiplier directly: 18% of 250 is 0.18 x 250.",
      "For awkward percentages, calculator method is usually fastest and least risky."
    ],
    example: {
      question: "Find 17% of 240.",
      steps: [
        "17% = 0.17.",
        "0.17 x 240 = 40.8.",
        "So 17% of 240 is 40.8."
      ],
      answer: "40.8"
    },
    practice: [
      ["Find 23% of 180.", "41.4"],
      ["Find 12.5% of 64.", "8"],
      ["Find 7% of 350.", "24.5"]
    ],
    more: () => {
      const pct = pick([7, 12, 15, 18, 22, 35, 42, 65, 12.5]);
      const amount = pick([64, 80, 120, 150, 180, 240, 320, 350, 500]);
      return [`Find ${pct}% of ${amount}.`, trim((pct / 100) * amount)];
    }
  },
  {
    id: "percentages-non-calc",
    title: "Percentages of amount (non-calculator)",
    tag: "Percentages",
    explain:
      "Without a calculator, build percentages from easy chunks like 50%, 25%, 10%, 5% and 1%. Then add or subtract the chunks you need.",
    catches: [
      "Finding 10% then forgetting to scale it.",
      "Using a calculator method with ugly decimals when mental chunks would be cleaner.",
      "Mixing up 5% and 50%."
    ],
    hacks: [
      "10% is divide by 10. 5% is half of 10%. 1% is divide by 100.",
      "25% is a quarter. 75% is three quarters.",
      "For 15%, do 10% + 5%."
    ],
    example: {
      question: "Find 35% of 80 without a calculator.",
      steps: [
        "10% of 80 is 8.",
        "30% is 24, and 5% is 4.",
        "35% is 24 + 4 = 28."
      ],
      answer: "28"
    },
    practice: [
      ["Find 15% of 60.", "9"],
      ["Find 25% of 96.", "24"],
      ["Find 70% of 50.", "35"]
    ],
    more: () => {
      const pct = pick([5, 10, 15, 20, 25, 30, 35, 40, 50, 60, 75]);
      const amount = pick([40, 50, 60, 80, 96, 120, 160, 200]);
      return [`Find ${pct}% of ${amount} without a calculator.`, trim((pct / 100) * amount)];
    }
  },
  {
    id: "generating-sequence",
    title: "Generating a sequence from the nth term",
    tag: "Algebra and sequences",
    explain:
      "The nth term is a rule for finding any term in a sequence. Substitute n = 1, 2, 3 and so on to generate the sequence.",
    catches: [
      "Starting with n = 0 when the question expects the first term to be n = 1.",
      "Forgetting BIDMAS when the rule has more than one operation.",
      "Writing only the differences instead of the actual terms."
    ],
    hacks: [
      "Make a tiny table with n on the top row and the term underneath.",
      "For 4n - 1, do the multiply first, then subtract 1.",
      "Check the first three terms before rushing into a pattern."
    ],
    example: {
      question: "Generate the first 4 terms of 3n + 2.",
      steps: [
        "n = 1 gives 3(1) + 2 = 5.",
        "n = 2 gives 3(2) + 2 = 8.",
        "n = 3 gives 11, and n = 4 gives 14."
      ],
      answer: "5, 8, 11, 14"
    },
    practice: [
      ["Generate the first 3 terms of 5n - 2.", "3, 8, 13"],
      ["Generate the first 4 terms of 2n + 7.", "9, 11, 13, 15"],
      ["Generate the first 3 terms of n^2 + 1.", "2, 5, 10"]
    ],
    more: () => {
      const a = rand(2, 8);
      const b = rand(-5, 9);
      const terms = [1, 2, 3, 4].map((n) => a * n + b);
      return [`Generate the first 4 terms of ${a}n ${signed(b)}.`, terms.join(", ")];
    }
  },
  {
    id: "finding-nth-term",
    title: "Finding the nth term",
    tag: "Algebra and sequences",
    explain:
      "For a linear sequence, the difference between terms gives the number before n. Then compare your n-rule with the real sequence to find the adjustment.",
    catches: [
      "Using the first term as the coefficient of n.",
      "Not checking the rule against more than one term.",
      "Getting the sign wrong in rules like 4n - 3."
    ],
    hacks: [
      "Common difference first: that is the n coefficient.",
      "Write the matching times table underneath the sequence.",
      "The gap between the times table and the sequence is the add or subtract part."
    ],
    example: {
      question: "Find the nth term of 5, 9, 13, 17, ...",
      steps: [
        "The common difference is 4, so start with 4n.",
        "4n gives 4, 8, 12, 16 for n = 1, 2, 3, 4.",
        "The sequence is always 1 more, so the nth term is 4n + 1."
      ],
      answer: "4n + 1"
    },
    practice: [
      ["Find the nth term: 7, 10, 13, 16, ...", "3n + 4"],
      ["Find the nth term: 4, 9, 14, 19, ...", "5n - 1"],
      ["Find the nth term: 11, 18, 25, 32, ...", "7n + 4"]
    ],
    more: () => {
      const a = rand(2, 9);
      const b = rand(-5, 8);
      const terms = [1, 2, 3, 4].map((n) => a * n + b);
      return [`Find the nth term: ${terms.join(", ")}, ...`, `${a}n ${signed(b)}`];
    }
  },
  {
    id: "percentage-increase-decrease",
    title: "Increase/decrease by a percentage",
    tag: "Percentages",
    explain:
      "Increasing or decreasing by a percentage changes the original amount. You can find the percentage change and add or subtract it, or use a multiplier.",
    catches: [
      "Finding the percentage but forgetting to add or subtract it.",
      "For a decrease, using the increase multiplier by mistake.",
      "Thinking a 20% decrease followed by a 20% increase returns to the start. It does not."
    ],
    hacks: [
      "Increase by 18% means multiply by 1.18.",
      "Decrease by 18% means multiply by 0.82.",
      "For non-calculator questions, find the percentage chunk first, then adjust the original."
    ],
    example: {
      question: "Increase 150 by 12%.",
      steps: [
        "12% of 150 = 18.",
        "Add the increase: 150 + 18 = 168.",
        "Using a multiplier: 1.12 x 150 = 168."
      ],
      answer: "168"
    },
    practice: [
      ["Increase 80 by 25%.", "100"],
      ["Decrease 200 by 15%.", "170"],
      ["A price of GBP 60 increases by 10%. What is the new price?", "GBP 66"]
    ],
    more: () => {
      const amount = pick([40, 60, 80, 100, 120, 150, 200, 250]);
      const pct = pick([5, 10, 12, 15, 20, 25, 30]);
      const up = Math.random() < 0.5;
      const answer = up ? amount * (1 + pct / 100) : amount * (1 - pct / 100);
      return [`${up ? "Increase" : "Decrease"} ${amount} by ${pct}%.`, trim(answer)];
    }
  },
  {
    id: "year-7-algebra",
    title: "Year 7 algebra",
    tag: "Expressions, substitution, equations",
    explain:
      "Algebra uses letters to stand for numbers. In Year 7, the big skills are simplifying expressions, substituting values into formulae, and solving simple equations by keeping both sides balanced.",
    catches: [
      "3a means 3 x a, not 3 + a.",
      "You can only collect like terms: 4a + 2a = 6a, but 4a + 2b cannot become 6ab.",
      "When solving equations, do the same operation to both sides."
    ],
    hacks: [
      "Circle like terms before collecting them.",
      "For substitution, replace the letter with the number in brackets, then use BIDMAS.",
      "For equations, undo operations in reverse order."
    ],
    example: {
      question: "Solve 3x + 5 = 20.",
      steps: [
        "Undo +5 by subtracting 5 from both sides: 3x = 15.",
        "Undo x3 by dividing both sides by 3.",
        "x = 5."
      ],
      answer: "x = 5"
    },
    practice: [
      ["Simplify 4a + 3a - 2a.", "5a"],
      ["If x = 6, find 2x + 7.", "19"],
      ["Solve y - 8 = 13.", "y = 21"]
    ],
    more: () => {
      const mode = pick(["simplify", "substitute", "solve"]);
      if (mode === "simplify") {
        const a = rand(2, 8);
        const b = rand(2, 8);
        const c = rand(1, 5);
        return [`Simplify ${a}x + ${b}x - ${c}x.`, `${a + b - c}x`];
      }
      if (mode === "substitute") {
        const x = rand(2, 9);
        const m = rand(2, 6);
        const b = rand(1, 10);
        return [`If x = ${x}, find ${m}x + ${b}.`, String(m * x + b)];
      }
      const x = rand(2, 10);
      const m = rand(2, 6);
      const b = rand(1, 12);
      return [`Solve ${m}x + ${b} = ${m * x + b}.`, `x = ${x}`];
    }
  }
];

const topicVisuals = {
  "directed-numbers": {
    title: "Move on the number line",
    text: "Adding moves right. Subtracting a negative also moves right because the direction flips.",
    html: `
      <div class="visual-grid">
        <svg viewBox="0 0 620 210" role="img" aria-label="Number line showing -4 plus 9 then subtracting negative 3">
          <line x1="45" y1="126" x2="575" y2="126" stroke="#17386f" stroke-width="4" />
          <polygon points="575,126 559,116 559,136" fill="#17386f" />
          <g fill="#1d2433" font-size="16" font-weight="800" text-anchor="middle">
            <line x1="105" y1="112" x2="105" y2="140" stroke="#17386f" stroke-width="3" />
            <text x="105" y="165">-4</text>
            <line x1="260" y1="112" x2="260" y2="140" stroke="#17386f" stroke-width="3" />
            <text x="260" y="165">0</text>
            <line x1="455" y1="112" x2="455" y2="140" stroke="#17386f" stroke-width="3" />
            <text x="455" y="165">5</text>
            <line x1="535" y1="112" x2="535" y2="140" stroke="#17386f" stroke-width="3" />
            <text x="535" y="165">8</text>
          </g>
          <path d="M105 86 C210 28, 350 28, 455 86" fill="none" stroke="#2557a7" stroke-width="5" />
          <polygon points="455,86 437,78 441,98" fill="#2557a7" />
          <text x="280" y="48" fill="#2557a7" font-size="22" font-weight="900" text-anchor="middle">+9</text>
          <path d="M455 94 C482 68, 510 68, 535 94" fill="none" stroke="#1f7a5c" stroke-width="5" />
          <polygon points="535,94 517,87 522,106" fill="#1f7a5c" />
          <text x="496" y="66" fill="#1f7a5c" font-size="18" font-weight="900" text-anchor="middle">-(-3) = +3</text>
        </svg>
        <p class="diagram-note">Start at -4, jump right 9 to 5, then subtracting -3 becomes another jump right to 8.</p>
      </div>`
  },
  "standard-form": {
    title: "Count decimal jumps",
    text: "Standard form is a number from 1 to less than 10, multiplied by a power of 10.",
    html: `
      <div class="visual-grid">
        <div class="chip-row" aria-label="Digits in 48200">
          <span class="math-chip hot">4</span>
          <span class="math-chip hot">.</span>
          <span class="math-chip">8</span>
          <span class="math-chip">2</span>
          <span class="math-chip">0</span>
          <span class="math-chip">0</span>
        </div>
        <p class="diagram-note">48,200 becomes 4.82. The decimal moved 4 places left, so the power is positive 4.</p>
        <div class="formula-row">
          <span class="formula-chip">48,200</span>
          <span class="formula-chip warn">4 jumps left</span>
          <span class="formula-chip hot">4.82 x 10^4</span>
        </div>
      </div>`
  },
  "rounding-decimal-places": {
    title: "Keep, then decide",
    text: "Underline the last digit you keep. The very next digit decides whether it goes up.",
    html: `
      <div class="visual-grid">
        <div class="chip-row" aria-label="Rounding 7.386 to two decimal places">
          <span class="math-chip">7</span>
          <span class="math-chip">.</span>
          <span class="math-chip">3</span>
          <span class="math-chip hot">8<br><small>keep</small></span>
          <span class="math-chip warn">6<br><small>decides</small></span>
        </div>
        <p class="diagram-note">The 6 is 5 or more, so 7.38 rounds up to 7.39.</p>
        <div class="formula-row">
          <span class="formula-chip">7.386</span>
          <span class="formula-chip warn">2 decimal places</span>
          <span class="formula-chip hot">7.39</span>
        </div>
      </div>`
  },
  "area-parallelogram": {
    title: "Slide it into a rectangle",
    text: "The slanted side is a distraction. Area uses the base and the perpendicular height.",
    html: `
      <div class="visual-grid">
        <svg viewBox="0 0 620 250" role="img" aria-label="Parallelogram split to show base times height">
          <polygon points="150,62 500,62 420,178 70,178" fill="#eef4ff" stroke="#17386f" stroke-width="4" />
          <polygon points="70,178 150,62 150,178" fill="#ffdca8" stroke="#b55b00" stroke-width="3" stroke-dasharray="7 5" />
          <line x1="150" y1="62" x2="150" y2="178" stroke="#c43d4b" stroke-width="4" stroke-dasharray="7 5" />
          <line x1="70" y1="196" x2="420" y2="196" stroke="#2557a7" stroke-width="5" />
          <text x="245" y="226" fill="#2557a7" font-size="22" font-weight="900" text-anchor="middle">base</text>
          <text x="168" y="126" fill="#c43d4b" font-size="22" font-weight="900">height</text>
          <text x="304" y="42" fill="#17386f" font-size="22" font-weight="900" text-anchor="middle">Area = base x height</text>
        </svg>
        <p class="diagram-note">The cut-off triangle can slide across, making a rectangle with the same area.</p>
      </div>`
  },
  "area-trapezium": {
    title: "Average the parallel sides",
    text: "A trapezium area is the average of the two parallel sides, multiplied by the height.",
    html: `
      <div class="visual-grid">
        <svg viewBox="0 0 620 260" role="img" aria-label="Trapezium with parallel sides and perpendicular height">
          <polygon points="195,58 430,58 520,184 95,184" fill="#f0fdf4" stroke="#17386f" stroke-width="4" />
          <line x1="195" y1="58" x2="430" y2="58" stroke="#2557a7" stroke-width="7" />
          <line x1="95" y1="184" x2="520" y2="184" stroke="#2557a7" stroke-width="7" />
          <line x1="430" y1="58" x2="430" y2="184" stroke="#c43d4b" stroke-width="4" stroke-dasharray="7 5" />
          <text x="312" y="38" fill="#2557a7" font-size="20" font-weight="900" text-anchor="middle">a = 6 cm</text>
          <text x="308" y="222" fill="#2557a7" font-size="20" font-weight="900" text-anchor="middle">b = 10 cm</text>
          <text x="448" y="126" fill="#c43d4b" font-size="20" font-weight="900">h = 5 cm</text>
          <text x="305" y="248" fill="#1f7a5c" font-size="21" font-weight="900" text-anchor="middle">Area = 1/2(a + b)h</text>
        </svg>
      </div>`
  },
  "fraction-of-amount": {
    title: "Divide first, then multiply",
    text: "The denominator makes equal parts. The numerator tells you how many parts to take.",
    html: `
      <div class="visual-grid">
        <div class="bar-model" style="--parts: 5" aria-label="Three fifths of forty">
          <span class="bar-part fill">8</span>
          <span class="bar-part fill">8</span>
          <span class="bar-part fill">8</span>
          <span class="bar-part">8</span>
          <span class="bar-part">8</span>
        </div>
        <div class="formula-row">
          <span class="formula-chip">40 / 5 = 8</span>
          <span class="formula-chip warn">take 3 parts</span>
          <span class="formula-chip hot">3 x 8 = 24</span>
        </div>
      </div>`
  },
  hcf: {
    title: "Look for shared factors",
    text: "The HCF is the biggest number sitting in the overlap.",
    html: `
      <div class="visual-grid">
        <svg viewBox="0 0 620 250" role="img" aria-label="Venn diagram showing common factors of 24 and 36">
          <circle cx="245" cy="125" r="92" fill="rgba(37,87,167,0.16)" stroke="#2557a7" stroke-width="4" />
          <circle cx="375" cy="125" r="92" fill="rgba(31,122,92,0.16)" stroke="#1f7a5c" stroke-width="4" />
          <text x="205" y="50" fill="#2557a7" font-size="19" font-weight="900" text-anchor="middle">24</text>
          <text x="415" y="50" fill="#1f7a5c" font-size="19" font-weight="900" text-anchor="middle">36</text>
          <text x="212" y="116" fill="#17386f" font-size="18" font-weight="800" text-anchor="middle">8</text>
          <text x="190" y="148" fill="#17386f" font-size="18" font-weight="800" text-anchor="middle">24</text>
          <text x="310" y="100" fill="#1d2433" font-size="17" font-weight="800" text-anchor="middle">1, 2, 3</text>
          <text x="310" y="130" fill="#1d2433" font-size="17" font-weight="800" text-anchor="middle">4, 6</text>
          <ellipse cx="310" cy="158" rx="31" ry="22" fill="#c43d4b" />
          <text x="310" y="165" fill="#ffffff" font-size="22" font-weight="900" text-anchor="middle">12</text>
          <text x="430" y="116" fill="#174a38" font-size="18" font-weight="800" text-anchor="middle">9</text>
          <text x="445" y="148" fill="#174a38" font-size="18" font-weight="800" text-anchor="middle">18, 36</text>
        </svg>
        <p class="diagram-note">Common factors are in the middle. The biggest one is the HCF.</p>
      </div>`
  },
  lcm: {
    title: "Find the first shared multiple",
    text: "Multiples are times-table answers. The LCM is the first number both lists hit.",
    html: `
      <div class="visual-grid">
        <div class="chip-row">
          <span class="math-chip warn">6s</span>
          <span class="math-chip">6</span>
          <span class="math-chip">12</span>
          <span class="math-chip">18</span>
          <span class="math-chip hot">24</span>
          <span class="math-chip">30</span>
        </div>
        <div class="chip-row">
          <span class="math-chip warn">8s</span>
          <span class="math-chip">8</span>
          <span class="math-chip">16</span>
          <span class="math-chip hot">24</span>
          <span class="math-chip">32</span>
          <span class="math-chip">40</span>
        </div>
        <p class="diagram-note">The first match is 24, so the LCM of 6 and 8 is 24.</p>
      </div>`
  },
  "fractions-percentages-decimals": {
    title: "Same value, three languages",
    text: "Fraction, decimal and percentage can describe the same part of a whole.",
    html: `
      <div class="visual-grid">
        <div class="conversion-strip">
          <div class="conversion-box"><strong>Fraction</strong>3/4 of the bar</div>
          <div class="conversion-box"><strong>Decimal</strong>0.75 of 1 whole</div>
          <div class="conversion-box"><strong>Percentage</strong>75 out of 100</div>
        </div>
        <div class="bar-model" style="--parts: 4" aria-label="Three quarters filled">
          <span class="bar-part fill">25%</span>
          <span class="bar-part fill">25%</span>
          <span class="bar-part fill">25%</span>
          <span class="bar-part">25%</span>
        </div>
        <p class="diagram-note">3/4 = 0.75 = 75%.</p>
      </div>`
  },
  "percentages-calc": {
    title: "Turn the percent into a multiplier",
    text: "Calculator method: divide the percentage by 100, then multiply by the amount.",
    html: `
      <div class="visual-grid">
        <div class="formula-row">
          <span class="formula-chip">17%</span>
          <span class="formula-chip warn">/ 100</span>
          <span class="formula-chip">0.17</span>
          <span class="formula-chip warn">x 240</span>
          <span class="formula-chip hot">40.8</span>
        </div>
        <p class="diagram-note">The decimal multiplier does the whole percentage calculation in one line.</p>
      </div>`
  },
  "percentages-non-calc": {
    title: "Build from easy chunks",
    text: "Mental percentages are fastest when you combine friendly chunks like 10%, 5% and 25%.",
    html: `
      <div class="visual-grid">
        <div class="chunk-grid">
          <div class="chunk-box"><strong>10%</strong>80 / 10 = 8</div>
          <div class="chunk-box"><strong>30%</strong>3 x 8 = 24</div>
          <div class="chunk-box"><strong>5%</strong>half of 8 = 4</div>
          <div class="chunk-box hot"><strong>35%</strong>24 + 4 = 28</div>
        </div>
        <p class="diagram-note">35% of 80 is 30% plus 5%, so 28.</p>
      </div>`
  },
  "generating-sequence": {
    title: "Feed n into the rule",
    text: "Use n = 1, 2, 3, 4 to produce the sequence in order.",
    html: `
      <div class="visual-grid">
        <div class="mini-table" aria-label="Table for 3n plus 2">
          <span class="table-cell head">n</span>
          <span class="table-cell head">1</span>
          <span class="table-cell head">2</span>
          <span class="table-cell head">3</span>
          <span class="table-cell">3n + 2</span>
          <span class="table-cell hot">5</span>
          <span class="table-cell hot">8</span>
          <span class="table-cell hot">11</span>
        </div>
        <div class="formula-row">
          <span class="formula-chip">n = 4</span>
          <span class="formula-chip warn">3 x 4 + 2</span>
          <span class="formula-chip hot">14</span>
        </div>
      </div>`
  },
  "finding-nth-term": {
    title: "Difference gives the n part",
    text: "Compare the sequence to its matching times table to find the adjustment.",
    html: `
      <div class="visual-grid">
        <div class="sequence-row">
          <span class="sequence-chip">5</span>
          <span class="sequence-chip warn">+4</span>
          <span class="sequence-chip">9</span>
          <span class="sequence-chip warn">+4</span>
          <span class="sequence-chip">13</span>
          <span class="sequence-chip warn">+4</span>
          <span class="sequence-chip">17</span>
        </div>
        <div class="sequence-row">
          <span class="sequence-chip">4n</span>
          <span class="sequence-chip">4</span>
          <span class="sequence-chip">8</span>
          <span class="sequence-chip">12</span>
          <span class="sequence-chip">16</span>
          <span class="sequence-chip hot">+1</span>
        </div>
        <p class="diagram-note">The difference is 4, so start with 4n. The sequence is 1 higher, so the rule is 4n + 1.</p>
      </div>`
  },
  "percentage-increase-decrease": {
    title: "Use the new percentage",
    text: "For an increase, go above 100%. For a decrease, go below 100%.",
    html: `
      <div class="visual-grid">
        <div class="percent-row">
          <span class="percent-chip">Original</span>
          <span class="percent-chip">100%</span>
          <span class="percent-chip warn">+12%</span>
          <span class="percent-chip hot">112% = 1.12</span>
        </div>
        <div class="percent-row">
          <span class="percent-chip">150</span>
          <span class="percent-chip warn">x 1.12</span>
          <span class="percent-chip hot">168</span>
        </div>
        <p class="diagram-note">Decrease by 12% would use 88% = 0.88 instead.</p>
      </div>`
  },
  "year-7-algebra": {
    title: "Keep the equation balanced",
    text: "Whatever you do to one side, do the same to the other side.",
    html: `
      <div class="balance" aria-label="Equation balance showing 3x plus 5 equals 20">
        <div class="balance-bar">
          <div class="pan">3x + 5</div>
          <div class="pivot">=</div>
          <div class="pan">20</div>
        </div>
        <div class="algebra-row">
          <span class="algebra-chip warn">subtract 5</span>
          <span class="algebra-chip">3x = 15</span>
          <span class="algebra-chip warn">divide by 3</span>
          <span class="algebra-chip hot">x = 5</span>
        </div>
        <p class="diagram-note">Solving is just undoing operations while keeping both sides equal.</p>
      </div>`
  }
};

const state = {
  activeTopicId: topics[0].id,
  view: "single",
  search: "",
  practiceSets: 0,
  expandedAll: false
};

const nav = document.querySelector("#topicNav");
const container = document.querySelector("#topicContainer");
const template = document.querySelector("#topicTemplate");
const searchInput = document.querySelector("#topicSearch");
const practiceCount = document.querySelector("#practiceCount");
const topicsCount = document.querySelector("#topicsCount");
const expandAllButton = document.querySelector("#expandAllButton");
const randomTopicButton = document.querySelector("#randomTopicButton");
const toggleButtons = document.querySelectorAll(".toggle-button");

topicsCount.textContent = String(topics.length);

renderNav();
renderTopics();
drawNumberField();
window.addEventListener("resize", drawNumberField);

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim().toLowerCase();
  if (state.search) state.view = "all";
  syncToggleButtons();
  renderNav();
  renderTopics();
});

expandAllButton.addEventListener("click", () => {
  state.expandedAll = !state.expandedAll;
  state.view = state.expandedAll ? "all" : "single";
  expandAllButton.textContent = state.expandedAll ? "Focus view" : "Expand all";
  syncToggleButtons();
  renderTopics();
});

randomTopicButton.addEventListener("click", () => {
  const topic = pick(topics);
  state.activeTopicId = topic.id;
  state.view = "single";
  state.search = "";
  searchInput.value = "";
  syncToggleButtons();
  renderNav();
  renderTopics();
  document.querySelector(".content-stage").scrollIntoView({ behavior: "smooth", block: "start" });
});

toggleButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    state.expandedAll = state.view === "all";
    expandAllButton.textContent = state.expandedAll ? "Focus view" : "Expand all";
    syncToggleButtons();
    renderTopics();
  });
});

function renderNav() {
  nav.innerHTML = "";
  const filtered = filteredTopics();
  filtered.forEach((topic, index) => {
    const button = document.createElement("button");
    button.className = "topic-nav-button";
    if (topic.id === state.activeTopicId) button.classList.add("active");
    button.type = "button";
    button.innerHTML = `<strong>${index + 1}. ${topic.title}</strong><span>${topic.tag}</span>`;
    button.addEventListener("click", () => {
      state.activeTopicId = topic.id;
      state.view = "single";
      state.search = "";
      searchInput.value = "";
      state.expandedAll = false;
      expandAllButton.textContent = "Expand all";
      syncToggleButtons();
      renderNav();
      renderTopics();
      document.querySelector(".content-stage").scrollIntoView({ behavior: "smooth", block: "start" });
    });
    nav.append(button);
  });
}

function renderTopics() {
  container.innerHTML = "";
  const visibleTopics = state.view === "all" ? filteredTopics() : topics.filter((topic) => topic.id === state.activeTopicId);

  if (!visibleTopics.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "No mission matches that search. Try a different topic name.";
    container.append(empty);
    return;
  }

  visibleTopics.forEach((topic) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.id = topic.id;
    node.querySelector(".topic-kicker").textContent = topic.tag;
    node.querySelector("h2").textContent = topic.title;
    node.querySelector(".explain p").textContent = topic.explain;
    fillList(node.querySelector(".catches ul"), topic.catches);
    fillList(node.querySelector(".hacks ul"), topic.hacks);
    renderVisual(node.querySelector(".visual-block"), topic.id);
    renderExample(node.querySelector(".worked-example"), topic.example);
    renderQuestions(node.querySelector(".questions-list"), topic.practice);

    node.querySelector('[data-action="more-practice"]').addEventListener("click", () => {
      const questions = Array.from({ length: 3 }, () => topic.more());
      renderQuestions(node.querySelector(".questions-list"), questions);
      state.practiceSets += 1;
      practiceCount.textContent = String(state.practiceSets);
    });

    node.querySelector('[data-action="jump-practice"]').addEventListener("click", () => {
      node.querySelector(".practice-block").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    container.append(node);
  });
}

function renderVisual(target, topicId) {
  const visual = topicVisuals[topicId];
  if (!visual) {
    target.remove();
    return;
  }

  target.querySelector("h3").textContent = visual.title;
  target.querySelector(".visual-copy p:last-child").textContent = visual.text;
  target.querySelector(".visual-stage").innerHTML = visual.html;
}

function renderExample(target, example) {
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

function renderQuestions(target, questions) {
  target.innerHTML = "";
  questions.forEach(([question, answer]) => {
    const item = document.createElement("li");
    item.className = "question-card";

    const questionText = document.createElement("p");
    questionText.className = "question-text";
    questionText.textContent = question;

    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = "Reveal answer";
    button.addEventListener("click", () => {
      item.classList.toggle("revealed");
      button.textContent = item.classList.contains("revealed") ? "Hide answer" : "Reveal answer";
    });

    const answerText = document.createElement("p");
    answerText.className = "answer-text";
    answerText.textContent = `Answer: ${answer}`;

    item.append(questionText, button, answerText);
    target.append(item);
  });
}

function fillList(target, items) {
  target.innerHTML = "";
  items.forEach((text) => {
    const item = document.createElement("li");
    item.textContent = text;
    target.append(item);
  });
}

function filteredTopics() {
  if (!state.search) return topics;
  return topics.filter((topic) => {
    const haystack = [topic.title, topic.tag, topic.explain, ...topic.catches, ...topic.hacks].join(" ").toLowerCase();
    return haystack.includes(state.search);
  });
}

function syncToggleButtons() {
  toggleButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
}

function drawNumberField() {
  const canvas = document.querySelector("#numberField");
  const ctx = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = window.innerHeight;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  ctx.clearRect(0, 0, width, height);

  const subject = document.body.dataset.subject;
  const symbolsBySubject = {
    french: ["je mange", "je bois", "pas de", "jamais de", "je vais", "manger", "jouer", "faire", "de l'eau", "sport"],
    religion: ["Tzedakah", "justice", "dignity", "service", "equality", "care", "seva", "zakat", "langar", "compassion"],
    science: ["pH", "CO2", "O2", "starch", "variables", "graph", "energy", "mixture", "cells", "fair test"],
    math: ["-7", "3/5", "x", "10^4", "35%", "n+2", "HCF", "LCM", "0.75", "A=bh"]
  };
  const paletteBySubject = {
    french: ["rgba(20, 76, 142, 0.22)", "rgba(196, 61, 75, 0.18)", "rgba(31, 122, 92, 0.2)"],
    religion: ["rgba(31, 122, 92, 0.22)", "rgba(181, 91, 0, 0.2)", "rgba(114, 80, 181, 0.18)"],
    science: ["rgba(20, 108, 128, 0.22)", "rgba(31, 122, 92, 0.2)", "rgba(196, 61, 75, 0.16)"],
    math: ["rgba(37, 87, 167, 0.24)", "rgba(31, 122, 92, 0.22)", "rgba(181, 91, 0, 0.2)"]
  };
  const symbols = symbolsBySubject[subject] || symbolsBySubject.math;
  const palette = paletteBySubject[subject] || paletteBySubject.math;
  for (let i = 0; i < 64; i += 1) {
    const x = (i * 137) % width;
    const y = (i * 89) % height;
    const size = 12 + ((i * 7) % 18);
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((((i * 19) % 36) - 18) * (Math.PI / 180));
    ctx.font = `800 ${size}px ui-sans-serif, system-ui`;
    ctx.fillStyle = palette[i % palette.length];
    ctx.fillText(symbols[i % symbols.length], 0, 0);
    ctx.restore();
  }
}

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function fmt(value) {
  return value < 0 ? `${value}` : `${value}`;
}

function signed(value) {
  return value < 0 ? `- ${Math.abs(value)}` : `+ ${value}`;
}

function gcd(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const next = x % y;
    x = y;
    y = next;
  }
  return x;
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function trim(value) {
  return Number.isInteger(value) ? String(value) : String(Number(value.toFixed(3)));
}
