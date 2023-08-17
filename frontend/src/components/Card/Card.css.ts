import { style } from "@vanilla-extract/css"
export const card = style({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  background: "transparent",
  backdropFilter: "blur(5px)",
  minWidth: 260,
  height: 300,
  padding: "20px",
  color: "black",
  borderRadius: 10,
})