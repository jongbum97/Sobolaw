export type UserState = {
  userId: number;
  nickname: string;
  accessToken: string;
  refreshToken: string;
};

export type MypaperWide = {
  key: string;
  name: string;
  target: string;
  date: string;
  tags: string[];
};

export type MypaperNarrow = {
  key: string;
  name: string;
};

export type KeywordType = {
  key: string;
  title: string;
};

export type MemberKeyword = {
  memberKeywordId: number;
  memberId: number;
  word: string;
};

export type MemberRecent = {
  recentPrecedentId: number;
  memberId: number;
  precedentId: number;
};

export type MemberInfo = {
  memberId: number;
  name: string;
  email: string;
  birthday: string;
  memberKeyword: MemberKeyword[];
  memberRecents: MemberRecent[];
};

// interface Highlight {
//   memberPrecedentHighlightId: number;
//   memberPrecedent: string;
//   location: string;
//   highlightType: string;
//   content: number;
// }

export type MemberPrecedent = {
  precedentId: number;
  caseName: string;
  caseNumber: string;
  judgmentDate: string;
  judgment: string;
  courtName: string;
  caseType: string;
  verdictType: string;
  judicialNotice: string;
  verdictSummary: string;
  referencedStatute: string;
  referencedCase: string;
  caseContent: string;
  hit: number;
};

export type MemberLawsuit = {
  type: "Insult" | "Fraud" | "Defamation";
  title: string | null;
  createdTime: string;
  defendantName: string | null;
};

export type DefamationForm = {
  // lawsuitId: number;
  title: string;
  plaintiffName: string;
  plaintiffResidentRegistrationNumber: string;
  plaintiffAddress: string;
  plaintiffPhoneNumber: string;
  defendantName: string;
  defendantAddress: string;
  defendantPhoneNumber: string;
  defendantIdentificationDetails: string;
  incidentDate: string;
  incidentTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  location: string;
  defamationContent: string;
  isFalseAccusation: boolean;
  relatedPeople: string;
  evidence: string;
  submissionDate: string;
  policeStationTeam: string;
};

export type FraudForm = {
  lawsuitId: number;
  title: string;
  plaintiffName: string;
  plaintiffResidentRegistrationNumber: string;
  plaintiffAddress: string;
  plaintiffPhoneNumber: string;
  defendantName: string;
  defendantAddress: string;
  defendantPhoneNumber: string;
  contactDate: string;
  contactTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  tradeSite: string;
  tradedItem: string;
  depositDate: string;
  depositTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  depositAmount: number;
  contactMethod: string;
  isCashDeposit: boolean;
  bankName: string;
  accountNumber: string;
  evidence: string;
  policeStationTeam: string;
};

export type InsultForm = {
  title: string;
  plaintiffName: string;
  plaintiffResidentRegistrationNumber: string;
  plaintiffAddress: string;
  plaintiffPhoneNumber: string;
  plaintiffNickname: string;
  defendantName: string;
  defendantNickname: string;
  defendantAddress: string;
  defendantPhoneNumber: string;
  incidentDate: string;
  incidentTime: string;
  onlineServiceType: string;
  webServiceDetails: string;
  problemSpeech: string;
  reasonsForInsult: string;
  relatedPeopleCount: string;
  witness1: string;
  witness2: string;
  witness3: string;
  insultDuration: string;
  insultFrequency: string;
  circumstancesForIdentification: string;
  evidence: string;
  submissionDate: string;
  policeStationTeam: string;
};
