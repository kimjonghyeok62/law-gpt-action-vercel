/**
 * 세션 상태 관리 (AsyncLocalStorage 기반 - 동시 요청 안전)
 */
import { AsyncLocalStorage } from "node:async_hooks";
// 요청별 세션 ID 격리 (레이스 컨디션 방지)
export const sessionStore = new AsyncLocalStorage();
// 세션별 API 키 맵
const MAX_SESSIONS = 100;
const sessionApiKeys = new Map();
export function setSessionApiKey(sessionId, apiKey) {
    // 메모리 누수 방지: 최대 세션 수 초과 시 가장 오래된 세션 삭제
    if (sessionApiKeys.size >= MAX_SESSIONS && !sessionApiKeys.has(sessionId)) {
        const oldest = sessionApiKeys.keys().next().value;
        if (oldest)
            sessionApiKeys.delete(oldest);
    }
    sessionApiKeys.set(sessionId, apiKey);
}
export function getSessionApiKey(sessionId) {
    return sessionApiKeys.get(sessionId);
}
export function deleteSession(sessionId) {
    sessionApiKeys.delete(sessionId);
}
