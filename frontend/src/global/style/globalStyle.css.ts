import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "cursive",
    textDecoration: "none"
})

globalStyle("#page", {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 40,
    height: "calc(100vh - 80px)",
    position: "relative"
})

globalStyle("#page > #title", {
    position: "absolute",
    top: "-60px",
    color: "aliceblue",
    fontSize: 26
})

globalStyle("a", {
    color: "aliceblue"
})

