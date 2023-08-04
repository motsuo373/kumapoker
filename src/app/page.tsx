import { Header } from "@/compornents/Header";
import { Box, Text } from "@kuma-ui/core";

export default function Home() {
  return (
    <Box as="main">
      <Header />
      <Text fontSize={24} fontWeight={"bold"} pt={30}>
        Welcome to Kuma 🐻‍❄️
      </Text>
    </Box>
  );
}
