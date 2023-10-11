"use client";
import { useRef } from "react";
import Link from "next/link";
import { motion, useTransform, useSpring } from "framer-motion";

export default function AppIcon({ mouseX, imgs, href, target }) {
  let ref = useRef();

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [50, 140, 50]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link target={target && target} href={href}>
      <motion.div
        ref={ref}
        style={{ width }}
        className={`z-30 flex items-center justify-center rounded-full border border-neutral-400/20 dark:border-neutral-700 dark:bg-neutral-900/70 cursor-pointer aspect-square`}
      >
        <span className="text-3xl">{imgs}</span>
      </motion.div>
    </Link>
  );
}
