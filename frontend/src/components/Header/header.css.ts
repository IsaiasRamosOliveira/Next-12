import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const header = recipe({
  base: {
    display: "flex",
    justifyContent: "space-around",
    height: 80
  },
  variants: {
    template: {
      blue: {
        background: "rgb(38, 85, 239)",
      },
      red: {
        background: "rgb(239, 38, 38)"
      },
      violet: {
        background: "rgb(98, 38, 239)"
      }
    }
  },
  compoundVariants: [],
  defaultVariants: {}
})

export const ul = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 34,
  fontSize: 24,
  listStyle: "none"
})