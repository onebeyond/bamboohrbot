import { type KnownBlock, type Block } from '@slack/bolt';

type TBambooHREmployeesDirectoryField = {
  id: string;
  type: string;
  name: string;
};

export type TBambooHREmployee = {
  id: string;
  displayName?: string;
  firstName?: string;
  lastName?: string;
  preferredName?: string;
  jobTitle?: string;
  workPhone?: string;
  workEmail?: string;
  department?: string;
  location?: string;
  division?: string;
  linkedIn?: string;
  pronouns?: string;
  workPhoneExtension?: string;
  photoUploaded?: boolean;
  photoUrl?: string;
  canUploadPhoto?: number;
};

export type TBambooHREmployeeExtended = TBambooHREmployee & {
  birthday?: string; // MM-DD
  hireDate?: string; // YYYY-MM-DD
  country?: string;
  // Manually calculated
  birthdayOn?: string; // used to say the day when the birthday is on weekend
  anniversaryOn?: string; // used to say the day when the birthday is on weekend
  anniversary?: string; // ordinal number of the anniversary
};

export type TBambooHREmployeesDirectory = {
  fields: TBambooHREmployeesDirectoryField[];
  employees: TBambooHREmployee[];
};

export type TBambooHREmployeeAtOffice = {
  id: string;
  employeeId: string;
  status: Record<string, string>;
  name: string;
  start: string;
  end: string;
  created: string;
  type: Record<string, string>;
  amount: Record<string, string>;
  actions: Record<string, boolean>;
  dates: Record<string, string>;
  notes: Record<string, string>;
};

export type TBambooHRWhosOut = {
  id: number;
  type: string;
  employeeId?: number;
  name: string;
  start: string; // YYYY-MM-DD
  end: string; // YYYY-MM-DD
};

export type TWhosOut = {
  next: TBambooHRWhosOut[];
  month: TBambooHRWhosOut[];
};

export type TSecrets = Record<string, any>;

export type TSlackBlock = KnownBlock | Block;

export type TSlackMessage = {
  text: string;
  blocks: TSlackBlock[];
};
