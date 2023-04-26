import { Transform } from "stream";
export interface ZstdOptions {
  level?: 1|2|3|4|5|6|7|8|9;
  dict?: string;
}

export function decompressStream(params?: ZstdOptions): Transform;
export function compressStream(params?: ZstdOptions): Transform;

/**
 * Descompress zst file blocking loop event
 *
 * @param input - Zst Buffer file
 * @param params - Zstd options
 */
export function decompressSync(input: Buffer, params?: ZstdOptions): Buffer;

/**
 * Compress zst file blocking loop event
 *
 * @param input - Raw file
 * @param params - Zstd options
 */
export function compressSync(input: Buffer, params?: ZstdOptions): Buffer;

/**
 * Compress file to zst asyn
 *
 *
 * @param input - Raw file
 * @param params - Zstd options
 */
export function compress(input: Buffer, params?: ZstdOptions): Promise<Buffer>;