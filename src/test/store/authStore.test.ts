import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useAuthStore } from "../../store/authStore";
import { User } from "@supabase/supabase-js";
import { supabase } from "../../lib/supabase/client";

// Supabase mock
vi.mock("../../lib/supabase/client", () => ({
  supabase: {
    auth: {
      getUser: vi.fn(),
    },
  },
}));

describe("useAuthStore", () => {
  beforeEach(() => {
    useAuthStore.setState({
      isLoggedIn: false,
    });
    vi.resetAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should start with isLoggedIn set to false", () => {
    const state = useAuthStore.getState();
    expect(state.isLoggedIn).toBe(false);
  });

  it("should update isLoggedIn state when setIsLoggedIn is called", () => {
    const { setIsLoggedIn } = useAuthStore.getState();

    setIsLoggedIn(true);

    expect(useAuthStore.getState().isLoggedIn).toBe(true);
  });

  it("should update isLoggedIn to true when checkAuth finds a user", async () => {
    // Mock the response from Supabase with a user
    const mockUser = {
      id: "test-user-id",
      aud: "authenticated",
      app_metadata: {},
      user_metadata: {},
      created_at: "2023-01-01T00:00:00Z",
    } as User;

    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: mockUser },
      error: null,
    });

    const { checkAuth } = useAuthStore.getState();

    await checkAuth();

    expect(useAuthStore.getState().isLoggedIn).toBe(true);
    expect(supabase.auth.getUser).toHaveBeenCalledTimes(1);
  });

  it("should update isLoggedIn to false when checkAuth does not find a user", async () => {
    // Mock the response from Supabase without a user
    // @ts-expect-error - At runtime, user can be null although the type doesn't reflect it
    vi.mocked(supabase.auth.getUser).mockResolvedValue({
      data: { user: null },
      error: null,
    });

    useAuthStore.setState({ isLoggedIn: true });

    const { checkAuth } = useAuthStore.getState();

    await checkAuth();

    expect(useAuthStore.getState().isLoggedIn).toBe(false);
    expect(supabase.auth.getUser).toHaveBeenCalledTimes(1);
  });
});
