/* eslint-disable @typescript-eslint/no-explicit-any -- Ok */

import type { unknowns } from "./core";

export interface Async<R, A extends unknowns = readonly []> {
  /**
   * Async function.
   *
   * @param args - Arguments.
   * @returns Promise.
   */
  (...args: A): Promise<R>;
}

export type AsyncPromise<R, A extends unknowns = readonly []> =
  // @prettier
  Async<R, A> | Promise<R>;

export type AsyncPromiseSync<R, A extends unknowns = readonly []> =
  // @prettier
  Async<R, A> | Promise<R> | Sync<R, A>;

export interface CallSignature<T extends Callable> {
  /**
   * Call signature.
   *
   * @param this - This argument.
   * @param args - Arguments.
   * @returns Result.
   */
  (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T>;
}

export interface Callable<T = unknown> {
  /**
   * Function.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  (...args: readonly any[]): T;
}

export interface ConstructSignature<T extends Constructor> {
  /**
   * Construct signature.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  new (...args: ConstructorParameters<T>): InstanceType<T>;
}

export interface Constructor<T = unknown> {
  /**
   * Constructor.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  new (...args: readonly any[]): T;
}

export interface Sync<R, A extends unknowns = readonly []> {
  /**
   * Function.
   *
   * @param args - Arguments.
   * @returns Result.
   */
  (...args: A): R;
}
