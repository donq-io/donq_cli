export const kebabCase = (string: string) =>
  string
    .replaceAll(/([a-z])([A-Z])/g, '$1-$2')
    .replaceAll(/[\s_]+/g, '-')
    .toLowerCase()
