/**
 *
 * @param name image name
 * @returns `/image/${name}.png`
 */
export const getPublicImage = (name: string) => {
  return `/images/${name}.png`;
};
