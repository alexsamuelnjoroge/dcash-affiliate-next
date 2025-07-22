export interface StatEntry {
  date: number;
  sign_ups: number;
  deposits: number;
  withdrawals: number;
  revenue: number;
}

export interface StatHistory {
  stat_history: StatEntry[];
}
