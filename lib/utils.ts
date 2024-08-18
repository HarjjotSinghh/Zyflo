import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { env } from "@/env.mjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`
}

export function getCSSVariable(variableName: string): string {
  if (typeof window !== 'undefined') {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(variableName)
      .trim();
  }
  return '';
}


export function areColorsCompatible(
  bgH: number,
  bgS: number,
  bgL: number,
  fgH: number,
  fgS: number,
  fgL: number
): boolean {
  function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    s /= 100;
    l /= 100;
    let r: number, g: number, b: number;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p: number, q: number, t: number): number => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, (h / 360 + 1 / 3) % 1);
      g = hue2rgb(p, q, h / 360);
      b = hue2rgb(p, q, (h / 360 - 1 / 3 + 1) % 1);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  function getLuminance(r: number, g: number, b: number): number {
    const a = [r, g, b].map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  const bgRGB = hslToRgb(bgH, bgS, bgL);
  const fgRGB = hslToRgb(fgH, fgS, fgL);

  const bgLuminance = getLuminance(...bgRGB);
  const fgLuminance = getLuminance(...fgRGB);

  const contrastRatio = (Math.max(bgLuminance, fgLuminance) + 0.05) /
    (Math.min(bgLuminance, fgLuminance) + 0.05);

  return contrastRatio >= 4.5;
}

export function getAutoContrastClassName(comaptibleWithBlack: boolean, comaptibleWithWhite: boolean): "rgb(10,10,10)" | "rgb(245,245,245)" | "" {
  const defaultClassName = "";
  if (!comaptibleWithBlack && !comaptibleWithWhite) {
    return defaultClassName
  }
  if (comaptibleWithBlack) {
    return "rgb(10,10,10)"
  }
  if (comaptibleWithWhite) {
    return "rgb(245,245,245)"
  }
  if (comaptibleWithBlack && comaptibleWithWhite) {
    return "rgb(245,245,245)"
  }
  return defaultClassName
}