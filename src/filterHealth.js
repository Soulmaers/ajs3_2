export default function funcFilt(heroes) {
  heroes.sort((prev, next) => next.health - prev.health);
  return heroes;
}
