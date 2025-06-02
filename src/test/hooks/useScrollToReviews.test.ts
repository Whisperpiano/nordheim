import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useScrollToReviews } from "../../../src/hooks/scroll/useScrollToReviews";

describe("useScrollToReviews Hook", () => {
  // Mock of the scrollIntoView function that is in the DOM
  const scrollIntoViewMock = vi.fn();

  // Prepare tests
  beforeEach(() => {
    // Clear all previous mock calls
    vi.clearAllMocks();

    // Define the mock implementation for Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = scrollIntoViewMock;
  });

  it("should return reviewsRef and scrollToReviews function", () => {
    const { result } = renderHook(() => useScrollToReviews());

    // Verify that the hook returns the expected properties
    expect(result.current.reviewsRef).toBeDefined();
    expect(result.current.scrollToReviews).toBeInstanceOf(Function);
  });

  it("should call scrollIntoView when scrollToReviews is called", () => {
    const { result } = renderHook(() => useScrollToReviews());

    // Simulate that reviewsRef.current is defined
    Object.defineProperty(result.current.reviewsRef, "current", {
      value: document.createElement("div"),
      configurable: true,
    });

    // Call the scrollToReviews function
    result.current.scrollToReviews();

    // Verify that scrollIntoView was called with the correct arguments
    expect(scrollIntoViewMock).toHaveBeenCalledTimes(1);
    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  it("should not call scrollIntoView when reviewsRef.current is null", () => {
    const { result } = renderHook(() => useScrollToReviews());

    // Simulate that reviewsRef.current is null
    Object.defineProperty(result.current.reviewsRef, "current", {
      value: null,
      configurable: true,
    });

    // Call the scrollToReviews function
    result.current.scrollToReviews();

    // Verify that scrollIntoView was not called
    expect(scrollIntoViewMock).not.toHaveBeenCalled();
  });
});
