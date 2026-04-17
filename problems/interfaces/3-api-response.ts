// Інтерфейс описує відповідь від сервера з полем `data` довільного типу.
// Замініть `any` на generic-параметр.

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
// очікуваний тип userResponse → ApiResponse<{ id: number; name: string }>

const numbersResponse: ApiResponse = {
  data: [1, 2, 3],
  status: 200,
  ok: true,
};
// очікуваний тип numbersResponse → ApiResponse<number[]>

const errorResponse: ApiResponse = {
  data: null,
  status: 404,
  ok: false,
};
// очікуваний тип errorResponse → ApiResponse<null>
