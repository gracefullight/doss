import { registerOTel } from "@vercel/otel";

export function register() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  registerOTel("doss");
}
