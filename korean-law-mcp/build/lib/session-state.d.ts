/**
 * 세션 상태 관리 (AsyncLocalStorage 기반 - 동시 요청 안전)
 */
import { AsyncLocalStorage } from "node:async_hooks";
export declare const sessionStore: AsyncLocalStorage<string | undefined>;
export declare function setSessionApiKey(sessionId: string, apiKey: string): void;
export declare function getSessionApiKey(sessionId: string): string | undefined;
export declare function deleteSession(sessionId: string): void;
