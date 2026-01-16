import { useData as useData$ } from 'vitepress';
import type { TritoTheme } from '@';

export const useData: typeof useData$<TritoTheme.Config> = useData$;
