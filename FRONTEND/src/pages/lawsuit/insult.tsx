import "../../App.css";
import LawsuitTab from "../../components/lawsuit/lawsuitTab";
import InsultA4 from "../../components/lawsuit/insult/InsultA4";

export default function InsultPage() {
  return (
    <div className="pages">
      <LawsuitTab cates="모욕죄" />
      <InsultA4 />
    </div>
  );
}
