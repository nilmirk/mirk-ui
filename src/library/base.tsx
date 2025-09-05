enum Color {
  White = "white",
  WhiteAccent = "whiteAccent",
  Black = "black",
  BlackAccent = "blackAccent",
  Accent = "accent",
  AccentWhite = "accentWhite",
  AccentBlack = "accentBlack",
}

enum Text {
  Heading1 = "heading1",
  Heading2 = "heading2",
  Heading3 = "heading3",
  Heading4 = "heading4",
  Body1 = "body1",
  Body2 = "body2",
  Body3 = "body3",
  Button1 = "button1",
  Button2 = "button2",
  Caption1 = "caption1",
  Caption2 = "caption2",
}

export interface BaseProps {
  children: React.ReactNode;
  className?: string;
  text?: Text;
}

export { Color, Text };