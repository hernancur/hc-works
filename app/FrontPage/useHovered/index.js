"use client";
import { useState } from "react";
import { projectsFrontPage, techStack } from "@/utils/constants";

export default function useHovered() {
  const [hoverTitle, setHoverTitle] = useState(false);
  const [hoveredStates, setHoveredStates] = useState(
    Array(projectsFrontPage.length).fill(false)
  );
  const [hoveredTech, setHoveredTech] = useState(
    Array(techStack.length).fill(false)
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
  function enterTech(index) {
    const updatedStates = [...hoveredTech];
    updatedStates[index] = true;
    setHoveredTech(updatedStates);
  }

  function leaveTech(index) {
    const updatedStates = [...hoveredTech];
    updatedStates[index] = false;
    setHoveredTech(updatedStates);
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
    hoveredTech,
    enterTech,
    leaveTech,
  };
}
