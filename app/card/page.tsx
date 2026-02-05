import Card from "./card";

export default function CardGrid() {
  const cards_data = [
    {
      id: 1,
      name: "Earth & Ember Pottery",
      description:
        "A boutique ceramics studio focused on 'perfectly imperfect' functional art using mineral-based glazes.",
      products: [
        "Speckled espresso tumblers",
        "Hand-carved pasta bowls",
        "Geometric watering cans",
      ],
      time_in_market: "4 years",
      image: {
        src: "/test.jpg",
        height: 3840,
        width: 2560,
        alt: "Handcraft business picture",
      },
    },
    {
      id: 2,
      name: "Ironbound Leather Co.",
      description:
        "Heritage-focused workshop specializing in rugged, saddle-stitched leather goods made from vegetable-tanned hides.",
      products: ["Field journals", "Minimalist card holders", "Utility belts"],
      time_in_market: "9 years",
      image: {
        src: "/test.jpg",
        height: 3840,
        width: 2560,
        alt: "Handcraft business picture",
      },
    },
    {
      id: 3,
      name: "Loom & Latitude",
      description:
        "Modern textile studio blending ancient weaving traditions with sustainable, plant-dyed fibers.",
      products: [
        "Indigo-dyed throw blankets",
        "Linen wall tapestries",
        "Block-printed tote bags",
      ],
      time_in_market: "2 years",
      image: {
        src: "/test.jpg",
        height: 3840,
        width: 2560,
        alt: "Handcraft business picture",
      },
    },
    {
      id: 4,
      name: "Driftwood & Dahlia Jewelry",
      description:
        "Ethereal jewelry brand using lost-wax casting to turn found natural elements into precious metal pieces.",
      products: [
        "Raw emerald twig rings",
        "Sterling silver petal earrings",
        "Acorn-capped lockets",
      ],
      time_in_market: "6 years",
      image: {
        src: "/test.jpg",
        height: 3840,
        width: 2560,
        alt: "Handcraft business picture",
      },
    },
    {
      id: 5,
      name: "The Wildwood Apothecary",
      description:
        "Small-batch botanical brand creating holistic self-care products from wild-harvested herbs.",
      products: [
        "Cedar & Sage candles",
        "Calendula body balm",
        "Himalayan floral soaks",
      ],
      time_in_market: "18 months",
      image: {
        src: "/test.jpg",
        height: 3840,
        width: 2560,
        alt: "Handcraft business picture",
      },
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-6 p-3">
      {cards_data.map((card) => [
        <Card
          key={card.id}
          title={card.name}
          description={card.description}
          image={card.image}
        />,
      ])}
    </div>
  );
}
