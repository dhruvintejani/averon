const DEFAULT_WIDTHS = [480, 768, 1024, 1280, 1600, 1920] as const;

const withPexelsWidth = (src: string, width: number) => {
  try {
    const url = new URL(src);
    if (url.hostname !== 'images.pexels.com') return src;
    url.searchParams.set('w', String(width));
    url.searchParams.set('auto', 'format,compress');
    url.searchParams.set('q', '82');
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

  let sourceWidth: number | undefined;
  try {
    const parsed = new URL(src);
    const widthParam = Number(parsed.searchParams.get('w'));
    if (Number.isFinite(widthParam) && widthParam > 0) sourceWidth = widthParam;
  } catch {
    sourceWidth = undefined;
  }

  const responsiveWidths = sourceWidth
    ? [...widths.filter((width) => width < sourceWidth), sourceWidth]
    : [...widths];

  return [...new Set(responsiveWidths)]
    .sort((a, b) => a - b)
    .map((width) => `${withPexelsWidth(src, width)} ${width}w`)
    .join(', ');
};
