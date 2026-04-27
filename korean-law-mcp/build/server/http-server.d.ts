/**
 * Streamable HTTP 서버 - 리모트 배포용 (MCP 표준)
 */
import type { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { type ToolProfile } from "../lib/tool-profiles.js";
export declare function startHTTPServer(createServer: (profile?: ToolProfile) => Server, port: number): Promise<void>;
