import * as t from "io-ts";

export const TApiBodyType = t.type({
  userEmailAddress: t.union([t.string, t.undefined]),
  userPassword: t.union([t.string, t.undefined]),
});

export type ApiBodyType = t.TypeOf<typeof TApiBodyType>;
