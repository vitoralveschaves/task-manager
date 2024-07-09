export interface Task {
  id: number;
  period: "morning" | "afternoon" | "night";
  title: string;
  content: string;
  status: "started" | "completed" | "not_started";
}
