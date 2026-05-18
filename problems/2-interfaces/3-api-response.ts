/*
  Інтерфейс описує відповідь від сервера з полем `data` довільного типу.
  Замініть `any` на generic-параметр.
*/

interface ApiResponse<T> {
  data: T;
  status: number;
  ok: boolean;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: "Alice" },
  status: 200,
  ok: true,
};

const numbersResponse: ApiResponse<number[]> = {
  data: [1, 2, 3],
  status: 200,
  ok: true,
};

const errorResponse: ApiResponse<null> = {
  data: null,
  status: 404,
  ok: false,
};

/* Test Cases */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<typeof userResponse, ApiResponse<{ id: number; name: string }>>>,
  Expect<Equal<typeof numbersResponse, ApiResponse<number[]>>>,
  Expect<Equal<typeof errorResponse, ApiResponse<null>>>,
];
