import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  name?: string | null;
  address?: string | null;
  price?: number | null;
  propertyType?: "Option1" | null;
  description?: string | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
};
