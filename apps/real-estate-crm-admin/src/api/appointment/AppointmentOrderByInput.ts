import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  date?: SortOrder;
  propertyId?: SortOrder;
  clientId?: SortOrder;
  agentId?: SortOrder;
};
