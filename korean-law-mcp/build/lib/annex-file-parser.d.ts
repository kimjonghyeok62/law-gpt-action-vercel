/**
 * 별표 파일 파서 — kordoc 위임
 *
 * HWPX/HWP5/PDF 모두 kordoc 통합 파서에 위임.
 * kordoc은 colAddr/rowAddr 기반 HWP5 셀 배치, PDF 라인+클러스터 이중 테이블 감지,
 * ZIP bomb 방지, 깨진 ZIP 복구 등 강화된 파싱 기능을 제공.
 *
 * @see https://github.com/chrisryugj/kordoc
 */
import type { FileType } from "kordoc";
/** 마크다운 표에서 추출한 구조화 데이터 (수치 계산 보조용) */
export interface TableData {
    headers: string[];
    rows: string[][];
}
export interface AnnexParseResult {
    success: boolean;
    markdown?: string;
    /** 마크다운 표를 JSON으로 구조화한 데이터 — LLM 수치 계산 보조 */
    tables?: TableData[];
    fileType: FileType;
    /** 이미지 기반 PDF 여부 (텍스트 추출 불가) */
    isImageBased?: boolean;
    /** PDF 페이지 수 */
    pageCount?: number;
    error?: string;
}
export declare function parseAnnexFile(buffer: ArrayBuffer): Promise<AnnexParseResult>;
