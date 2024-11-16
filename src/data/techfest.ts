import { PastSponsor } from "./past-sponsors";

export type Event = {
  eventId: string;
  href?: string;
};

export type Events = Array<Event>;

export type TechfestLabel = `v${number}.0`;
export type TechfestValue = {
  path: string;
  startDate: string; //ad
  endDate: string; //ad
  landingPage: {
    header: string;
    desc: string;
    previewVideo: string;
  };
  mediaPartners: PastSponsor[];
  preEvents?: Events;
  postEvents?: Events;
  mainEvents?: Events;
};
export type TechfestData = Record<TechfestLabel, TechfestValue>;

export type CurrentTechfest = TechfestValue & {
  label: TechfestLabel;
  countdownStartsFrom: string;
};

export type CurrentTechfestStatus = "counting" | "started" | "completed";

export const techfestData: TechfestData = {
  "v7.0": {
    path: "/v7.0/",
    startDate: "2024/12/12",
    endDate: "",
    landingPage: {
      desc: "Dive into ACES Techfest v7.0—where ideas spark, skills grow, and the future takes shape. Join the action and redefine innovation!",
      header: "Techfest v7.0: Ignite Your Innovation",
      previewVideo:
        "https://ik.imagekit.io/ej1nrdgis/ACES/ACES.mp4?tr=orig&updatedAt=1731159616125",
    },
    mediaPartners: [
      {
        image: "/assets/images/logo/tech-sathi.png",
        name: "Tech Sathi",
        href: "",
      },
      {
        image: "/assets/images/logo/bijayapur-fm.png",
        name: "Bijayapur FM",
        href: "",
      },
      {
        image: "/assets/images/logo/engineering-vlogs.png",
        name: "Engineering Vlogs",
        href: "",
      },
      {
        image: "/assets/images/logo/engineer-ko-byatha.png",
        name: "Engineer ko Byatha",
        href: "",
      },
    ],
    preEvents: [
      {
        eventId: "ai-art-competition",
        href: "https://www.facebook.com/share/p/186iP9hQCW/",
      },
      {
        eventId: "brain-storming-quiz",
      },
      {
        eventId: "meme-competition",
      },
      {
        eventId: "webinars",
      },
      {
        eventId: "learning-challenge",
      },
      {
        eventId: "workshop",
      },
    ],
    mainEvents: [
      {
        eventId: "hackathon",
      },
      {
        eventId: "intern-fest",
      },
      {
        eventId: "google-maestro",
      },
      {
        eventId: "datathon",
      },
      {
        eventId: "ar-bug-hunt",
      },
      {
        eventId: "game-fest",
      },
      {
        eventId: "capture-the-flag",
      },
      {
        eventId: "ui-ux-competition",
      },
    ],
  },
};

const currentTechfestLabel: TechfestLabel = "v7.0";
export const currentTechfest: CurrentTechfest = {
  label: currentTechfestLabel,
  countdownStartsFrom: "2024/10/25",
  ...techfestData[currentTechfestLabel],
};
