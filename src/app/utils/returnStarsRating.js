export function returnStarsRating(rating, starComponent) {
  const components = [];

  for (let i = 0; i < rating; i++) {
    components.push(starComponent);
  }
  return components;
}
