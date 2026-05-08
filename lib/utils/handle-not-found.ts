import { notFound } from 'next/navigation';

export function assertExists<T>(
  value: T | undefined | null,
): asserts value is T {
  if (!value) {
    notFound();
  }
}
