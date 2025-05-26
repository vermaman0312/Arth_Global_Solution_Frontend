import * as t from "io-ts";

export const ApiResponseType = t.type({
  data: t.string,
});

export type ApiResponseType = t.TypeOf<typeof ApiResponseType>;
