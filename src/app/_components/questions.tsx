'use client'
import { ColumnDef } from "@tanstack/react-table"

enum Domain {
    InformationAndIdeas = "InformationAndIdeas",
    CraftAndStructure = "CraftAndStructure",
    StandardEnglishConventions = "StandardEnglishConventions",
    ExpressionOfIdeas = "ExpressionOfIdeas",
}

enum Skill {
    WordsInContext = "WordsInContext",
    TextualEvidenceAndPurpose = "TextualEvidenceAndPurpose",
    CrossTextConnections = "CrossTextConnections",
    CommandOfEvidence = "CommandOfEvidence",
    Inferences = "Inferences",
    CentralIdeasAndDetails = "CentralIdeasAndDetails",
    RhetoricSythesis = "RhetoricSythesis",
    Transitions = "Transitions",
    Boundaries = "Boundaries",
    FormStructureAndSense = "FormStructureAndSense",
}
enum Difficulty {
    Easy = "Easy",
    Medium = "Medium",
    Hard = "Hard",
}

enum Answer {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
}

export interface Question {
    id: string;
    domain: Domain;
    skill: Skill;
    difficulty: Difficulty;
    prompt: string;
    answer_choices: [string, string, string, string];
    correct_answer: Answer;
    correct_answer_rationale: string;
    incorrect_answer_rationales: string;
}

export function Questions({
    questions
}: {
    questions: Question[];
}) {
    console.log(questions);
    return (
        <div>
            {questions.map((question) => (
                <div key={question.id}>
                    <h2>{question.prompt}</h2>
                    <ul>
                        {question.answer_choices.map((choice, index) => (
                            <li key={index}>{choice}</li>
                        ))}
                    </ul>
                </div>
            )
            )}


        </div>
    )
}

