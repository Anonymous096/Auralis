import { generateScript } from "@/configs/AiModel";
import { NextResponse } from "next/server";

const SCRIPT_PROMPT = `Write a two different script for 30 seconds video on Topic: {topic},
- Do not ad scene description
- Do not add anything in braces, just return the plain story text
- Give me response in JSON format and follow the schema
- {
	script: [
	{
	content: “”
	},
	],
	}`;

export async function POST(req) {
  const { topic } = await req.json();

  const PROMPT = SCRIPT_PROMPT.replace("{topic}", topic);
  const result = await generateScript.sendMessage(PROMPT);
  const resp = result?.response?.text();

  return NextResponse.json(JSON.parse(resp));
}
