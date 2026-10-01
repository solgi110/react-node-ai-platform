
export default function clientRequest() {


  async function useClient(message) {
  
    
    const data = {
      text: message,

    }

    const request = await fetch('http://localhost:8080/openai', {

      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)

    })

    return request

  }

  return { useClient }

}
