function createEcm(element: string, color?: string, modifier?: string): string {
  let cls = element;
  if (color) {
    cls += `-${color}`;
  }
  if (modifier) {
    cls += `-${modifier}`;
  }
  return cls;
}

export function useNamespace(element: string) {
  const e = () => createEcm(element);
  const c = (color: string) => (color ? createEcm(element, color) : "");
  const m = (modifier: string) =>
    modifier ? createEcm(element, "", modifier) : "";
  const cm = (color: string, modifier: string) =>
    color && modifier ? createEcm(element, color, modifier) : "";
  return {
    e,
    c,
    m,
    cm,
  };
}
