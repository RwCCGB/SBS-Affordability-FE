export type Region = {id: number; name: string};
export type IncomeType = {id: number; Text: string, SubText: string, Type: string};
export type ExpenditureType = {id: number; Text: string, SubText: string, Type: string };
export type IncomeCategory = { id: number, name: string, description?: string};
const BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? 'http://localhost:3001';

async function fetchJSON<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers: {
      ...(init?.headers ?? {}),
    },
  });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`HTTP ${res.status}: ${text || res.statusText}`);
  }
  return (await res.json()) as T;
}

async function GetRegions(): Promise<Region[]>{
  return fetchJSON<Region[]>('/api/regions');
}

export async function GetIncomeCategories():Promise<IncomeCategory[]>{ return fetchJSON<IncomeCategory[]>('/api/categories/income');}

export const StaticData = {GetRegions: ()=> fetchJSON<Region[]>('/api/regions'),  // TODO: Remove and replace
  GetExpenditureTypes: ()=> fetchJSON<ExpenditureType[]>('/api/categories/expenditure'),
  GetIncomeTypes: ()=> fetchJSON<IncomeType[]>('/api/categories/income')
}

export default StaticData;
