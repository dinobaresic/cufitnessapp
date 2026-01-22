import { Metadata } from "next";
import { QuestionnaireClient } from "./QuestionnaireClient";

export const metadata: Metadata = {
    title: "Prijavi se za Trening - Cudina Fitness",
    description: "Ispuni kratki upitnik i kreni s transformacijom. Grupni, poluindividualni i 1 na 1 treninzi.",
};

export default function QuestionnairePage() {
    return <QuestionnaireClient />;
}
