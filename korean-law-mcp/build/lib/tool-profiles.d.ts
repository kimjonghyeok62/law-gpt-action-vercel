/**
 * 도구 프로필 — 클라이언트별 도구 노출 제어
 *
 * lite:  체인 중심 14개 (Claude 웹 등 컨텍스트 제한 클라이언트용)
 * full:  87개 전체 (Claude Code, STDIO 등 파워 클라이언트용)
 */
import type { McpTool } from "./types.js";
export type ToolProfile = "lite" | "full";
/** 도구 카테고리 매핑 (discover_tools용) */
export declare const TOOL_CATEGORIES: Record<string, string[]>;
/** 프로필 파싱 (잘못된 값이면 full) */
export declare function parseProfile(value: string | undefined): ToolProfile;
/** 프로필에 맞는 도구 필터링 */
export declare function filterToolsByProfile(tools: McpTool[], profile: ToolProfile): McpTool[];
