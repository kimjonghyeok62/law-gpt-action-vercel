/**
 * get_law_text Tool - 법령 조문 조회
 *
 * 개선 사항:
 *  - lawName 파라미터 추가: mst/lawId 없이 법령명만으로 조문 조회 가능
 *  - jo 자유형식 지원: '제38조', '38조', '38', '38조의2' 모두 허용
 */
import { z } from "zod";
import type { LawApiClient } from "../lib/api-client.js";
export declare const GetLawTextSchema: z.ZodObject<{
    lawName: z.ZodOptional<z.ZodString>;
    mst: z.ZodOptional<z.ZodString>;
    lawId: z.ZodOptional<z.ZodString>;
    jo: z.ZodOptional<z.ZodString>;
    efYd: z.ZodOptional<z.ZodString>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetLawTextInput = z.infer<typeof GetLawTextSchema>;
export declare function getLawText(apiClient: LawApiClient, input: GetLawTextInput): Promise<{
    content: Array<{
        type: string;
        text: string;
    }>;
    isError?: boolean;
}>;
