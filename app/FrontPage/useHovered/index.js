"use client";
import { useState } from "react";
import { projectsFrontPage } from "@/utils/constants";

export default function useHovered() {
  const [hoverTitle, setHoverTitle] = useState(false);
  const [hoveredStates, setHoveredStates] = useState(
    Array(projectsFrontPage.length).fill(false)
  );

  function enterCard(index) {
    const updatedStates = [...hoveredStates];
    updatedStates[index] = true;
    setHoveredStates(updatedStates);
  }

  function leaveCard(index) {
    const updatedStates = [...hoveredStates];
    updatedStates[index] = false;
    setHoveredStates(updatedStates);
  }

  function enterTitle() {
    setHoverTitle(true);
  }

  function leaveTitle() {
    setHoverTitle(false);
  }
  return {
    hoveredStates,
    enterCard,
    leaveCard,
    hoverTitle,
    enterTitle,
    leaveTitle,
  };
}
