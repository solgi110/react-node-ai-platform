









const ApiKey = process.env.OPENAI_API_KEY
async function openAiRequest(req) {

  const requesting = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${ApiKey}`
    }
    , body: JSON.stringify({
      model: 'gpt-6-luna',
      tools: [

        { type: "web_search" }
      ],
      input: [
        {
          role: 'user',

          content: [
            {
              type: 'input_text',
              text: req
            }
          ]
        }
      ]
    })

  })

  const data = await requesting.json()
  return data
}

export default openAiRequest