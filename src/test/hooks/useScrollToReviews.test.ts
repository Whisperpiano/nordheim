import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useScrollToReviews } from "../../../src/hooks/scroll/useScrollToReviews";

describe("useScrollToReviews Hook", () => {
  // Mock of the scrollIntoView
  const scrollIntoViewMock = vi.fn();

  // Prepare tests
  beforeEach(() => {
    vi.clearAllMocks();
    Element.prototype.scrollIntoView = scrollIntoViewMock;
  });

  it("should return reviewsRef and scrollToReviews function", () => {
    const { result } = renderHook(() => useScrollToReviews());

    expect(result.current.reviewsRef).toBeDefined();
    expect(result.current.scrollToReviews).toBeInstanceOf(Function);
  });

  it("should call scrollIntoView when scrollToReviews is called", () => {
    const { result } = renderHook(() => useScrollToReviews());

    Object.defineProperty(result.current.reviewsRef, "current", {
      value: document.createElement("div"),
      configurable: true,
    });

    result.current.scrollToReviews();

    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  it("should not call scrollIntoView when reviewsRef.current is null", () => {
    const { result } = renderHook(() => useScrollToReviews());

    Object.defineProperty(result.current.reviewsRef, "current", {
      value: null,
      configurable: true,
    });

    result.current.scrollToReviews();
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });
});
