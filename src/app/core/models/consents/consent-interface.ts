export type ConsentType = 'ads' | 'newsletter' | 'stats';

export const ConsentTypeName: Map<ConsentType, string> = new Map<
  ConsentType,
  string
>([
  ['ads', 'Be shown targeted ads'],
  ['newsletter', 'Receive newsletter'],
  ['stats', 'Contribute to anonymous visit statistics'],
]);
export interface ConsentInterface {
  name: string;
  value: ConsentType;
  checked: boolean;
}
