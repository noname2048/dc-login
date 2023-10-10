import { rest } from "msw";

export const handlers = [
  rest.post("/user/login", async (req, res, ctx) => {
    const { username, password } = (await req.json()) as {
      username: string;
      password: string;
    };
    if (username.length >= 4 && username === password)
      return res(
        ctx.status(200),
        ctx.json({
          accessToken: username + "OK",
        }),
      );
    return res(ctx.status(401), ctx.json({ errorMessage: "Invalid login" }));
  }),
  rest.get("/user", (req, res, ctx) => {
    const authorization = req.headers.get("Authorization");
    return res(
      ctx.json({
        authorization,
      }),
    );
  }),
];
