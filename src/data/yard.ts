import trainingAdvocacy from "@/assets/training-advocacy.png.asset.json";
import trainingDigital from "@/assets/training-digital.jpg.asset.json";
import trainingEntrepreneurship from "@/assets/training-entrepreneurship.jpg.asset.json";
import trainingEmergency from "@/assets/training-emergency.jpg.asset.json";
import roundtablePhoto from "@/assets/roundtable-2.jpg.asset.json";
import tripoliCityProfile from "@/assets/tripoli-city-profile.jpg.asset.json";
import climateFestival from "@/assets/climate-festival.jpg.asset.json";
import climateChange from "@/assets/climate-change.jpg.asset.json";
import goldTraining from "@/assets/gold-training.jpg.asset.json";
import safeSpaces from "@/assets/safe-spaces.jpg.asset.json";

export const stats = [
  { value: "8", label: "YOUTH-LED campaigns launched" },
  { value: "600", label: "Trees planted in Horsh Ehden" },
  { value: "840", label: "Food & hygiene kits distributed" },
  { value: "4", label: "Roundtables with decision makers" },
];

export const SHOW_UNCONFIRMED_NUMBERS = false; // set true only in preview builds

export type CampaignStat = { value: string | number | null; label: string };

export type Campaign = {
  id: string;
  title: string;
  tag: string;
  image: string;
  videoUrl: string;
  videoType: "youtube" | "instagram";
  poster?: string;
  videoEmbed?: string;
  stats: CampaignStat[];
  cardBlurb: string;
  fullImpact: string;
  published: boolean;
  pullQuote?: string;
  featured?: boolean;
  photoLabel: string;
};

export const campaigns: Campaign[] = [
  {
    id: "express-without-bullets",
    title: "Express Without Bullets",
    tag: "Advocacy",
    image: "/images/campaigns/express-without-bullets.jpg",
    videoUrl: "https://www.youtube.com/watch?v=2cSCAImZWqM",
    videoType: "youtube",
    videoEmbed: "https://www.youtube.com/embed/2cSCAImZWqM",
    stats: [],
    cardBlurb:
      "Sparked by Ahmad\u2019s story (\u201c\u0639\u0628\u0651\u0631 \u0628\u0644\u0627 \u0631\u0635\u0627\u0635\u201d), this movement runs awareness sessions in Tripoli schools, distributes campaign booklets, and times public-safety messages to moments of risk such as exam results, New Year\u2019s fireworks, and unexploded ordnance, with ActionAid and SHiFT.",
    fullImpact: "",
    published: true,
    featured: true,
    photoLabel: "Campaign photo",
  },
  {
    id: "not-a-solution",
    title: "Not a Solution",
    tag: "Advocacy",
    image: "/images/campaigns/not-a-solution.jpg",
    videoUrl: "https://www.instagram.com/reel/DDxR2LIszUU/",
    videoType: "instagram",
    poster: "/posters/not-a-solution.jpg",
    stats: [
      { value: "\n", label: "" },
      { value: "\n", label: "" },
    ],
    cardBlurb:
      "Prevention through sport, taken from a UN training into Tripoli's streets and screens.",
    fullImpact:
      "Drug use is climbing among young people in Tripoli, and it is too often treated as an escape from pressure rather than a danger in itself. After training with UNODC on drug prevention through sport, YARD youth passed the method on themselves\u00a0 running field sessions, storytelling activities and awareness videos for children aged 14\u201318, then taking the message online for a week around the International Day Against Drug Abuse.\u00a0",
    published: true,
    photoLabel: "Campaign photo",
  },
  {
    id: "disability-is-not-an-obstacle",
    title: "Disability is not an Obstacle",
    tag: "Advocacy",
    image: "/images/campaigns/disability-is-not-an-obstacle.jpg",
    videoUrl: "https://www.instagram.com/reel/C0ZU-nQoI5y/",
    videoType: "instagram",
    poster: "/posters/disability.jpg",
    stats: [
      { value: "\n", label: "" },
      { value: "\n", label: "" },
    ],
    cardBlurb: "A campaign that replaced pity with participation.",
    fullImpact:
      "People with disabilities in Tripoli are frequently seen as something to be managed rather than as neighbours, colleagues and contributors. YARD youth built a campaign to shift that perception, combining awareness workshops, interactive community events, a media push and youth training sessions that put the abilities and rights of participants at the centre.\u00a0",
    published: true,
    photoLabel: "Campaign photo",
  },
  {
    id: "an-impact-not-a-burden",
    title: "An Impact, not a Burden",
    tag: "Advocacy",
    image: "/images/campaigns/an-impact-not-a-burden.jpg",
    videoUrl: "https://www.instagram.com/reel/C1upihrL8MY/",
    videoType: "instagram",
    poster: "/posters/impact-not-burden.jpg",
    stats: [
      { value: "\n", label: "" },
      { value: "\n", label: "" },
    ],
    cardBlurb:
      "Refugee and host-community young people, in the same room, making the label visible for what it hides.",
    fullImpact:
      "Syrian refugee families in North Lebanon carry a label before they carry anything else: burden. YARD youth challenged it directly through educational, social and cultural activities workshops, awareness events, interactive sessions and programmes for children and young people that brought refugee and host-community participants into the same room.\u00a0",
    published: true,
    photoLabel: "Campaign photo",
  },
  {
    id: "fundraising-campaign",
    title: "Fundraising Campaign",
    // Tag flagged for confirmation before publishing: this campaign is not advocacy.
    tag: "Solidarity",
    image: "/images/campaigns/fundraising-campaign.jpg",
    videoUrl: "https://www.instagram.com/reel/DWCUlPOCEl4/",
    videoType: "instagram",
    poster: "/posters/fundraising.jpg",
    stats: [
      { value: "\n", label: "" },
      { value: "\n", label: "" },
    ],
    cardBlurb: "Money and goods sourced from the community, for the community.",
    fullImpact:
      "The recent war left families across Lebanon without shelter, food or the basics of daily life. YARD youth joined SHiFT and Have a Dream to run a community fundraising drive, collecting both financial and in-kind donations and mobilising their own neighbourhoods to give.\u00a0",
    published: true,
    photoLabel: "Campaign photo",
  },
  {
    id: "online-harassment",
    title: "Online Harassment",
    tag: "Advocacy",
    image: "/images/campaigns/online-harassment.jpg",
    videoUrl: "https://www.instagram.com/reel/DQr3A5djMsl/",
    videoType: "instagram",
    poster: "/posters/online-harassment.jpg",
    stats: [
      { value: "\n", label: "" },
      { value: "\n", label: "" },
      { value: null, label: "young people reached" },
    ],
    cardBlurb:
      "Recognising online harassment, responding safely, and knowing where to report it.",
    fullImpact:
      "Repeated unwanted messages, threats, content shared without consent and online bullying have made digital space unsafe for many young people\u00a0 and the psychological cost of it is rarely discussed. YARD youth launched an awareness campaign teaching how to recognise online harassment, respond to it safely, protect themselves and others, and report abuse and ask for support when it happens.\u00a0",
    // Set to false to hide this campaign pending Dima's publish/hold decision.
    published: true,
    photoLabel: "Campaign photo",
  },
  {
    id: "waste-management",
    title: "Waste Management",
    tag: "Climate",
    image: "/images/campaigns/waste-management.jpg",
    videoUrl: "https://www.instagram.com/reel/DOwBomXDIWR/",
    videoType: "instagram",
    poster: "/posters/waste-management.jpg",
    stats: [
      { value: "\n", label: "" },
      { value: "\n", label: "" },
    ],
    cardBlurb: "Be Green, Be Clean, Be a Recycling Machine \u2014 a training turned into a habit.",
    fullImpact:
      "Plastic waste piles up in Tripoli's streets and homes because recycling is treated as somebody else's job, not a daily habit. YARD youth trained on waste management with Mohamad Ibrahim of Nuovoplast and ADNPC Trading, then launched Be Green, Be Clean, Be a Recycling Machine\u00a0 touring every SHiFT department to share practical, low-effort recycling habits people could adopt at work and at home.\u00a0",
    published: true,
    photoLabel: "Campaign photo",
  },
  {
    id: "reforestation-campaign",
    title: "Reforestation Campaign",
    tag: "Climate",
    image: "/images/campaigns/reforestation.jpg",
    videoUrl: "https://www.instagram.com/reel/DLfjVcqs8mI/",
    videoType: "instagram",
    stats: [],
    cardBlurb: "Two short films on forest law, and why the penalties no longer bite.",
    fullImpact:
      "Lebanon loses forest every year to fire and encroachment, while the fines meant to protect what is left have been overtaken by the collapse of the lira. After training on reforestation and forest law with the General Manager of Horsh Ehden Nature Reserve, YARD youth built an awareness campaign around two short films: one explaining what the forest trespassing law actually says and what breaking it costs, the other making the case for raising encroachment penalties so they carry real weight again.",
    published: true,
    photoLabel: "Campaign photo",
  },
];



export const trainings = [
  {
    title: "Rights, Advocacy and Leadership\u00a0\n\n",
    desc: "Young people learn their rights, lead YOUTH-LED campaigns, and take their demands to the people who decide.\n",
    trained: "\n",
    photo: trainingAdvocacy.url,
    alt: "YARD youth marching with advocacy placards through a Tripoli street.",
  },
  {
    title: "Climate and Environment\n\n",
    desc: "YOUTH-LED climate action that holds decision makers accountable for water and waste in Lebanon.\n",
    trained: "\n",
    photo: climateChange.url,
    alt: "YARD and ActionAid youth on the Tripoli shore holding a No drills, No oil spills, No kills banner.",
  },
  {
    title: "\u00a0Livelihoods and Entrepreneurship",
    desc: "Youth turn ideas and skills into YOUTH-LED businesses and income.\n",
    trained: "\n",
    photo: trainingEntrepreneurship.url,
    alt: "Entrepreneurship programme participants on stage holding their certificates.",
  },
  {
    title: "Emergency Response",
    desc: "YOUTH-LED action when crisis hits, from shelters in Qobbeh to aid distribution across North Lebanon\n",
    trained: "\n",
    photo: trainingEmergency.url,
    alt: "A YARD volunteer loading relief boxes of food and water into a car.",
  },
  {
    title: "Safe Spaces and Wellbeing",
    desc: "Youth learn to protect themselves and their peers, and to make their communities safer.",
    trained: "\n",
    photo: safeSpaces.url,
    alt: "Young people working together on laptops around a table during a YARD training session in Tripoli.",
  },
  {
    title: "GOLD",
    desc: "GOLD empowers young people with the skills, knowledge, and confidence to become active leaders and changemakers. Through interactive training, participants strengthen their leadership, communication, teamwork, and advocacy skills.",
    trained: "\n",
    photo: goldTraining.url,
    alt: "GOLD participants in Tripoli holding their certificates and raising their fists together.",
  },
];


export type ResearchAndAdvocacy = {
  title: string;
  desc: string;
  tag: string;
  link?: string;
  image?: string;
  imageAlt?: string;
  outcome?: {
    title: string;
    desc: string;
    link: string;
    linkLabel: string;
  };
};

const POLICY_PAPER_URL =
  "https://shiftsih-my.sharepoint.com/:b:/g/personal/iman_arja_shiftsih_org/IQAdRPil_11ZTY7iqaG5UaiDAZOZeowNOobpOcYzWzubsFY?e=cLpqvl";

export const researchAndAdvocacy: ResearchAndAdvocacy[] = [
  {
    title: "YOUTH-LED Roundtables",
    desc: "Four structured dialogues brought young people face-to-face with decision-makers to turn evidence into action.",
    tag: "Policy\n",
    image: roundtablePhoto.url,
    imageAlt: "Youth and decision-makers seated around tables during a YARD roundtable discussion.",
    outcome: {
      title: "Global Humanitarian Policy Paper",
      desc: "Youth policy recommendations presented across four regional roundtables.",
      link: POLICY_PAPER_URL,
      linkLabel: "See Policy Paper",
    },
  },
  {
    title: "Tripoli's City Profile",
    desc: "YOUTH-LED research mapping the city\u2019s social and economic landscape.",
    tag: "Research",
    link: POLICY_PAPER_URL,
    image: tripoliCityProfile.url,
    imageAlt: "The Abu Ali River in Tripoli \u2014 YOUTH-LED research on climate, urban and social change.",
  },
  {
    title: "Climate Abuse Research",
    desc: "YOUTH-LED study on climate accountability and water & waste management.",
    tag: "Research",
    link: "#",
    image: climateFestival.url,
    imageAlt: "YARD youth at the Climate Festival, a YOUTH-LED gathering on climate accountability and action.",
  },
];

export type Podcast = { id: string; title: string; speaker: string; link: string };

export const podcasts: Podcast[] = [
  {
    id: "GwQfg7qaiwo",
    title: "The Link Between Environmental Disasters and Climate Change",
    speaker: "Dr. George Mitri",
    link: "https://youtu.be/GwQfg7qaiwo?feature=shared",
  },
  {
    id: "wnETBye6DG4",
    title: "Plastic Pollution",
    speaker: "Mohammad Ibrahim, Director General, ADNPC",
    link: "https://youtu.be/wnETBye6DG4",
  },
  {
    id: "z8CxptN-AYM",
    title: "The Role of NGOs in Climate Change Mitigation and Adaptation",
    speaker: "Ghaith Bitar, Executive Director, SHiFT Social Innovation Hub",
    link: "https://youtu.be/z8CxptN-AYM",
  },
  {
    id: "HJFkZfej1KE",
    title: "Neglect of Green Spaces in Lebanon",
    speaker: "Sandra Saba, Director, Horsh Ehden Nature Reserve",
    link: "https://youtu.be/HJFkZfej1KE",
  },
  {
    id: "1JNrG92bVhE",
    title: "Water Pollution in Lebanon",
    speaker: "Dr. Marc Bouji, Assistant Professor of Neuroscience, Saint Joseph University, Beirut",
    link: "https://youtu.be/1JNrG92bVhE",
  },
  {
    id: "7s05-_HWs5w",
    title: "Climate Change and Adaptation",
    speaker: "Sabine Abi Aad, Regional Communications and Campaigns Coordinator, ActionAid",
    link: "https://youtu.be/7s05-_HWs5w",
  },
  {
    id: "kExC9a7gOow",
    title: "Fossil Fuels",
    speaker: "Liliana Demartini, Climate Justice Programme Adviser, ActionAid",
    link: "https://youtu.be/kExC9a7gOow",
  },
];


export const theoryOfChange = [
  {
    code: "SO1",
    goal: "Young people, especially marginalised young women, enjoy fundamental rights through improved access to well-resourced programmes and services.",
    activities: ["Advocacy, leadership & debate trainings", "8 YOUTH-LED campaigns"],
    outcome: "Youth exercise their rights with confidence and public voice.",
  },
  {
    code: "SO2",
    goal: "Young people from refugees and host communities enjoy improved, sustainable livelihoods through climate-accountable governance.",
    activities: [
      "Climate Festival, podcast & informative videos",
      "Reforestation & waste management campaigns",
      "Tripoli's City Profile research",
    ],
    outcome: "Communities move toward climate-accountable water & waste management.",
  },
  {
    code: "SO3",
    goal: "Young people from refugees, host communities and IDPs are resilient to shocks and enjoy their rights to protection in fragile situations.",
    activities: [
      "Entrepreneurship & vocational training",
      "Global Humanitarian Program & roundtables",
      "Emergency response (kits, shelters, WASH)",
    ],
    outcome: "Youth respond to crises and access sustainable livelihoods.",
  },
];

export const moreStories = [
  {
    name: "Marketino Media",
    blurb:
      "Hassan, Hussein & Lina turned YARD\u2019s digital media training into a creative agency offering content, branding, and social media services.",
    quote: "YARD gave us a network, a safe space to test ideas, and the motivation to think big.",
  },
  {
    name: "Reina",
    blurb:
      "Once hesitant about the spotlight, Reina now confidently creates videos for her small business, Light the World Scent Candles.",
    quote: "I learned how to speak with clarity and engage my audience.",
  },
  {
    name: "Gheena",
    blurb:
      "YARD\u2019s training gave Gheena the courage to turn her advice and guidance into public, advice-driven content.",
    quote: "YARD helped me realize that my voice matters.",
  },
];

export const fundingOptions = [
  { label: "Sponsor a training cohort", amount: "from $500" },
  { label: "Fund an emergency response kit run", amount: "from $1,000" },
  { label: "Back a YOUTH-LED campaign", amount: "from $2,500" },
];

export const campaignReels = [
  { slug: "not-a-solution", title: "Not a Solution", reelUrl: "https://www.instagram.com/reel/DDxR2LIszUU/", poster: "/posters/not-a-solution.jpg" },
  { slug: "disability", title: "Disability is not an Obstacle", reelUrl: "https://www.instagram.com/reel/C0ZU-nQoI5y/", poster: "/posters/disability.jpg" },
  { slug: "impact-not-burden", title: "An Impact, not a Burden", reelUrl: "https://www.instagram.com/reel/C1upihrL8MY/", poster: "/posters/impact-not-burden.jpg" },
  { slug: "fundraising", title: "Fundraising Campaign", reelUrl: "https://www.instagram.com/reel/DWCUlPOCEl4/", poster: "/posters/fundraising.jpg" },
  { slug: "online-harassment", title: "Online Harassment", reelUrl: "https://www.instagram.com/reel/DQr3A5djMsl/", poster: "/posters/online-harassment.jpg" },
  { slug: "waste-management", title: "Waste Management", reelUrl: "https://www.instagram.com/reel/DOwBomXDIWR/", poster: "/posters/waste-management.jpg" },
];
