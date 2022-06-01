export default function funcFilt(pers) {
  pers.sort((prev, next) => prev.health - next.health);

  return pers;
}
