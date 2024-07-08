import { Agent as TAgent } from "../api/agent/Agent";

export const AGENT_TITLE_FIELD = "lastName";

export const AgentTitle = (record: TAgent): string => {
  return record.lastName?.toString() || String(record.id);
};
