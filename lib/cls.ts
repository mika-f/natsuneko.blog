import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

const cls = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export { cls };
