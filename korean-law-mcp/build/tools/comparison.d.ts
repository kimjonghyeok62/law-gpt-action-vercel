/**
 * compare_old_new Tool - 신구법 대조
 *
 * 개선 사항:
 *  - 개정이유 추출 (여러 XML 태그명 시도)
 *  - 항·호·목 수준 변경 요약 자동 생성
 *  - 소관부처명 표시
 *  - 박스 스타일 출력으로 가독성 향상
 */
import { z } from "zod";
import type { LawApiClient } from "../lib/api-client.js";
export declare const CompareOldNewSchema: z.ZodObject<{
    mst: z.ZodOptional<z.ZodString>;
    lawId: z.ZodOptional<z.ZodString>;
    ld: z.ZodOptional<z.ZodString>;
    ln: z.ZodOptional<z.ZodString>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type CompareOldNewInput = z.infer<typeof CompareOldNewSchema>;
export declare function compareOldNew(apiClient: LawApiClient, input: CompareOldNewInput): Promise<{
    content: Array<{
        type: string;
        text: string;
    }>;
    isError?: boolean;
}>;
