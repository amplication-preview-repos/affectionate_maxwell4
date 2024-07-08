import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  firstName?: string | null;
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
};
