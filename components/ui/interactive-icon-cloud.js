"use client"

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
  Cloud,
  fetchSimpleIcons,
  renderSimpleIcon,
} from "react-icon-cloud"

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    dragControl: true,
  },
}

export const renderCustomIcon = (icon, theme) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
  const minContrastRatio = theme === "dark" ? 2 : 1.2

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
  })
}

export function IconCloud({ iconSlugs }) {
  const [data, setData] = useState(null)
  const { theme } = useTheme()

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
  }, [iconSlugs])

  const renderedIcons = useMemo(() => {
    if (!data) return null

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon, theme || "light"),
    )
  }, [data, theme])

  return (
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  )
}

const tagColors = [
  { bg: "#E8500215", text: "#E85002", border: "#E8500230" },
  { bg: "#A0755815", text: "#A07558", border: "#A0755830" },
  { bg: "#33333312", text: "#333333", border: "#33333325" },
  { bg: "#22C55E12", text: "#22C55E", border: "#22C55E25" },
  { bg: "#3B82F612", text: "#3B82F6", border: "#3B82F625" },
  { bg: "#F59E0B12", text: "#F59E0B", border: "#F59E0B25" },
]

export function TagCloud({ tags }) {
  return (
    <Cloud {...cloudProps}>
      {tags.map((tag, i) => {
        const color = tagColors[i % tagColors.length]
        return (
          <a
            key={tag}
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "20px",
              backgroundColor: color.bg,
              color: color.text,
              border: `1px solid ${color.border}`,
              fontSize: "18px",
              fontWeight: 600,
              fontFamily: "inherit",
              textDecoration: "none",
              whiteSpace: "nowrap",
              cursor: "default",
              letterSpacing: "0.01em",
            }}
          >
            {tag}
          </a>
        )
      })}
    </Cloud>
  )
}
