export interface Actor {
  $key?: string,
  title: string,
  description: string,
  persons: Person[],
}
