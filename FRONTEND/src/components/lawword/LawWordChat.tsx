import { Flex } from "antd";
import style from "../../styles/lawword/LawWordChat.module.css";
import styled from "../../styles/lawword/LawWordChatCard.module.css";
import SEND from "../../assets/send.png";
import LawWordChatCard from "./LawWordChatCard";
import { useEffect, useRef, useState } from "react";
{
  /* <a href="https://www.flaticon.com/kr/free-icons/" title="보내다 아이콘">보내다 아이콘  제작자: feen - Flaticon</a> */
}

const LawWordChat = () => {
  const [inputText, setInputText] = useState<string>("");
  const [keyCounter, setKeyCounter] = useState(0);
  const chatRef = useRef<HTMLDivElement>(null);
  const [chatList, setChatList] = useState<JSX.Element[]>([]);
  const textHandler = () => {
    if (!inputText.trim()) {
      alert("검색어를 입력하세요");
      return;
    }
    const newChatItem: JSX.Element = (
      <LawWordChatCard key={keyCounter} question={inputText} />
    );
    const newChatList = [...chatList, newChatItem];
    setInputText("");
    setChatList(newChatList);
    setKeyCounter((prevCounter) => prevCounter + 1);
  };

  const enterHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
      if (e.nativeEvent.isComposing) {
        return;
      }
      textHandler();
    }
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chatList]);

  return (
    <Flex
      className={style["chat-body"]}
      justify="space-around"
      align="center"
      vertical>
      <Flex
        className={style["chat-body__content"]}
        ref={chatRef}
        vertical
        align="center">
        <div className={styled["chat-card__answer"]}>
          <span className={styled["chat-card__answer__text"]}>
            안녕하세요! 무엇을 도와드릴까요?
          </span>
        </div>
        {chatList.length > 0 ? chatList : <p>　</p>}
      </Flex>
      <Flex className={style["chat-body__input"]}>
        <textarea
          value={inputText}
          rows={1}
          className={style["chat-body__input__area"]}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={enterHandler}
        />
        <div className={style["chat-body__input__image"]} onClick={textHandler}>
          <img src={SEND} alt="" />
        </div>
      </Flex>
    </Flex>
  );
};

export default LawWordChat;
