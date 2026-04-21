/*
  Інтерфейс описує відповідь від сервера з полем `data` довільного типу.
  Замініть `any` на generic-параметр.
*/

interface ApiResponse {
  data: any;
  status: number;
  ok: boolean;
}

const userResponse: ApiResponse = {
  data: { id: 1, name: "Alice" },
  status: 200,
  ok: true,
};

const numbersResponse: ApiResponse = {
  data: [1, 2, 3],
  status: 200,
  ok: true,
};

const errorResponse: ApiResponse = {
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
