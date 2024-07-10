export interface Task {
  id: number;
  period: "morning" | "afternoon" | "night";
  title: string;
  description: string;
  status: "started" | "completed" | "not_started";
}
