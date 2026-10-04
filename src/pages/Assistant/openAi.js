
export default function useclientRequest() {


  async function resclient(message) {

    const data = {
      text: message,

    }

    const request = await fetch('http://localhost:8080/openai', {

      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)

    })

    const result = await request.json()

    const pureResult = result?.data?.output?.[1]?.content?.[0]?.text

    return pureResult


  }

  return { resclient }

}