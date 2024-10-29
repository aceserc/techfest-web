export type TechfestLabel = `v${number}.0`;
export type TechfestValue = {
  path: string;
  startDate: string; //ad
  endDate: string; //ad
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
    startDate: "2024/12/11",
    endDate: "2025/1/2",
  },
};
const currentTechfestLabel: TechfestLabel = "v7.0";
export const currentTechfest: CurrentTechfest = {
  label: currentTechfestLabel,
  countdownStartsFrom: "2024/10/25",
  ...techfestData[currentTechfestLabel],
};
