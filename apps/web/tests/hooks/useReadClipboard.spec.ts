import { renderHook, waitFor } from "@testing-library/react";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import useReadClipboard from "~/hooks/useReadClipboard";

describe("useReadClipboard", () => {
  beforeAll(() => {
    Object.assign(navigator, {
      permissions: {
        query: vi
          .fn()
          .mockImplementation((_) => Promise.resolve({ state: "granted" })),
      },
      clipboard: {
        readText: vi
          .fn()
          .mockImplementation(() => Promise.resolve("copied data")),
      },
    });
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  it("reads clipboard and permissions correctly when permission is granted", async () => {
    const { result } = renderHook(() => useReadClipboard());

    await waitFor(() => {
      expect(result.current.permission).toBe("granted");
      expect(result.current.value).toBe("copied data");
    });
  });

  it("reads clipboard and permissions correctly when permission is denied", async () => {
    navigator.permissions.query = vi
      .fn()
      .mockImplementation((_) => Promise.resolve({ state: "denied" }));

    const { result } = renderHook(() => useReadClipboard());

    await waitFor(() => {
      expect(result.current.permission).toBe("denied");
      expect(result.current.value).toBe(null);
    });
  });
});
