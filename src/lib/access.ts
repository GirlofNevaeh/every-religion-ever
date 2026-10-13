import { createServerFn } from "@tanstack/react-start";

export const hasAccess = createServerFn({ method: "GET" }).handler(async () => {
  const { readAccess } = await import("./access.server");
  return readAccess();
});

export const unlockWithKey = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (!data || typeof data !== "object" || !("key" in data)) {
      throw new Error("Enter the access key.");
    }
    const key = (data as { key: unknown }).key;
    if (typeof key !== "string") throw new Error("Enter the access key.");
    const trimmed = key.trim();
    if (!trimmed || trimmed.length > 80) throw new Error("Enter the access key.");
    return { key: trimmed };
  })
  .handler(async ({ data }) => {
    const { grantAccess, keyIsValid } = await import("./access.server");
    if (!keyIsValid(data.key)) return { ok: false as const };
    grantAccess();
    return { ok: true as const };
  });
