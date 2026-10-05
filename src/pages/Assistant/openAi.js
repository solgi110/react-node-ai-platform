
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

    const result = await request.json()
    const pureResult = result?.data?.output?.find(item => item.role === 'assistant')?.content?.[0]?.text

    return pureResult
  }

  return { resclient }

}
