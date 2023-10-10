import { setupWorker } from "msw";

import { handlers } from "@/mocks/handlers.ts";

export const worker = setupWorker(...handlers);
