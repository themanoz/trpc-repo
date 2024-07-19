import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
      async headers() {
        return {
          Authorization: "Bearer 123123123",
        };
      },
    }),
  ],
});

async function main() {
  let response = await trpc.createTodo.mutate({
    title: "manoj@gmail.com"
  });
  console.log(response);
}

main();
