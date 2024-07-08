import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
  firstName?: string | null;
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
};
