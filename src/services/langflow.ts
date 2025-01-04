import axios from 'axios';

const LANGFLOW_ID = "f829f83f-e4c3-4742-89d5-9ddee4394fb0"; //add langflow id
const ENDPOINT = "socialpulse_flow"; // add endpoint 
const URL = "https://api.langflow.astra.datastax.com/lf/f829f83f-e4c3-4742-89d5-9ddee4394fb0/api/v1/run/socialpulse_flow"
const APPLICATION_TOKEN = "AstraCS:rcljgjjLklJcKXTLqJyqSdYl:81ae80ca3f28abfe7f208501360be49a08b7467a935115189c79ca84d6635381"; // add your  application token

export const runFlow = async (message: string): Promise<string> => {
    const api_url = `/api/lf/${LANGFLOW_ID}/api/v1/run/socialpulse_flow`;

    const payload = {
        input_value: message,
        output_type: "chat",
        input_type: "chat",
    };

    const headers = {
        Authorization: `Bearer ${APPLICATION_TOKEN}`,
        "Content-Type": "application/json",
    };

    try {
        const response = await axios.post(api_url, payload, { headers });
        return response.data.outputs[0]?.outputs[0]?.results?.message?.text || "No response received";
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(`HTTP error! status: ${error?.response?.status}`);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
};