const DEFAULT_WIDTHS = [480, 768, 1024, 1280, 1600, 1920] as const;

const withPexelsWidth = (src: string, width: number) => {
  try {
    const url = new URL(src);
    if (url.hostname !== 'images.pexels.com') return src;
    url.searchParams.set('w', String(width));
    return url.toString();
  } catch {
    return src;
  }
};

export const getPexelsSrcSet = (
  src: string,
  widths: readonly number[] = DEFAULT_WIDTHS
) => {
  if (!src.includes('images.pexels.com')) return undefined;

  return widths
    .map((width) => `${withPexelsWidth(src, width)} ${width}w`)
    .join(', ');
};
