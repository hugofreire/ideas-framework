const data = {
  "Scopes": {
     "Innovation": [
        "digitalization",
        "company competitiveness",
        "Skills for smart specialization",
        "industrial transition",
        "entrepreneurship"
      ],
      "Green Economy": [
        "circular economy",
        "sustainable production",
        "decarbonization"
      ],
      "Connectivity": "Implementation of new-generation communication networks to support the digital transition",
      "Citizens": [
        "sustainable urban development",
        "social and territorial cohesion"
      ]
  },
  "Sectors": [
    "Wine",
    "Olive oil",
    "Fruit",
    "Cork",
    "Fishing",
    "Tourism",
    "Renewable Energy",
    "Manufacturing",
    "Psychology",
    "Desporto",
    "Health"
  ],
  "Technologies": {
    "Blockchain": [
      "Micropayments",
      "Privacy",
      "Decentralization",
      "Smart Contracts",
      "Security",
      "Digital Identity"
    ],
    "AI": [
      "Better Decisions",
      "More Automation",
      "Problem-Solving"
    ],
    "IoT": [
      "Resource Optimization",
      "Collect data from sensors at a low cost",
      "Automation with robotics",
      "Monitoring",
      "Selling data"
    ]
  }
};

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function combineElements() {
  const scope = getRandomElement(Object.keys(data.Scopes));
  let sector;
  
  if (Array.isArray(data.Scopes[scope])) {
    sector = getRandomElement(data.Scopes[scope]);
  } else {
    sector = data.Scopes[scope];
  }
  
  const usedTechnologies = new Set();
  const technologies = [];
  
  while (technologies.length < 3) {
    const technology = getRandomElement(Object.keys(data.Technologies));
    if (!usedTechnologies.has(technology)) {
      usedTechnologies.add(technology);
      technologies.push(technology);
    }
  }
  
  const usedTechnologyFeatures = new Set();
  const technologyFeatures = [];
  
  for (const technology of technologies) {
    const technologyFeature = getRandomElement(data.Technologies[technology]);
    if (!usedTechnologyFeatures.has(technologyFeature)) {
      usedTechnologyFeatures.add(technologyFeature);
      technologyFeatures.push(technologyFeature);
    }
  }
  
  console.log(`Scope: ${scope}`);
  console.log(`Sector: ${sector}`);
  console.log(`Technologies: ${technologies.join(', ')}`);
  console.log(`Technology Features: ${technologyFeatures.join(', ')}`);
}

combineElements();
