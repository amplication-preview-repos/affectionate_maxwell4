import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  name?: string | null;
  address?: string | null;
  price?: number | null;
  propertyType?: "Option1" | null;
  description?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
};
