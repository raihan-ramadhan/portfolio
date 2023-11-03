import plugin from "tailwindcss/plugin";

export const maskPlugin = plugin(function ({ addUtilities }) {
  const degrees = [
    "0",
    "45",
    "90",
    "135",
    "180",
    "-45",
    "-90",
    "-135",
    "-180",
  ] as const;
  const step = [
    "0",
    "10",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
  ] as const;
  type Degree = typeof degrees;
  type Steps = typeof step;

  function getAllCombinations(arr1: Steps, arr2: Steps, arr3: Degree) {
    const combinations: any = [];

    arr1.forEach((item1) => {
      arr2.forEach((item2) => {
        arr3.forEach((item3) => {
          if (item3.includes("-")) {
            const degWithoutHypen = item3.split("-")[1];
            combinations.push({
              [`.-mask-${item1}-${item2}-${degWithoutHypen}deg`]: {
                maskImage: `linear-gradient(${item3}deg, rgba(0, 0, 0, 1.0) ${item1}%, transparent ${item2}%)`,
              },
            });
          } else {
            combinations.push({
              [`.mask-${item1}-${item2}-${item3}deg`]: {
                maskImage: `linear-gradient(${item3}deg, rgba(0, 0, 0, 1.0) ${item1}%, transparent ${item2}%)`,
              },
            });
          }
        });
      });
    });

    return combinations;
  }

  const result = getAllCombinations(step, step, degrees);

  addUtilities(result);
});
