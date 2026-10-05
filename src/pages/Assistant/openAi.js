
const baseUrl = import.meta.env.VITE_API_BASE_URL

console.log(baseUrl);

export default function useclientRequest() {

  async function resclient(message) {

    const data = {
      text: message,
    }

    const request = await fetch(`${baseUrl}/openai`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)

    })


    console.log(request);
    
    const result = await request.json()
    const pureResult = result?.data?.output?.[1]?.content?.[0]?.text
    return pureResult
  }

  return { resclient }

}
// ==>  https://react-node-ai-platform-api.onrender.com