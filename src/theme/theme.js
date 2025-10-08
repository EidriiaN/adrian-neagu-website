import { extendTheme } from "@chakra-ui/react";
import config from "./config";

const theme = extendTheme({
  config,
  styles: {
    global: () => ({
      body: {
        bg: "gray.900",
        color: "gray.50",
      },
    }),
  },
  colors: {
    brand: {
      50: "#e6f7f0",
      100: "#b3e6d1",
      200: "#80d4b3",
      300: "#4dc294",
      400: "#1ab076",
      500: "#00995d",
      600: "#007a4a",
      700: "#005c38",
      800: "#003d25",
      900: "#001f13",
    },
    gray: {
      900: "#121212",
      800: "#1D1D1D",
      700: "#2C2C2C",
      600: "#4B4B4B",
      500: "#6b7280",
      400: "#9ca3af",
      300: "#d1d5db",
      200: "#e5e7eb",
      100: "#f3f4f6",
      50: "#f9fafb",
    },
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
    mono: `'Menlo', 'Monaco', 'Consolas', 'Courier New', monospace`,
  },
  components: {
    Button: {
      variants: {
        outline: {
          border: "2px solid",
          borderColor: "brand.500",
          color: "brand.500",
          _hover: {
            bg: "brand.500",
            color: "gray.900",
          },
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "gray.100",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.200",
      },
    },
  },
});

export default theme;
