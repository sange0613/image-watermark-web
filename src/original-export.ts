type Crop = { x: number; y: number; width: number; height: number };

export function originalCrop(photo: { width: number; height: number; crop: Crop }): Crop {
  const x = Math.max(0, Math.min(photo.width - 1, Math.round(photo.crop.x)));
  const y = Math.max(0, Math.min(photo.height - 1, Math.round(photo.crop.y)));
  return {
    x, y,
    width: Math.max(1, Math.min(photo.width - x, Math.round(photo.crop.width))),
    height: Math.max(1, Math.min(photo.height - y, Math.round(photo.crop.height))),
  };
}
