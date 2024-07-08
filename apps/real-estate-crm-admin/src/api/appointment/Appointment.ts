import { Property } from "../property/Property";
import { Client } from "../client/Client";
import { Agent } from "../agent/Agent";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  date: Date | null;
  property?: Property | null;
  client?: Client | null;
  agent?: Agent | null;
};
