import { authentication, createDirectus, rest } from "@directus/sdk";

export const directus = createDirectus('http://localhost:8056').with(authentication('cookie', { credentials: 'include' })).with(rest({ credentials: 'include' }));