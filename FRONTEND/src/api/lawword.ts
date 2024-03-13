import { mainAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = mainAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

export async function getChatAnswer({ message }: { message: string }) {
  const data = {
    messages: [
      {
        role: "system",
        content: "물어보는 질문에 자세히 답변해줘",
      },
      {
        role: "user",
        content: message,
      },
    ],
  };
  const url = "/ai-service/chat-bot";
  return await http.post(url, data);
}
