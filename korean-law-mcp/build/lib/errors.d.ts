/**
 * 통일된 에러 처리 모듈
 */
import type { ToolResponse } from "./types.js";
/**
 * 에러 코드
 */
export declare const ErrorCodes: {
    readonly NOT_FOUND: "LAW_NOT_FOUND";
    readonly INVALID_PARAM: "INVALID_PARAMETER";
    readonly API_ERROR: "EXTERNAL_API_ERROR";
    readonly RATE_LIMITED: "RATE_LIMITED";
    readonly TIMEOUT: "REQUEST_TIMEOUT";
    readonly PARSE_ERROR: "PARSE_ERROR";
};
export type ErrorCode = typeof ErrorCodes[keyof typeof ErrorCodes];
/**
 * 법제처 API 에러
 */
export declare class LawApiError extends Error {
    code: ErrorCode;
    suggestions: string[];
    constructor(message: string, code: ErrorCode, suggestions?: string[]);
    format(): string;
}
/**
 * 도구 에러 응답 생성 -- 구조화된 포맷
 *
 * 출력 형식:
 *   ❌ [에러코드] 메시지
 *   🔧 도구: <toolName>
 *   💡 제안: ...
 */
/**
 * 검색 결과 없음 힌트 생성
 * 법제처 API는 공백 키워드를 AND 조건으로 처리하므로, 키워드가 많으면 결과가 0건이 되기 쉬움
 */
export declare function noResultHint(query: string, label?: string): ToolResponse;
export declare function formatToolError(error: unknown, context?: string): ToolResponse;
