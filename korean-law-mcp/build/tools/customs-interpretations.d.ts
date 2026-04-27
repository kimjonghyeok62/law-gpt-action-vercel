import { z } from "zod";
import type { LawApiClient } from "../lib/api-client.js";
export declare const searchCustomsInterpretationsSchema: z.ZodObject<{
    query: z.ZodOptional<z.ZodString>;
    display: z.ZodDefault<z.ZodNumber>;
    page: z.ZodDefault<z.ZodNumber>;
    inq: z.ZodOptional<z.ZodNumber>;
    rpl: z.ZodOptional<z.ZodNumber>;
    gana: z.ZodOptional<z.ZodString>;
    explYd: z.ZodOptional<z.ZodString>;
    sort: z.ZodOptional<z.ZodEnum<{
        lasc: "lasc";
        ldes: "ldes";
        dasc: "dasc";
        ddes: "ddes";
    }>>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type SearchCustomsInterpretationsInput = z.infer<typeof searchCustomsInterpretationsSchema>;
export declare function searchCustomsInterpretations(apiClient: LawApiClient, args: SearchCustomsInterpretationsInput): Promise<{
    content: Array<{
        type: string;
        text: string;
    }>;
    isError?: boolean;
}>;
export declare const getCustomsInterpretationTextSchema: z.ZodObject<{
    id: z.ZodString;
    interpretationName: z.ZodOptional<z.ZodString>;
    apiKey: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type GetCustomsInterpretationTextInput = z.infer<typeof getCustomsInterpretationTextSchema>;
export declare function getCustomsInterpretationText(apiClient: LawApiClient, args: GetCustomsInterpretationTextInput): Promise<{
    content: Array<{
        type: string;
        text: string;
    }>;
    isError?: boolean;
}>;
