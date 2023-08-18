export type CoronaData = {
  date: string;
  areaName: string;
  areaCode: string;
  confirmedRate: number;
  latestBy: number;
  confirmed: number;
  deathNew: number;
  death: number;
  deathRate: number;
};

export type CoronaResponse = {
  length: number;
  maxPageLimit: number;
  totalRecords: number;
  data: CoronaData[];
};
