import { InsultForm } from "./DataTypes";

interface OnlineOption {
  value: string | number;
  label: string;
  children?: OnlineOption[];
}

export const options: OnlineOption[] = [
  {
    value: "인터넷 커뮤니티 사이트",
    label: "인터넷 커뮤니티 사이트",
    children: [
      {
        value: "디시인사이드",
        label: "디시인사이드",
      },
      {
        value: "에펨코리아",
        label: "에펨코리아",
      },
      {
        value: "인벤",
        label: "인벤",
      },
      {
        value: "루리웹",
        label: "루리웹",
      },
      {
        value: "뽐뿌",
        label: "뽐뿌",
      },
      {
        value: "더쿠",
        label: "더쿠",
      },
      {
        value: "기타",
        label: "기타",
      },
    ],
  },
  {
    value: "카카오톡",
    label: "카카오톡",
  },
  {
    value: "네이버",
    label: "네이버",
  },
  {
    value: "페이스북",
    label: "페이스북",
  },
  {
    value: "웹페이지",
    label: "웹페이지",
  },
];

export const initialInsultContent: InsultForm = {
  title: "",
  plaintiffName: "",
  plaintiffResidentRegistrationNumber: "",
  plaintiffAddress: "",
  plaintiffPhoneNumber: "",
  plaintiffNickname: "",
  defendantName: "",
  defendantNickname: "",
  defendantAddress: "",
  defendantPhoneNumber: "",
  incidentDate: "",
  incidentTime: "",
  onlineServiceType: "",
  webServiceDetails: "",
  problemSpeech: "",
  reasonsForInsult: "",
  relatedPeopleCount: "",
  witness1: "",
  witness2: "",
  witness3: "",
  insultDuration: "",
  insultFrequency: "",
  circumstancesForIdentification: "",
  evidence: "",
  submissionDate: "",
  policeStationTeam: "",
};
