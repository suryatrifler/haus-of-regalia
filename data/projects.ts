export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  area: string;
  cover: string;

  intro: {
    text: string;
    image: string;
  };

  metaImages: {
    wide: string;
    pair: [string, string];
  };

  narrative: string;

  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "the-beachside",
    title: "THE BEACHSIDE",
    category: "resort",
    location: "Trivandrum",
    area: "2,800 sq.ft",
    cover: "/project/the-beachside/intro.jpg",

    intro: {
      text:
        "Swasthi is a residential interior project designed around warmth, light, and spatial continuity. The design balances material honesty with everyday comfort.",
      image: "/project/the-beachside/intro.jpg",
    },

    metaImages: {
      wide: "/project/the-beachside/meta-wide.jpg",
      pair: [
        "/project/the-beachside/meta-1.jpg",
        "/project/the-beachside/meta-2.jpg",
      ],
    },

    narrative:
      "The spatial planning allows each zone to transition naturally into the next, creating a sense of flow while maintaining privacy. Muted finishes and natural light enhance the calm character of the interiors.",

    gallery: [
      "/project/the-beachside/g1.jpg",
      "/project/the-beachside/g2.jpg",
      "/project/the-beachside/g3.jpg",
      // "/project/the-beachside/g4.jpg",
      // "/project/the-beachside/g5.jpg",
      // "/project/the-beachside/g6.jpg",
    ],
  },
];
