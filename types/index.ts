export interface Portfolio {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change: number;
  icon: "btc" | "bnb" | "eth" | "xrp";
}

export interface Balance {
  amount: number;
  changePercent: number;
}
