import { mainAxios, lawAxios } from "./http";
import { AxiosHeaders } from "axios";

const http = mainAxios();
const lawHttp = lawAxios();
const headers = new AxiosHeaders();
headers.set("Content-Type", "application/json;charset=utf-8");

export async function getChatAnswer(message: string) {
  const data = {
    messages: [
      {
        role: "system",
        content: "격식있는 말투로 대답해줘",
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

export async function getWordList(page = 1) {
  const url = `terms/list?page=${page}`;
  return await lawHttp.get(url);
}

export async function getSearchList(searchKeyword: string) {
  const url = `terms/search/${searchKeyword}`;
  return await lawHttp.get(url);
}
