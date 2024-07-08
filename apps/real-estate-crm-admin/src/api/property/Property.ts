import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  price: number | null;
  propertyType?: "Option1" | null;
  description: string | null;
  appointments?: Array<Appointment>;
};
