import { useSocket } from "@/context/socket";

export default function Home() {
  const socket = useSocket();
  return (
    <h1>Hello</h1>
  );
}
