const filmProjects = [
  {
    id: "silent-shore",
    title: "The Silent Shore",
    description: "A haunting drama about memory and loss on a coastal town.",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/Screenshot%202025-05-10%20230236.png?v=1746914565787",
    alt: "Moody coastal scene with a lone figure walking on a foggy beach, evoking themes of memory and loss.",
    raised: 1800,
    goal: 5000,
    crowdfund: true,
    featured: false,
    director: "John Doe",
    cast: "Jane Smith, Jack White",
    genre: "Drama/Mystery",
    releaseDate: "2026-04-01", 
    reviews: [
      {
        reviewer: "Alice",
        comment: "Incredibly emotional film. Loved the storytelling!",
      },
      {
        reviewer: "Bob",
        comment: "The cinematography was beautiful, but the pace was slow.",
      },
    ],
  },
  {
    id: "pixel-hearts",
    title: "Pixel Hearts",
    description:
      "A quirky animated tale about love inside a retro video game world.",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/pixelhearts.jpg?v=1744027134702",
    alt: "Colorful pixel art of a glowing heart and retro game icons, representing an animated love story inside a video game world.",
    raised: 4500,
    goal: 6000,
    crowdfund: true,
    featured: false,
    director: "Samantha Grey",
    cast: "Chris Yellow, Emma Green",
    genre: "Animation/Romance",
    releaseDate: "2025-09-10",
    reviews: [
      {
        reviewer: "Charlie",
        comment: "A heartwarming story. Perfect for animation lovers!",
      },
    ],
  },
  {
    id: "echoes-underground",
    title: "Echoes of the Underground",
    description:
      "A documentary diving into forgotten subway musicians across Europe.",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/echoesoftheunderground.webp?v=1744027339589",
    alt:"Subway tunnel scene with silhouetted musicians and soft lighting, reflecting a music documentary atmosphere.",
    raised: 2200,
    goal: 4000,
    crowdfund: true,
    featured: true,
    director: "Chris Black",
    cast: "Nina Jones, Mark Lee",
    genre: "Documentary/Music",
    releaseDate: "2025-02-18",
    reviews: [
      {
        reviewer: "Dave",
        comment: "A unique perspective on underground music scenes!",
      },
    ],
  },
  {
    id: "starlit",
    title: "Starlit",
    description:
      "A dreamy indie sci-fi film about a girl chasing falling stars.",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/18d7ed71-8d53-456c-bc1d-3e161de67e7b.webp?v=1744027334963",
    alt:"Dreamlike starry night with a child gazing at the sky, hinting at a poetic sci-fi journey.",
    raised: 3200,
    goal: 7000,
    crowdfund: true,
    featured: false,
    director: "Emma Snow",
    cast: "Alice Brown, Henry Gray",
    genre: "Sci-Fi/Drama",
    releaseDate: "2026-08-18",
    reviews: [
      { reviewer: "Eliza", comment: "Beautiful visuals but lacking in plot." },
    ],
  },
  {
    id: "fragment",
    title: "Fragment",
    description:
      "Psychological thriller exploring alternate identities in urban life.",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/dfaa0c23-fa53-4696-b238-622a1271c6ad.webp?v=1744027344742",
    alt:"Abstract face split into mirrored fragments, symbolizing psychological themes of identity and reality.",
    raised: 1100,
    goal: 3500,
    crowdfund: true,
    featured: true,
    director: "Greg Matthews",
    cast: "Natalie Harris, Paul Walker",
    genre: "Thriller/Psychological",
    releaseDate: "2025-01-18",
    reviews: [
      {
        reviewer: "Tom",
        comment: "Mind-bending! Kept me on the edge the entire time.",
      },
    ],
  },
  {
    id: "dandelion-sky",
    title: "Dandelion Sky",
    description:
      "A young boy’s journey through a world of floating memories and forgotten dreams.",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/Screenshot%202025-05-10%20224346.png?v=1746913481923",
    alt:"Animated boy looking up at floating dandelions and memories in a surreal sky, evoking wonder and nostalgia.",
    raised: 2000,
    goal: 5500,
    crowdfund: true,
    featured: true,
    director: "Lana Kim",
    cast: "Noah Reed, Ava Bennett",
    genre: "Animation/Drama",
    releaseDate: "2025-03-14",
    reviews: [
      {
        reviewer: "Milo",
        comment: "Beautiful and meditative. A peaceful emotional ride.",
      },
      {
        reviewer: "Isabelle",
        comment: "The animation felt like a dream. I cried.",
      },
      {
        reviewer: "Jordan",
        comment:
          "Could've used a bit more story, but it was visually stunning.",
      },
    ],
  },
  {
    id: "through-glass",
    title: "Through Glass",
    description:
      "A mystery unfolds when a photographer finds clues in her vintage prints.",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/Screenshot%202025-05-10%20224636.png?v=1746913611847",
    alt:"Woman holding a vintage camera with intense focus, suggesting mystery and hidden clues in photographs.",
    raised: 3100,
    goal: 5000,
    crowdfund: false,
    featured: true,
    director: "Andre Silva",
    cast: "Riley Moon, Sarah Cho",
    genre: "Mystery/Thriller",
    releaseDate: "2024-11-02",
    reviews: [
      {
        reviewer: "Cass",
        comment: "A clever slow-burn mystery. Loved the suspense.",
      },
      {
        reviewer: "Omar",
        comment: "The plot twist got me. Excellent sound design too.",
      },
    ],
  },
  {
    id: "frequency",
    title: "Frequency",
    description:
      "A teenager builds a radio that can tune into people’s dreams.",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/Screenshot%202025-05-10%20225725.png?v=1746914256932",
    alt:"Teenage boy wearing headphones surrounded by glowing radio waves, hinting at dream-tuning sci-fi elements.",
    raised: 4200,
    goal: 8000,
    crowdfund: true,
    featured: true,
    director: "Nico Reyes",
    cast: "Liam Park, Zoe Chen",
    genre: "Sci-Fi/Animation",
    releaseDate: "2025-10-10",
    reviews: [
      {
        reviewer: "Jamie",
        comment: "Creative concept and strong emotional arc.",
      },
      {
        reviewer: "Tasha",
        comment: "Felt like a Black Mirror episode with heart.",
      },
      {
        reviewer: "Leo",
        comment: "Beautiful balance between science fiction and humanity.",
      },
    ],
  },
  {
    id: "the-sideshow",
    title: "The Sideshow",
    description:
      "A washed-up magician joins a dark underground circus with secrets.",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/Screenshot%202025-05-10%20225859.png?v=1746914355520",
    alt:"Dark, mysterious circus poster with magician silhouette, suggesting a psychological and eerie storyline.",
    raised: 500,
    goal: 3000,
    crowdfund: true,
    featured: true,
    director: "Max Donovan",
    cast: "Eliza York, Hunter King",
    genre: "Drama/Psychological",
    releaseDate: "2025-05-07",
    reviews: [
      { reviewer: "Kira", comment: "Gripping and haunting. Dark indie gem." },
      { reviewer: "Ezra", comment: "Tense, weird, and wonderful." },
    ],
  },
  {
    id: "whale-fall",
    title: "Whale Fall",
    description:
      "An oceanographer uncovers a secret hidden beneath a sunken whale.",
    image:
      "https://cdn.glitch.global/a640d6da-26e4-4f8d-8846-6db9cc05dd76/Screenshot%202025-05-10%20230101.png?v=1746914473302",
    alt:"Underwater scene of a sunken whale in the deep ocean, symbolizing hidden secrets and scientific exploration.",
    raised: 0,
    goal: 0,
    crowdfund: false,
    featured: true,
    director: "Lillian Torres",
    cast: "Kai Hughes, Maya Tran",
    genre: "Drama/Mystery",
    releaseDate: "2025-12-01",
    reviews: [
      {
        reviewer: "Theo",
        comment: "Visually mesmerizing and emotionally powerful.",
      },
      {
        reviewer: "Anika",
        comment: "A slow unraveling that rewards patient viewers.",
      },
    ],
  },
];
