/**
 * Chain Tools -- 질문 유형별 다단계 자동 체이닝
 * 7개 체인 + 키워드 트리거 확장
 */
import { z } from "zod";
import type { LawApiClient } from "../lib/api-client.js";
import type { ToolResponse } from "../lib/types.js";
export declare const chainLawSystemSchema: z.ZodObject<{
    query: z.ZodString;
    articles: z.ZodOptional<z.ZodArray<z.ZodString>>;
    scenario: z.ZodOptional<z.ZodEnum<{
        delegation: "delegation";
        impact: "impact";
    }>>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare function chainLawSystem(apiClient: LawApiClient, input: z.infer<typeof chainLawSystemSchema>): Promise<ToolResponse>;
export declare const chainActionBasisSchema: z.ZodObject<{
    query: z.ZodString;
    scenario: z.ZodOptional<z.ZodEnum<{
        penalty: "penalty";
    }>>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare function chainActionBasis(apiClient: LawApiClient, input: z.infer<typeof chainActionBasisSchema>): Promise<ToolResponse>;
export declare const chainDisputePrepSchema: z.ZodObject<{
    query: z.ZodString;
    domain: z.ZodOptional<z.ZodEnum<{
        general: "general";
        tax: "tax";
        labor: "labor";
        privacy: "privacy";
        competition: "competition";
    }>>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare function chainDisputePrep(apiClient: LawApiClient, input: z.infer<typeof chainDisputePrepSchema>): Promise<ToolResponse>;
export declare const chainAmendmentTrackSchema: z.ZodObject<{
    query: z.ZodString;
    mst: z.ZodOptional<z.ZodString>;
    lawId: z.ZodOptional<z.ZodString>;
    maxAmendments: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    fromDate: z.ZodOptional<z.ZodString>;
    scenario: z.ZodOptional<z.ZodEnum<{
        timeline: "timeline";
    }>>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare function chainAmendmentTrack(apiClient: LawApiClient, input: z.infer<typeof chainAmendmentTrackSchema>): Promise<ToolResponse>;
export declare const chainOrdinanceCompareSchema: z.ZodObject<{
    query: z.ZodString;
    parentLaw: z.ZodOptional<z.ZodString>;
    scenario: z.ZodOptional<z.ZodEnum<{
        compliance: "compliance";
    }>>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare function chainOrdinanceCompare(apiClient: LawApiClient, input: z.infer<typeof chainOrdinanceCompareSchema>): Promise<ToolResponse>;
export declare const chainFullResearchSchema: z.ZodObject<{
    query: z.ZodString;
    scenario: z.ZodOptional<z.ZodEnum<{
        customs: "customs";
    }>>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare function chainFullResearch(apiClient: LawApiClient, input: z.infer<typeof chainFullResearchSchema>): Promise<ToolResponse>;
export declare const chainProcedureDetailSchema: z.ZodObject<{
    query: z.ZodString;
    scenario: z.ZodOptional<z.ZodEnum<{
        manual: "manual";
    }>>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare function chainProcedureDetail(apiClient: LawApiClient, input: z.infer<typeof chainProcedureDetailSchema>): Promise<ToolResponse>;
export declare const chainDocumentReviewSchema: z.ZodObject<{
    text: z.ZodString;
    maxClauses: z.ZodDefault<z.ZodNumber>;
    includeCases: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare function chainDocumentReview(apiClient: LawApiClient, input: z.infer<typeof chainDocumentReviewSchema>): Promise<ToolResponse>;
export declare const chainArticleHistorySchema: z.ZodObject<{
    lawName: z.ZodString;
    jo: z.ZodOptional<z.ZodString>;
    fromDate: z.ZodOptional<z.ZodString>;
    toDate: z.ZodOptional<z.ZodString>;
    includeComparison: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    maxAmendments: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * chain_article_history: 특정 조문의 개정 연혁을 시계열로 정리
 *
 * 동작 흐름:
 *  1. lawName → findLaws()로 lawId/mst 해결
 *  2. getArticleHistory(lawId, jo, fromDate, toDate)로 조문 개정 이력 조회
 *  3. includeComparison=true이면 각 MST에 대해 compareOldNew() 호출 → 개정이유 + 신구대조
 *  4. 시계열 순으로 정리하여 반환
 */
export declare function chainArticleHistory(apiClient: LawApiClient, input: z.infer<typeof chainArticleHistorySchema>): Promise<ToolResponse>;
export declare const chainHistoricalArticleSchema: z.ZodObject<{
    lawName: z.ZodString;
    jo: z.ZodOptional<z.ZodString>;
    targetDate: z.ZodString;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
/**
 * chain_historical_article: 특정 날짜 기준으로 조문 조회
 *
 * 동작 흐름:
 *  1. searchHistoricalLaw(lawName)로 전체 연혁 버전 목록(MST + 시행일자) 조회
 *  2. targetDate 이전 중 가장 최근 시행 버전 선택
 *  3. getHistoricalLaw(mst, jo)로 해당 버전 조문 내용 반환
 */
export declare function chainHistoricalArticle(apiClient: LawApiClient, input: z.infer<typeof chainHistoricalArticleSchema>): Promise<ToolResponse>;
