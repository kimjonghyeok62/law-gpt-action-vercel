/**
 * Fetch with retry and timeout
 * - Exponential backoff for 429, 503, 504
 * - AbortController for timeout
 */
export interface FetchWithRetryOptions extends RequestInit {
    /** Request timeout in ms (default: 30000) */
    timeout?: number;
    /** Max retry attempts (default: 3) */
    retries?: number;
    /** Base delay for exponential backoff in ms (default: 1000) */
    retryDelay?: number;
    /** HTTP status codes to retry on (default: [429, 503, 504]) */
    retryOn?: number[];
}
/**
 * Fetch with automatic retry and timeout
 */
export declare function fetchWithRetry(url: string, options?: FetchWithRetryOptions): Promise<Response>;
