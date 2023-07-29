export const SECRET_AUTH =
  process.env.NEXTAUTH_SECRET ?? "88e39105caf727b155c596cb8135c9cd";

export const routerApis: string[] = ["/api/calendar-data", "/api/product-data"];

export const routerPages: string[] = ["/calendar", "/table"];
