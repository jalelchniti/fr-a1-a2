export const contentTypes = ['lesson', 'exercise', 'video', 'audio', 'quiz', 'grammar', 'vocabulary'] as const;

export type ContentType = typeof contentTypes[number];
